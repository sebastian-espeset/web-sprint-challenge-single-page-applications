import React,{ useState } from "react";



//submit will have a route to the congrats page

export default function PizzaForm(){
    return(
        <form>
        <div>This is a test of the pizza form being passed to app.</div>
        <label> Please enter your name
            <input
            // value={}
            // onChange={}
            type='text'
            name='name'
            ></input>
        </label>
        <label>
            Select pizza size
            <select>
            //value
            //onchange
            type='text'
            name='size'
            <option value=''>Select a size</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            </select>
        </label>
        <label>
          Curried yams
          <input
            type="checkbox"
            name="curried-yams"
            // checked={values.hiking}
            // onChange={onChange}
          />
        </label>
        <label>
          Anchovies
          <input
            type="checkbox"
            name="anchovies"
            // checked={values.hiking}
            // onChange={onChange}
          />
        </label>
        <label>
          Mango
          <input
            type="checkbox"
            name="mango"
            // checked={values.hiking}
            // onChange={onChange}
          />
        </label>
        <label>
          Tempura shrimp
          <input
            type="checkbox"
            name="tempura-shrimp"
            // checked={values.hiking}
            // onChange={onChange}
          />
        </label>
        <label>
            Special instructions
            <input
            type='text'
            name='instructions'
            ></input>
        </label>
            <button>Submit your order</button>
        </form>
    )
}
