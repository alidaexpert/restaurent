import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurent = () => {
    const[searchText,setSearchText]=useState('')
    const [meals,setMeals]=useState([])
    useEffect(()=>{
const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
fetch(url)
.then(res=>res.json())
.then(data=>setMeals(data.meals))
    },[searchText]);
    const handleClick=e=>{
        const searchTextValue=e.target.value
setSearchText(searchTextValue)
    };

    return (
        <div>
              <div className="mt-5">
              <input type="text" onChange={handleClick} className="border-2 border-red-500 rounded-xl px-10 py-2" placeholder="Search your favorite food"/>
          </div>
            <div className="grid grid-cols-3 gap-4">

            {
                meals.map(meal=><Meal meal={meal} key={meal.idMeal}></Meal>)
            }
            </div>
           
        </div>
    );
};

export default Restaurent;