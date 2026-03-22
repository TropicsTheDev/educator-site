import { siteSettingsQuery } from '~/queries/site.queries'

export function useSiteSettings() {
  return useSanityQuery(siteSettingsQuery, {}, { key: 'site-settings' })
}
