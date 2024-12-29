import imageUrlBuilder from '@sanity/image-url'
import { client } from './db'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Add this alias for backward compatibility
export const urlForImage = urlFor
