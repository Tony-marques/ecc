import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'nraaxdxm'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const apiVersion = '2025-01-24'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)
