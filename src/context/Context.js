import {createContext, useReducer, useState} from 'react';
import { data } from '../Data';
import Reducer from './Reducer';

const INITIAL_STATE = {
    products : [],
}

export const cartContext = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) => {
    const [prod, setProd] = useState(data);
    const [filteredProd, setFilteredProd] = useState(prod);
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    const getPrice = ()=>{
        let totalPrice = 0;
        state.products.map((item)=>{
            totalPrice += (item.quantity * item.price);
        })
        totalPrice.toFixed(2);
        return totalPrice;
    }

    const update_quantity = (id, quan)=>{
        const newProd = state.products.map((item)=>{
            if(item.id === id){
                return {...item, quantity:quan};
            }
        })
        dispatch({type:"UPDATE_CART", payload:newProd})
    }

    const filterCat = (category)=>{
        if(category === 'all'){
        setFilteredProd(prod);
        }else{
        setFilteredProd(prod.filter((item)=>{
            return(item.cat && item.cat.includes(category));
        }))
        }
    }

    const filterCompany = (company)=>{
    if(company === 'all'){
        setFilteredProd(prod);
    }else{
        setFilteredProd(prod.filter((item)=>{
        return(item.brand === company);
        }))
    }
    }

    const filterColor = (color)=>{
    if(color === 'all'){
        setFilteredProd(prod);
    }else{
        setFilteredProd(prod.filter((item)=>{
        return(item.color && item.color.includes(color));
        }))
    }
    }

    const filterPrice = (price)=>{
    setFilteredProd(prod.filter((item)=>{
        return(+item.price <= +price);
    }))
    }

    const freeShipping = (value)=>{
    if(value){
        setFilteredProd(prod.filter((item)=>{
            return(item.freeShipping);
        }))
    }else{
        setFilteredProd(prod);
    }
    }

    const removeFilters = ()=>{
    setFilteredProd(prod);
    }


    return(
        <cartContext.Provider 
        value={{
            products : state.products,
            getPrice,
            update_quantity,
            prod,
            filteredProd,
            filterCat,
            filterCompany,
            filterColor,
            filterPrice,
            freeShipping,
            removeFilters,
            dispatch
        }}
        >
            { children }
        </cartContext.Provider>
    )
}