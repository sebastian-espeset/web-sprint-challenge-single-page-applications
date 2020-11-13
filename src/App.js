import React,{ useState } from "react";
import { Route, Link, Switch } from "react-dom";
import Home from './Home';
import PizzaForm from './Pizza-form';
import PizzaCongrats from './Pizza-congrats';

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Home></Home>
      <PizzaForm></PizzaForm>
      <PizzaCongrats></PizzaCongrats>
    </>
  );
};
export default App;
