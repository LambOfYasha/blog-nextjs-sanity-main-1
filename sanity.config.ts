
import {createClient} from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"
import {suspend} from 'suspend-react'
import {_checkAuth} from '@sanity/preview-kit'


export const config = {
  
  projectId:"9k7z7kht",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-03-30",
  useCdn: process.env.NODE_ENV === "production",
}


export const sanityClient = createClient(config)


export const urlFor = (source) => createImageUrlBuilder(config).image(source)


const useCheckAuth = () =>
  suspend(() => _checkAuth(config.projectId, null), ['@sanity/preview-kit', 'checkAuth', config.projectId])

export default function Page() {
  const isAuthenticated = useCheckAuth()
}