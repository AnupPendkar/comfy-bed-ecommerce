import "./cart.css";
import { useContext, useState } from "react";
import { cartContext } from "../../context/Context";
function Cart({id, img, name, color, price, quantity}) {
    const {update_quantity , dispatch} = useContext(cartContext);
    const [quan, setQuan] = useState(quantity);
    const updateQuan = (operation)=>{
        if(operation === 'plus'){
            setQuan((prev)=>prev+1);
        }else if(quan > 1){
            setQuan((prev)=>prev-1);
        }
        update_quantity(id, quan);
    }
    return (  
        <div className="cart">
            <div className="item-section">
                <img src={img} alt={name} />
                <div className="name-and-color">
                    <p className="name">{name}</p>
                    <div className="selected-color">
                        <p className="color-name">color : </p>
                        <div style={{background : `${color}`}} className="color"></div>
                    </div>
                    <p className="price">$ {price}</p>
                </div>
            </div>
            <div className="price-section">
                <p className="price">$ {price}</p>
            </div>
            <div className="quantity-section">
                <i onClick={()=>updateQuan('minus')} className="fa-solid fa-minus"></i>
                <span className="quantity">{+quantity}</span>
                <i onClick={()=>updateQuan('plus')} className="fa-solid fa-plus"></i>
            </div>
            <div className="subtotal-section">
                <p className="price">$ {(parseFloat(price) * quantity).toFixed(2)}</p>
            </div>
            <button onClick={()=>dispatch({type:"DELETE_ITEM", payload:id})} className="btn">
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    );
}

export default Cart;