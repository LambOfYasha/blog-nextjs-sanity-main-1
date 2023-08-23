import React from 'react'
import GreedySalvationLinks from "../data/Greedy-Salvation-Links";
import Link from "next/link";

function GreedySalvationMenu() {
  return (
 <>           {GreedySalvationLinks.map((gslink) => {
            return (
  <Link href={gslink.href}><button className="w3-button w3-amber w3-border w3-border-black ">{gslink.link}</button></Link>
         
            )})}    
      
      </>
)

}

export default GreedySalvationMenu