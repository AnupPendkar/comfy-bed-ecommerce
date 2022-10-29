import "./cartPage.css";
import Bill from "../../components/bill/Bill";
import Cart from "../../components/cart/Cart";
import PageBreadcrumbs from "../../components/page breadcrumbs/PageBreadcrumbs";
import {useContext} from 'react';
import {cartContext} from "../../context/Context";
import {Link} from 'react-router-dom';
function CartPage() {
    const {products, dispatch} = useContext(cartContext);
    return (  
        <div className="cart-page">
            <PageBreadcrumbs />
            <div className="width-container">
                {products.map((item, index)=> <Cart key={index} id={item.id} img={item.img} name={item.name} color={item.color} price={item.price} quantity={item.quantity}/> )}
                <div className="line"></div>
                <div className="btns">
                    <button className="btn shop-btn"><Link to="/products">Continue Shopping</Link></button>
                    <button onClick={()=>dispatch({type:"CLEAR_CART"})} className="btn clear-btn">Clear Shopping Cart</button>
                </div>
                <Bill />
            </div>
        </div>
    );
}

export default CartPage;