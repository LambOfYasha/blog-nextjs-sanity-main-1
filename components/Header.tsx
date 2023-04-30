import * as Navigation from '../styles/styles'
import Link from 'next/link'
import NavLinks from '../data'
import { Banner } from './Themes/Desktop'



export function Header() {
    return (
            <header  className={Navigation.NavBar} style={{width:'75px'}}>
            {NavLinks.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.HomeButton}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})}
            </header>
       
    )
}

export function HeaderTab (props){
    return (<header  className={Navigation.NavBarTab} >
          <button className={Navigation.RegisterButtonTab}>Get Started</button>
    <button className={Navigation.MemberButtonTab}>Sign In</button>
   {NavLinks.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.HomeButtonTab}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})} 
 {props.children}
</header>)
}


export function HeaderDT (props){
    return(
        <header  className={Navigation.NavBarDT} >
<button className={Navigation.RegisterButtonDT}>Get Started</button>
        <button className={Navigation.MemberButtonDT} >Sign In</button>
        {NavLinks.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.NavButtonDT}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})} 
         <h3 className='w3-bar-item w3-center'>AntiBlasphemy Studios</h3>

{props.children}
</header>
)}

export default [Header, HeaderDT, HeaderTab]