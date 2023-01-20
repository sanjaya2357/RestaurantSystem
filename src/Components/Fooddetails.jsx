import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import useFetch from "../customHook/useFetch";
const Fooddetails = () => {

    let { id } = useParams()
    let history=useHistory()

    let{data:item,pending,error}=useFetch("http://localhost:4000/items/"+id)

    ///deleting the food / OR /Removal of food
    let handleDeleteFood = () =>{
        fetch("http://localhost:4000/items/"+ id , {method:"DELETE"})
        .then(() =>{
            alert("Food has been removed")
            history.push("/")
            
        })
    }
    
    //this will be sotred in useFetch.js file and can be access by data and request line number 10

    // let [item, setItem] = useState(null)
    // let [pending, setPending] = useState(true)
    // let [error, setError] = useState(null)

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("http://localhost:4000/items/" + id)

    //             .then((response) => {
    //                 if (response.ok == true) {
    //                     return response.json()
    //                 }
    //                 else {
    //                     throw Error(" data not found, please try for diffrent ")
    //                 }
    //             })

    //             .then((data) => { setItem(data); setPending(false) })
    //             .catch((err) => { setError(err.message); setPending(false) })
    //     }, 5000)
    // }, [])

    return (

        <div>
            {error && <h1>{error}</h1>}
            {/* {  pending && <h1>loading...</h1>} */}
            {pending && <div className="loader"></div>}

            {item && <div className="food-detail">
                <img src={item.pic} alt="food" />
                <h1> Food Name :{item.foodName}</h1>
                <h3> Price :{item.price}</h3>
                <h3>Rating :{item.rating}</h3>
                <h3>Type :{item.type}</h3>

                <button onClick={handleDeleteFood}>Removal of food</button>
                <Link to={`/update${id}`}>
                <button>update food</button>

                </Link>

            </div>}

        </div>

    );
}

export default Fooddetails;