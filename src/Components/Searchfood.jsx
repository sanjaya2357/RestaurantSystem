import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Foodlist from './Foodlist'
import useFetch from '../customHook/useFetch';

const Searchfood = () => {

	let { searchKey } = useParams();

	let{data :items, pending ,error}=useFetch("http://localhost:4000/items")

	// return (
	// 	<div>
	// 		<h1> Search Result :</h1>
	// 		{error && <h1>{error}</h1>}
	// 		{pending && <div className="loader"></div> }
	// 		{items &&  <Foodlist items={items} title="All food"/>}
	// 	</div> );

	return (
		<div>
			{error && <h1>{error}</h1>}
			{pending && <div className="loader"></div>}

			{items && <Foodlist items={items.filter((food) => {
				return food.foodName.toUpperCase().includes(searchKey.toUpperCase())
			})} title="" />}
		</div>

	);


}

export default Searchfood;