import React from 'react'
import NextLink from 'next/link'
import { UrlObject } from 'url';



export function HomeButtons(props: { id: React.Key | null | undefined; href: string | UrlObject; settings: string | undefined; link: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | (string & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (string & Iterable<React.ReactNode>) | (string & React.ReactPortal) | (string & Promise<React.AwaitedReactNode>) | (number & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (number & Iterable<React.ReactNode>) | (number & React.ReactPortal) | (number & Promise<React.AwaitedReactNode>) | (bigint & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (bigint & Iterable<React.ReactNode>) | (bigint & React.ReactPortal) | (bigint & Promise<React.AwaitedReactNode>) | (false & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (false & Iterable<React.ReactNode>) | (false & React.ReactPortal) | (false & Promise<React.AwaitedReactNode>) | (true & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (true & Iterable<React.ReactNode>) | (true & React.ReactPortal) | (true & Promise<React.AwaitedReactNode>) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & string) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & number) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & bigint) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & false) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & true) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & Iterable<React.ReactNode>) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & React.ReactPortal) | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & Promise<React.AwaitedReactNode>) | (Iterable<React.ReactNode> & string) | (Iterable<React.ReactNode> & number) | (Iterable<React.ReactNode> & bigint) | (Iterable<React.ReactNode> & false) | (Iterable<React.ReactNode> & true) | (Iterable<React.ReactNode> & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (Iterable<React.ReactNode> & React.ReactPortal) | (Iterable<React.ReactNode> & Promise<React.AwaitedReactNode>) | (React.ReactPortal & string) | (React.ReactPortal & number) | (React.ReactPortal & bigint) | (React.ReactPortal & false) | (React.ReactPortal & true) | (React.ReactPortal & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (React.ReactPortal & Iterable<React.ReactNode>) | (React.ReactPortal & Promise<React.AwaitedReactNode>) | (Promise<React.AwaitedReactNode> & string) | (Promise<React.AwaitedReactNode> & number) | (Promise<React.AwaitedReactNode> & bigint) | (Promise<React.AwaitedReactNode> & false) | (Promise<React.AwaitedReactNode> & true) | (Promise<React.AwaitedReactNode> & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (Promise<React.AwaitedReactNode> & Iterable<React.ReactNode>) | (Promise<React.AwaitedReactNode> & React.ReactPortal) | (Iterable<React.ReactNode> & string) | (Iterable<React.ReactNode> & number) | (Iterable<React.ReactNode> & bigint) | (Iterable<React.ReactNode> & false) | (Iterable<React.ReactNode> & true) | (Iterable<React.ReactNode> & React.ReactElement<any, string | React.JSXElementConstructor<any>>) | (Iterable<React.ReactNode> & Iterable<React.ReactNode>) | (Iterable<React.ReactNode> & React.ReactPortal) | (Iterable<React.ReactNode> & Promise<React.AwaitedReactNode>) | null | undefined; } | undefined) {
  return (
    <div>
        <NextLink
         key={props?.id}
          href={props?.href ?? '#'}
          className={props?.settings}
          >
          {props?.link}
        </NextLink>
    </div>
  );
}


export default HomeButtons