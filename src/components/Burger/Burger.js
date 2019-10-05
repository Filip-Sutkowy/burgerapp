import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

// shuffle algorithm
// https://bost.ocks.org/mike/shuffle/
const shuffle = (array) => {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

const burger = (props) => {
  
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])]
        .map((_, i) => {
          return <BurgerIngredient key={igKey+i} type={igKey} />
        } );
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
        {shuffle(transformedIngredients)}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;