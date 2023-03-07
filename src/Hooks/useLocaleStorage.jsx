import React from 'react';
import { useState } from "react";



const UseLocaleStorage = (key, inicialValue) => {

    const [storeValue, setStoreValue] = useState(()=>{
    try{
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : inicialValue;
    }
    catch(error){
        return inicialValue;
    }
    });

    const setValue = (value) =>{
     try{
        setStoreValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
     }
     catch(error){
        console.error(error)
     }
    }
    return [storeValue, setValue]
}

export default UseLocaleStorage;
