import { groq } from "next-sanity"
import {client} from '../../../lib/sanity.client'
import { PortableText } from "@portabletext/react"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "../../../lib/sanity.image"


export const revalidate = 30


const query = groq`
*[_type=='page' && title == "Prophecy 101"][0]    {
    ...,
    coverImage,
}`
    
export default async function Page(){

const page: Page = await client.fetch(query)

return (
    <article className="w3-mobile">
        <section>
            <h1 className="w3-margin w3-center w3-text-amber w3-border-bottom w3-border-top w3-border-amber">{page.title}</h1>
        </section>
        <section className="w3-container w3-cell-row w3-left w3-margin w3-text-amber w3-large w3-card-4 w3-border w3-border-amber">
            {/* <Image className="w3-hide-small" width={700} height={350} src={urlFor(page.coverImage).url()} alt={page.title} /> */}
            
            <div className="w3-margin w3-padding">
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '56.25%',
                    paddingBottom: 0,
                    boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                    marginTop: '1.6em', 
                    marginBottom: '0.9em',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    willChange: 'transform'
                }}>
                    <iframe 
                        loading="lazy"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            border: 'none',
                            padding: 0,
                            margin: 0
                        }}
                        src="https://www.canva.com/design/DAGZiS1iOzE/kTXCeXdX_Tx_KbVE1zIfKQ/view?embed"
                        allowFullScreen={true}
                        allow="fullscreen"
                    />
                </div>
                <a href="https://www.canva.com/design/DAGZiS1iOzE/kTXCeXdX_Tx_KbVE1zIfKQ/view?utm_content=DAGZiS1iOzE&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">Prophecy 101</a>
            </div>
        </section>
    </article>
)}
