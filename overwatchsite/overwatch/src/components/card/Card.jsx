import React from 'react'
import { useState } from 'react'
import './card.css'
import bg from '../../assets/pics/bg.jpg'
import ashe from '../../assets/pics/ashe.jpg'
import ana from '../../assets/pics/ana.jpg'
import ball from '../../assets/pics/ball.jpg'
import bap from '../../assets/pics/bap.jpg'
import bastion from '../../assets/pics/bastion.jpg'
import brig from '../../assets/pics/brig.jpg'
import doom from '../../assets/pics/doom.jpg'
import dva from '../../assets/pics/dva.jpg'
import echo from '../../assets/pics/echo.jpg'
import genji from '../../assets/pics/genji.jpg'
import hanzo from '../../assets/pics/hanzo.jpg'
import hog from '../../assets/pics/hog.jpg'
import junkrat from '../../assets/pics/junkrat.jpg'
import lucio from '../../assets/pics/lucio.jpg'
import mccree from '../../assets/pics/mccree.jpg'
import mei from '../../assets/pics/mei.jpg'
import mercy from '../../assets/pics/mercy.jpg'
import moira from '../../assets/pics/moira.jpg'
import orisa from '../../assets/pics/orisa.jpg'
import pharah from '../../assets/pics/pharah.jpg'
import reaper from '../../assets/pics/reaper.jpg'
import rein from '../../assets/pics/rein.jpg'
import sigma from '../../assets/pics/sigma.jpg'
import sombra from '../../assets/pics/sombra.jpg'
import sym from '../../assets/pics/sym.jpg'
import torb from '../../assets/pics/torb.jpg'
import tracer from '../../assets/pics/tracer.jpg'
import widow from '../../assets/pics/widow.jpg'
import winston from '../../assets/pics/winston.jpg'
import zarya from '../../assets/pics/zarya.jpg'
import zenyatta from '../../assets/pics/zenyatta.jpg'
import soldier from '../../assets/pics/76.jpg'

const Card = (props) => {

  function sayHello() {
    alert('h');
  }

  const [ selectedCard , setSelectedCard ] = useState();
  
  const selectCard = () => {alert('')};

  var photo;

  if(props.hero==='Ashe') {
    photo = ashe;
  } else if (props.hero === 'Ana') {
    photo = ana;
  } else if (props.hero === 'Ball') {
    photo = ball;
  } else if (props.hero === 'Bap') {
    photo = bap;
  } else if (props.hero === 'Bastion') {
    photo = bastion;
  } else if (props.hero === 'Brig') {
    photo = brig;
  } else if (props.hero === 'Doom') {
    photo = doom;
  } else if (props.hero === 'Dva') {
    photo = dva;
  } else if (props.hero === 'Echo') {
    photo = echo;
  } else if (props.hero === 'Genji') {
    photo = genji;
  } else if (props.hero === 'Hanzo') {
    photo = hanzo;
  } else if (props.hero === 'Hog') {
    photo = hog;
  } else if (props.hero === 'Junkrat') {
    photo = junkrat;
  } else if (props.hero === 'Lucio') {
    photo = lucio;
  } else if (props.hero === 'Mccree') {
    photo = mccree;
  } else if (props.hero === 'Mei') {
    photo = mei;
  } else if (props.hero === 'Mercy') {
    photo = mercy;
  } else if (props.hero === 'Moira') {
    photo = moira;
  } else if (props.hero === 'Orisa') {
    photo = orisa;
  } else if (props.hero === 'Pharah') {
    photo = pharah;
  } else if (props.hero === 'Reaper') {
    photo = reaper;
  } else if (props.hero === 'Rein') {
    photo = rein;
  } else if (props.hero === 'Sigma') {
    photo = sigma;
  } else if (props.hero === 'Sombra') {
    photo = sombra;
  } else if (props.hero === 'Sym') {
    photo = sym;
  } else if (props.hero === 'Torb') {
    photo = torb;
  } else if (props.hero === 'Tracer') {
    photo = tracer;
  } else if (props.hero === 'Widow') {
    photo = widow;
  } else if (props.hero === 'Winston') {
    photo = winston;
  } else if (props.hero === 'Zarya') {
    photo = zarya;
  } else if (props.hero === 'Zenyatta') {
    photo = zenyatta;
  } else if (props.hero === 'Soldier') {
    photo = soldier;
  }
  return (
    <div className={props.cardSize ? "little-card" : "big-card"} onClick={sayHello}>
      <img src={photo} alt={props.hero} />
    </div>
  )
}



export default Card;