import { dataset, projectId } from '../lib/sanity.client'
import { createClient } from 'next-sanity'

function onPublicAccessOnly() {
  throw new Error("unable to load preview as you're not logged in.")
}

if (!projectId || !dataset) {
  throw new Error("missing ProjectId or dataset. check your sanity.json or env.")
}

// Create a preview client
const previewClient = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-11-15',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// usePreview hook that accepts token, query, and optional params
export const usePreview = (token: string | null, query: string, params?: any) => {
  // Create a preview client with the token
  const previewClient = createClient({
    projectId,
    dataset,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-11-15',
    useCdn: false,
    token: token || undefined,
  })

  // For now, return null/empty data since this is a simplified implementation
  // In a real implementation, you would use React Query or SWR to fetch the data
  // and handle the async nature properly
  return null
}


// let alerted = false
// export const usePreview = definePreview({
//   projectId,
//   dataset,
//   onPublicAccessOnly: () => {
//     // You can opt to throw an error here instead of using `window.alert`, and customize how it displays by wrapping the component calling `usePreview` in an ErrorBoundary
//     // https://reactjs.org/docs/error-boundaries.html
//     if (!alerted) {
//       // eslint-disable-next-line no-alert
//       alert('You are not logged in. You will only see public data.')
//       alerted = true
//     }
//   },

  // As your dataset grows you might hit the default limit of 3000.
  // However you can increase this limit however you like and audit how it performs.
  // Or even set it to `Infinity` if you want to disable the limit.
  // documentLimit: 10000,

  // Another way to get around the `documentLimit` is to set `includeTypes` to just the document types that are used in preview mode.
  // You can run the `array::unique(*._type)` GROQ query in `Vision` in your Studio to see how many types are in your dataset.
  // Just be careful that you don't forget the document types you might be using in strong references, such as `author` or `sanity.imageAsset`
  // includeTypes: ['settings', 'post', 'author', 'sanity.imageAsset'],

  // If you have a lot of people in your Studio that are editing the content you're previewing
  // you could end up with a very high number of React rerenders. Normally this isn't a problem,
  // but should you hit a problem at scale you can adjust `subscriptionThrottleMs` to a higher value than the default `10` milliseconds.
  // Or if you're daring you could set it to `1` to have the lowest possible latency between edits and the live-preview.
  // subscriptionThrottleMs: 60,
// })
