import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';

const OrderReview = () => {
    const {mealId}=useParams()
    const [mealDetails,setMealDetails]=useState([])
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMealDetails(data.meals))
    },[mealId])
    return (
        <div>
{
    mealDetails.map(details=><Details key={details.idMeal} details={details}></Details>)
}
<Link to="/restaurent"><button className="py-2 px-4 bg-blue-300 text-white mb-2 rounded-3xl">Go Shop</button></Link>
        </div>
    );
};

export default OrderReview;