import { groq } from '#imports'

export const teachingTestimonialsQuery = groq`
  *[_type == "testimonial" && discipline == $discipline] {
    _id, studentName, discipline, quote, transformationBefore, transformationAfter,
    duration, photo, featured
  }
`
