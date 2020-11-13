import React,{ useState } from "react";
import { Route, Link, Switch, Router } from "react-router-dom";
import Home from './Home';
import PizzaCongrats from './Pizza-congrats';
import PizzaForm from "./Pizza-form";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
    
      
  <Route exact path='/'><Home></Home></Route>
    <Route path ='/pizza'><PizzaForm></PizzaForm></Route>
      {/* <PizzaForm></PizzaForm> */}
      {/* <PizzaCongrats></PizzaCongrats> commented out*/}
    </>
  );
};
export default App;
