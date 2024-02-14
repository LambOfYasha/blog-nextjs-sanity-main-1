'use client'
import { groq } from "next-sanity"
import {client} from '../../../lib/sanity.client'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react"
import { HeaderTitleBar, HeaderTitleBarMobile } from "../../../styles/styles"
import { PortableText } from "@portabletext/react"
import PageModal from "../../../components/PageModal"
import { GreedySalvationBanner } from "../../../styles/images"
import Link from "next/link"
import Image from "next/image"


 const query = groq`
*[_type=='page']
{
    ...,
}`


    
export default async function Page(){

  const page: Page = await client.fetch(query)


   return (

<article className="w3-hide-large w3-hide-medium w3-center">
    <h4 className={HeaderTitleBarMobile}>{page[2].title}</h4>
    <PortableText value={page[2].content} ></PortableText>
    <Link href={"https://www.antiblasphemy.studio/mobile/projects/greedy-salvation"} ><Image src={GreedySalvationBanner} className='w3-image' alt="GreedySalvation" width="500" height="250" />
</Link>
</article> 
)
}

