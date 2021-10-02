import React from 'react';
const Details = (props) => {
    const {strMeal,strMealThumb,strYoutube,strInstructions,strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15,strMeasure16,strMeasure17,strMeasure18,strMeasure19,strMeasure20}=props.details
    return (
        <div className="flex p-8 gap-10 border-2 border-red-300 m-8 rounded-lg">
           <div className="w-ful h-full rounded-xl overflow-hidden">
               <img src={strMealThumb} alt="" />
           </div>
           <div className="text-left w-full">
               <h1 className="font-bold text-4xl text-center">{strMeal}</h1>
               <h6 className="text-sm text-gray-500 my-3">{strInstructions}</h6>
               <p className="font-bold">Measurement:</p>
<div className=" bg-gray-200 p-4 rounded-xl  flex">
<ul className=" w-full">
    <li>{strMeasure1}</li>
    <li>{strMeasure2}</li>
    <li>{strMeasure3}</li>
    <li>{strMeasure4}</li>
    <li>{strMeasure5}</li>
    
</ul>
<ul className="w-full">
<li>{strMeasure6}</li>
    <li>{strMeasure7}</li>
    <li>{strMeasure8}</li>
    <li>{strMeasure9}</li>
    <li>{strMeasure10}</li>
</ul>
<ul className="  w-full">
<li>{strMeasure11}</li>
    <li>{strMeasure12}</li>
    <li>{strMeasure13}</li>
    <li>{strMeasure14}</li>
    <li>{strMeasure15}</li>
    
</ul>
<ul className="w-full">
<li>{strMeasure16}</li>
    <li>{strMeasure17}</li>
    <li>{strMeasure18}</li>
    <li>{strMeasure19}</li>
    <li>{strMeasure20}</li>
</ul>
</div>
<small className="block text-center">Tutorial: <a className="text-red-500" rel="noreferrer" target="_blank" href={strYoutube}>{strYoutube}</a></small>
               </div>
        </div>
    );
};

export default Details;