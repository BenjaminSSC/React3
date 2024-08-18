import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from './pizzas';

const Home = () => {

  return (
    <div className="d-flex flex-wrap justify-content-around">
      <div>
        <Header />
      </div>
      {pizzas.map((pizza, index)=> (
      <CardPizza
        key={index}
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
      />))}
      
    </div>
  );
};

export default Home;

