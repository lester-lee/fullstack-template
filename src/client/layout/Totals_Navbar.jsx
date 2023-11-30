import React from 'react';
import { useSelector } from 'react-redux';

export default function Totalbar() {
    const { totalPrice, totalReceived } = useSelector((state) => state.cart);
return (
    <>
    <div>
        <h1>Total Received: ${totalReceived}</h1> 
        
    </div>
    <div>
        <h1>Total Due: ${totalPrice}</h1> 
    </div>
    </> 
)
}
