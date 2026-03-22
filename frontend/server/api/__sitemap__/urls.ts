import { defineSitemapEventHandler } from "#imports";

export default defineSitemapEventHandler(async () => {
  const config = useRuntimeConfig();
  const projectId = config.public.sanityProjectId;
  const dataset = config.public.sanityDataset;
  const apiVersion = config.public.sanityApiVersion;

  if (!projectId) return [];

  try {
    const query = encodeURIComponent(
      '*[_type == "article" && defined(slug.current)]{ "slug": slug.current, _updatedAt }'
    );
    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;
    const response = await $fetch<{ result: Array<{ slug: string; _updatedAt: string }> }>(url);

    return (response.result || []).map((article) => ({
      loc: `/blog/${article.slug}`,
      lastmod: article._updatedAt,
    }));
  } catch {
    return [];
  }
});
