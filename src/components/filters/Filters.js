import "./filters.css";
import { useState, useContext } from "react";
import {cartContext} from "../../context/Context"
function Filters() {
    const {prod, filterCat, filterCompany, filterColor, filterPrice, freeShipping, removeFilters} = useContext(cartContext);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = ()=>{
        setIsChecked(!isChecked);
        freeShipping(!isChecked);
    }
    
    var maxPrice=0, minPrice=Number.MAX_VALUE;
    prod.map((item)=>{
        if(+item.price > maxPrice) maxPrice = +item.price;
        if(+item.price < minPrice) minPrice = +item.price;
    })
    const [sliderValue, setSliderValue] = useState(maxPrice);

    const categories = [];
    prod.map((item)=>{
        item.cat.map((c)=>{
            if(!categories.includes(c)) categories.push(c);
        })
    })

    const colors = [];
    prod.map((item)=>{
        item.color && item.color.map((c)=>{
            if(!colors.includes(c)) colors.push(c);
        })
    })
    
    const companies = [];
    prod.map((item)=>{
        if(!companies.includes(item.brand)) companies.push(item.brand);
    })

    const handleChange = ()=>{
        var selectBox = document.getElementById("selectBox");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        filterCompany(selectedValue);
    }
    const handlePrice = (e)=>{
        setSliderValue(()=>e.target.value);
        filterPrice(e.target.value);
    }
    return (  
        <div className="filters">
            <input type="text" className="search" placeholder="Search"/>
            <div className="category-filter">
                <h5 className="filter-title">Category</h5>
                <ul className="cat-list">
                    <li onClick={()=>filterCat('all')} className="cat-item">All</li>
                    {categories.map((item, index)=>{
                        return(
                            <li key={index} onClick={()=>filterCat(item)} className="cat-item">{item}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="company-filter">
                <h5 className="filter-title">Company</h5>
                <select onChange={handleChange} name="company" id="selectBox" className="company-input">
                    <option value="all">all</option>
                    {companies.map((item, index)=>{
                        return(
                            <option key={index} value={`${item}`}>{item}</option>
                        )
                    })}
                </select>
            </div>
            <div className="color-filter">
                <h5 className="filter-title">Colors</h5>
                <div className="select-color">
                    <span onClick={()=>filterColor('all')} className="all">all</span>
                    {colors.map((item, index)=>{
                        if(index<5){
                            return(
                                <div key={index} onClick={()=>filterColor(item)} style={{background: `${item}`}} className="color"></div>
                            );
                        }
                    })}
                </div>
            </div>
            <div className="price-filter">
                <h5 className="filter-title">Price</h5>
                <div className="select-price">
                    <label htmlFor="price">$ {sliderValue}</label>
                    <input onChange={handlePrice} min={minPrice} max={maxPrice} type="range" id="price" value={sliderValue}/>
                </div>
            </div>
            <div className="shipping-filter">
                <label htmlFor="shipping">Free Shipping</label>
                <input onClick={handleCheck} type="checkbox" />
            </div>
            <button onClick={removeFilters} className="btn clear-filter">Clear Filters</button>
        </div>
    );
}

export default Filters;