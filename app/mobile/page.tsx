'use client'
import { groq } from "next-sanity"
import {client} from '../../lib/sanity.client'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react"
import { HeaderTitleBar } from "../../styles/styles"
import { PortableText } from "@portabletext/react"


 const query = groq`
*[_type=='page']
{
    ...,
}`


    
export default async function Page(){

  const page: Page = await client.fetch(query)


   return (

<article className=" w3-center">
    <h4 className={HeaderTitleBar}>Navigation</h4>
       <div>
         <Tabs variant='enclosed'>
  <TabList>
  {page.map((pagenav: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }, index: Key | null | undefined) => (
          <Tab key={index} className="w3-amber">{pagenav.title}</Tab>
   ))}
  </TabList>
  <TabPanels>
  
    {page.map((pagenav: { content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }, index: Key | null | undefined) => (
    <TabPanel key={index}>
<PortableText value={page.content}></PortableText>    </TabPanel>
     ))}
  </TabPanels>
</Tabs>
        </div>
        
</article> 
)
}

