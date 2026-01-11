import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN for better cache control with ISR
  // With ISR, we want fresh data on each revalidation, so CDN caching can interfere
})
