import { groq } from '#imports'

export const articleListQuery = groq`
  *[_type == "article"] | order(publishDate desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishDate,
    featuredImage,
    "category": category->{_id, title, "slug": slug.current, discipline}
  }
`

export const articleDetailQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    publishDate,
    featuredImage,
    seo,
    "category": category->{_id, title, "slug": slug.current, discipline},
    "relatedPosts": *[_type == "article" && category._ref == ^.category._ref && slug.current != $slug][0..2] {
      _id, title, "slug": slug.current, excerpt, featuredImage, publishDate
    }
  }
`

export const articlesByCategoryQuery = groq`
  *[_type == "article" && category->slug.current == $category] | order(publishDate desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishDate,
    featuredImage,
    "category": category->{_id, title, "slug": slug.current, discipline}
  }
`

export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id, title, "slug": slug.current, description
  }
`
