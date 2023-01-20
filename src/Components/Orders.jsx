import { useEffect, useState } from "react";
import Foodlist from './Foodlist';

const Orders = () => {

		let[orders , setOrders] =useState(null);

		useEffect (	 () =>{
			let foodOrdered = localStorage.getItem("orders")
			foodOrdered =JSON.parse(foodOrdered);
			setOrders(foodOrdered)
			console.log(foodOrdered);
		}, [])
	
	return (
		< div >
			{orders && <Foodlist items={orders} title="Food ordered"/>}
		</div >
		);
}

export default Orders;
