import React,{ useState } from "react";
import { Link } from "react-router-dom";
import PizzaForm from './Pizza-form';



//will have a route to pizza

export default function Home(){
    return(
        <div>
            <h1>Welcome to pizza fort, place your order below</h1>
            <Link to = '/pizza'>Order here!</Link>
         
        </div>
    )
};