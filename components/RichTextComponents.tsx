import Image from 'next/image'
import NextLink from 'next/link'
import urlFor from '../lib/urlFor'
import Link from 'next/link'


export const RichTextComponents = {
    types: {
        image: ({value}: any) => {
            return <Image src={urlFor(value).url()} alt="Blog Post Image" width={500} height={500} />
        }
    },
    list: {
        bullet: ({children}: any) => <ul className="w3-ul">{children}</ul>,
        number: ({children}: any) => <ol className="w3-ol">{children}</ol>,
    },
    block: {
        h1: ({children}: any) => <h1 className="w3-text-amber w3-border-bottom w3-border-top w3-border-amber">{children}</h1>,
        h2: ({children}: any) => <h2 className="w3-text-amber w3-border-bottom w3-border-top w3-border-amber">{children}</h2>,
        h3: ({children}: any) => <h3 className="w3-text-amber w3-border-bottom w3-border-top w3-border-amber">{children}</h3>,
        h4: ({children}: any) => <h4 className="w3-text-amber w3-border-bottom w3-border-top w3-border-amber">{children}</h4>,
    },
    marks: {    
        link: ({value, children}: any) => {
          const rel = value?.href?.startsWith("/") ? undefined : "noreferrer noopener"
          return (
            <Link href={value?.href} rel={rel}>
              {children}
            </Link>
          )
        },
      },

}

