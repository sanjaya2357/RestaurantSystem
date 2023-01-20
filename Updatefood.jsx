import React, { useRef } from "react";
import { useHistory, useParams } from "react-router-dom";


const UpdateFood = () => {
	
	let {id}=useParams();
	let history = useHistory();
    let foodName = useRef();
    let price = useRef();
    let rating = useRef();
    let picture  = useRef();

	
    let handleUpdateFood = (e)=>{
        e.preventDefault();

        let updatedFood = { foodName  :  foodName.current.value ,
                        price : price.current.value ,
                        type : "" ,
                        rating : rating.current.value ,
                        pic : picture.current.value 
                        }

        let options = document.getElementsByName("type");
        for (let i = 0; i < options.length; i++)
        {
                    if( options[i].checked )
                    {
                        updatedFood.type =  options[i].value ;
                    }
        }
		fetch("http://localhost:4000/items/"+ id,  {
			method : "PUT" ,
			headers : {"Content-Type" : "application/json"} ,
			body : JSON.stringify(updatedFood)
		})
		.then(()=>{
		alert("food has been updated");
		history.goBack();
		// history.push("/")    redirects to home page
		})
}


	return (
		<div className="add-food">
			<h1>UPDATE FOOD</h1>

			<hr />

			<form onSubmit={handleUpdateFood}>
				<label >Food Name :</label><input type="text" ref={foodName} />
				<label >Price :</label><input type="NUmber" step="10" ref={price}/>
				<label>Type :</label> <div className="type-opt" >
					<input type="radio" name="type" />	<label>Veg</label>
					<input type="radio" name="type" />	<label>Non-Veg</label>
				</div>

			<label>Rating :</label> <input type="number" min="1" max="10"  step="0.1" ref={rating}/>
			<label >Picture :</label> <input type="url" ref={picture} />

			{/* <input type="submit" value="Add Food" /> */}
			<input type="submit" value="update Food" />


			</form>
		</div>

	);
}

export default UpdateFood;