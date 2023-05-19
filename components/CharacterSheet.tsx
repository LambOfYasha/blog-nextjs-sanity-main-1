'use client'
import React from 'react'
import ABSTabs from './Tabs'
import Image from 'next/image'
import urlFor from '../lib/urlFor'
import { TabPanel } from 'react-tabs'
import { client } from '../lib/sanity.client'

async function  CharacterSheet() {

    const character: Character = await client.fetch("*[_type == 'character']{...,avi, mainImage}")


    const characterAvi = <Image className="w3-hide-small w3-circle w3-image" width={100} height={300} src={urlFor(character.avi).url()} alt={character.title} />

  return (
    <ABSTabs
    title0={characterAvi}
    title1={characterAvi}
    title2={characterAvi}>
       {character.map(charaInfo => {
        return ( <TabPanel key={charaInfo._id}>
          <div>
                <div><Image className="w3-hide-small w3-circle w3-image" width={100} height={300} src={urlFor(charaInfo.coverImage).url()} alt={charaInfo.title} /></div> <div>
            <h3>{charaInfo.name}</h3>
            <p>{charaInfo.gender}</p>
            <p>{charaInfo.age}</p>
            <p>{charaInfo.height}</p>
            <p>{charaInfo.faith}</p>
            <p>{charaInfo.origins}</p>
            <p>{charaInfo.theme}</p>
            <p>{charaInfo.likes}</p>
            <p>{charaInfo.dislikes}</p></div>
            </div>
            <p>{charaInfo.description}</p>
        </TabPanel>
       )})}
    </ABSTabs>
  )
}

export default CharacterSheet