import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    console.log(props.meal)
    const{idMeal,strMeal,strInstructions,strMealThumb}=props.meal
const history=useHistory()
    const handledClick=()=>{
        history.push(`/meal/${idMeal}`)
    }
    return (
        <div className="m-4 border-2 border-blue-300 rounded-2xl overflow-hidden">
            <img src={strMealThumb} alt="" className="w-100" />
            <h2 className="font-bold my-4">{strMeal}</h2>
            <h3 className="p-4">{strInstructions.slice(0,200)} <Link className="text-green-700" to={`/meal/${idMeal}`}>see more</Link> </h3>
            <button className="py-2 px-4 bg-red-300 text-white mb-2 rounded-3xl" onClick={handledClick}>Order Now</button>
        </div>
    );
};

export default Meal;