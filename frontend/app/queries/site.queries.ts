import { groq } from '#imports'

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteTitle, coachName, email, phone, location,
    socialLinks, calendlyBjjUrl, calendlyKizUrl, defaultOgImage
  }
`

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    bio, methodologyDescription, credentials, heroImage
  }
`

export const homePageQuery = groq`
  {
    "testimonials": *[_type == "testimonial" && featured == true][0..5] {
      _id, studentName, discipline, quote, photo
    },
    "recentPosts": *[_type == "article"] | order(publishDate desc)[0..2] {
      _id, title, "slug": slug.current, excerpt, publishDate, featuredImage,
      "category": category->{title, "slug": slug.current}
    }
  }
`

export const projectsQuery = groq`
  *[_type == "project"] | order(featured desc, _createdAt desc) {
    _id, title, "slug": slug.current, description, featuredImage,
    techStack, liveUrl, sourceUrl, featured
  }
`
