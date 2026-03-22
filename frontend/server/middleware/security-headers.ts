export default defineEventHandler((event) => {
  const headers = event.node.res;

  headers.setHeader("X-Content-Type-Options", "nosniff");
  headers.setHeader("X-Frame-Options", "DENY");
  headers.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.setHeader(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  headers.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://assets.calendly.com",
      "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
      "img-src 'self' data: https://cdn.sanity.io",
      "font-src 'self'",
      "connect-src 'self' https://*.sanity.io https://api.resend.com",
      "frame-src https://calendly.com",
    ].join("; ")
  );
});
