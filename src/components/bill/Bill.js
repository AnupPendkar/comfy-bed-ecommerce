import { useContext } from "react";
import { cartContext } from "../../context/Context";
import "./bill.css";
function Bill() {
    const {getPrice} = useContext(cartContext);
    return ( 
        <div className="bill-container">
            <div className="bill">
                <div className="container total-fee-container">
                    <p className="bill-title">Subtotal :</p>
                    <p className="total-fee">$ {getPrice().toFixed(2)}</p>
                </div>
                <div className="container ship-fee-container">
                    <p className="ship-fee-title">Shipping Fee :</p>
                    <p className="ship-fee">$ {getPrice()>0 ?'5.34' :'0'}</p>
                </div>
                <div className="line"></div>
                <div className="container total-order-container">
                    <p className="total-order-title">Order Total :</p>
                    <p className="total-order">$ {getPrice()>0 ?(getPrice() + 5.34).toFixed(2) :0}</p>
                </div>
            </div>
            <button className="btn login-btn">LOGIN</button>
        </div>
    );
}

export default Bill;