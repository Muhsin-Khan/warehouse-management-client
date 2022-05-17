import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Inventory = () => {
    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
        
    },[id, item]);
    
    // Handle Deliver Button......
    const handleDeliveredQuantity=()=>{
        
        const quantity=  item.quantity-1;
        const newQuantity= {quantity}
        
        fetch(`http://localhost:5000/product/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
        .then(res=>res.json())
        .then(data=>{
            setItem(data);
        });
        
    };
    // Handle Added Quantity...
    const handleUpdateQuantity=()=>{
        
        const quantity=  item.quantity+1;
        const newQuantity= {quantity}
        
     
       
        fetch(`http://localhost:5000/product/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
        .then(res=>res.json())
        .then(data=>{
            setItem(data);
        });
        
    };

   return (
    <div>
        <h1>theis manage inventory {id}</h1>
        <h1>Name: {item.name}</h1>
        <h3>Quantity: {item.quantity}</h3>
        <br />
        <button onClick={handleDeliveredQuantity}>Delivered</button>
        <br />
        <input type="text" name="" id="" />
        <br />
        <button onClick={handleUpdateQuantity}>Add Quantity</button>
        
    </div>
  )
}

export default Inventory