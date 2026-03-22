declare module "nuxt/schema" {
  interface RuntimeConfig {
    sanityApiReadToken: string;
    resendApiKey: string;
  }

  interface PublicRuntimeConfig {
    sanityProjectId: string;
    sanityDataset: string;
    sanityApiVersion: string;
    siteUrl: string;
  }
}

export {};
