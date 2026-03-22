import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  _honey: z.string().max(0).optional(), // honeypot: must be empty
})

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW = 60 * 60 * 1000 // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

export default defineEventHandler(async (event) => {
  // Enforce JSON content type (CSRF mitigation)
  const contentType = getHeader(event, 'content-type')
  if (!contentType?.includes('application/json')) {
    throw createError({ statusCode: 415, statusMessage: 'Content-Type must be application/json' })
  }

  // Rate limiting
  const ip = getRequestIP(event) || 'unknown'
  if (!checkRateLimit(ip)) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests. Please try again later.' })
  }

  const body = await readBody(event)
  const result = contactSchema.safeParse(body)

  if (!result.success) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid form data', data: { message: 'Please check your input and try again.' } })
  }

  // Honeypot check
  if (result.data._honey) {
    // Silently succeed (don't reveal bot detection)
    return { success: true }
  }

  const config = useRuntimeConfig(event)

  if (!config.resendApiKey) {
    console.error('NUXT_RESEND_API_KEY is not configured')
    throw createError({ statusCode: 500, data: { message: 'Contact form is not configured. Please try again later.' } })
  }

  try {
    await $fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: {
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'delivered@resend.dev', // Replace with real email in production
        subject: `Contact from ${result.data.name}`,
        text: `From: ${result.data.name} (${result.data.email})\n\nMessage:\n${result.data.message}`,
      },
    })
  } catch (err) {
    console.error('Resend API error:', err)
    throw createError({ statusCode: 500, data: { message: 'Failed to send message. Please try again later.' } })
  }

  return { success: true }
})
