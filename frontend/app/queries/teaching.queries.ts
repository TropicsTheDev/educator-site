import { groq } from '#imports'

export const teachingPageQuery = groq`
  {
    "page": *[_type == "teachingPage" && discipline == $discipline][0] {
      _id, title, "slug": slug.current, discipline, methodology, benefits,
      bookingCtaText, heroImage, seo
    },
    "testimonials": *[_type == "testimonial" && discipline == $discipline] {
      _id, studentName, discipline, quote, transformationBefore, transformationAfter,
      duration, photo, featured
    },
    "events": *[_type == "event" && discipline == $discipline && date > now()] | order(date asc)[0..2] {
      _id, title, "slug": slug.current, date, endDate, location, bookingUrl, capacity
    }
  }
`
