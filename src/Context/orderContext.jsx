import { createContext, useState } from "react";
import React from 'react';


export const OrderContext = createContext();

export const OrderContextProvider = ({children}) => {
    const [orderTemp, setOrdenTemp] = useState([]);
    

    return (
    <OrderContext.Provider value={{orderTemp, setOrdenTemp}}> 
     {children}
    </OrderContext.Provider>
    );
}
export function useOrderContext() {
    return useContext(OrderContext);
  }
  


