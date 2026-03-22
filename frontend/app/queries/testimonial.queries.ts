import { groq } from '#imports'

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true][0..5] {
    _id, studentName, discipline, quote, transformationBefore,
    transformationAfter, duration, photo
  }
`
