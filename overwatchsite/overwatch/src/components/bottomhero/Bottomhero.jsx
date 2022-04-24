import React from 'react'
import Card from '../card/Card.jsx'
import './bottomhero.css'
import { useState,useContext,useEffect } from 'react'
import{CardContext }from '../CardContext'

const Bottomhero = (props) => {

    const {selectedCard} = useContext(CardContext);

    useEffect(()=>{
        console.log(selectedCard)
    },[selectedCard])

  return (
    <div>
         <div>
            <p>Them</p>
            <div className='row'>
    {
        
        selectedCard.map((card,index)=>( <Card key={index} cardSize={card.cardSize} hero={card.hero} />))
    }
            </div>
            </div>

       
        
        <p>Select a hero</p>
        <div className="row">
            <div className="row">
                <p>Tanks</p>
                <Card cardSize={'little-card'} hero={'Dva'}/>
                <Card cardSize={'little-card'} hero={'Orisa'}/>
                <Card cardSize={'little-card'} hero={'Rein'}/>
                <Card cardSize={'little-card'} hero={'Hog'}/>
                <Card cardSize={'little-card'} hero={'Sigma'}/>
                <Card cardSize={'little-card'} hero={'Winston'}/>
                <Card cardSize={'little-card'} hero={'Ball'}/>
                <Card cardSize={'little-card'} hero={'Zarya'}/>
            </div>
            <div className='row'>
                <p>Damage</p>
                <Card cardSize={'little-card'} hero={'Ashe'}/>
                <Card cardSize={'little-card'} hero={'Bastion'}/>
                <Card cardSize={'little-card'} hero={'Mccree'}/>
                <Card cardSize={'little-card'} hero={'Doom'}/>
                <Card cardSize={'little-card'} hero={'Echo'}/>
                <Card cardSize={'little-card'} hero={'Genji'}/>
                <Card cardSize={'little-card'} hero={'Hanzo'}/>
                <Card cardSize={'little-card'} hero={'Junkrat'}/>
                <Card cardSize={'little-card'} hero={'Mei'}/>
                <Card cardSize={'little-card'} hero={'Pharah'}/>
                <Card cardSize={'little-card'} hero={'Reaper'}/>
                <Card cardSize={'little-card'} hero={'Soldier'}/>
                <Card cardSize={'little-card'} hero={'Sombra'}/>
                <Card cardSize={'little-card'} hero={'Sym'}/>
                <Card cardSize={'little-card'} hero={'Torb'}/>
                <Card cardSize={'little-card'} hero={'Tracer'}/>
                <Card cardSize={'little-card'} hero={'Widow'}/>
            </div>
            <div className='row'>
                <p>Support</p>
                <Card cardSize={'little-card'} hero={'Ana'}/>
                <Card cardSize={'little-card'} hero={'Bap'}/>
                <Card cardSize={'little-card'} hero={'Brig'}/>
                <Card cardSize={'little-card'} hero={'Lucio'}/>
                <Card cardSize={'little-card'} hero={'Mercy'}/>
                <Card cardSize={'little-card'} hero={'Moira'}/>
                <Card cardSize={'little-card'} hero={'Zenyatta'}/>
            </div>
        </div>
        
    </div>
  )
}

export default Bottomhero;