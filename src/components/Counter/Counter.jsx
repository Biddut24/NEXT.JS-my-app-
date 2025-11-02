"use client"
import React, { useState } from 'react';

const Counter = () => {
    const [numbers, setNumbers]=useState(50)

     const handleIncreaseNumber = ()=>{
    setNumbers(numbers + 1);
     }
    return (
        <div className="border-2 bg-gray-500 rounded-lg p-10 m-10">
             <button onClick={handleIncreaseNumber}>Increase++ {numbers}</button>
        </div>
    );
};

export default Counter;