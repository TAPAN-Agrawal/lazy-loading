import React from "react";
import classes from './Card.module.scss'
import img from '../../Assets/Images/15714.jpg'

interface Card {
    img:string
}
function Card(Props:Card) {
  return <div>
    <div className={classes.parent}>
        <img src={Props.img} className={classes.img} loading="lazy"/>
    </div>
  </div>;
}

export default Card;
