import { MetadataRoute } from 'next'

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://directoriesnetwork.com',
      lastModified: new Date(),
    },
    {
      url: 'https://directoriesnetwork.com/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://directoriesnetwork.com/privacy',
      lastModified: new Date(),
    },
  ]
}
