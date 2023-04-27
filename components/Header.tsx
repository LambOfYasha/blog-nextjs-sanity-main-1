import * as Navigation from '../styles/styles'
import Link from 'next/link'
import NavLinks from '../data'



export function Header() {
    return (
        <section>
            <header  className={Navigation.NavBar} style={{width:'75px'}}>
            {NavLinks.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.HomeButton}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})}
            </header>
        </section>
    )
}

export function HeaderTab (){
    return (<header  className={Navigation.NavBarTab} >
   {NavLinks.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.HomeButtonTab}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})} 
</header>)
}


export function HeaderDT (){
    return(
        <header  className={Navigation.NavBarDT} >
<button className={Navigation.RegisterButtonDT}>Get Started</button>
        <button className={Navigation.MemberButtonDT} >Login</button>
        {NavLinks.map((nlinks) => {
    return (<button key={nlinks.id} className={Navigation.NavButtonDT}>
        <Link  href={nlinks.href}>{nlinks.link}</Link>
    </button>
 )})} 
</header>
)}

export default [Header, HeaderDT, HeaderTab]