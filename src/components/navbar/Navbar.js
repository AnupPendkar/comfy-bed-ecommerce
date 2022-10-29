import "./navbar.css";
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from "../../context/Context";

function Navbar() {
    const mbNav = useRef();
    const [show, setShow] = useState(false);
    const {products} = useContext(cartContext);
    useEffect(()=>{
        if(show){
            mbNav.current.style.left = `0`
        }else{
            mbNav.current.style.left = `-100%`
        } 
    },[show])
    return ( 
        <nav>
            <div className="width-container">
                <div className="mb-nav">
                    <div className="nav-header">
                        <Link to="/">
                            <img src="assets/logo.svg" alt="logo" />
                        </Link>
                        <i onClick={()=>setShow(true)} className="fa-solid fa-bars"></i>
                    </div>
                    <div ref={mbNav}  className="menu-content">
                        <div className="nav-header">
                            <img src="assets/logo.svg" alt="logo" />
                            <i onClick={()=>setShow(false)} className="fa-solid fa-xmark"></i> 
                        </div>
                        <ul className="page-links">
                            <li onClick={()=>setShow(false)} className="link">
                                <Link to="/">Home</Link>
                            </li>
                            <li onClick={()=>setShow(false)} className="link">
                                <Link to="/about">About</Link>
                            </li>
                            <li onClick={()=>setShow(false)} className="link">
                                <Link to="/products">Products</Link>
                            </li>
                        </ul>
                        <div className="cart-and-login">
                            <Link to="/cart">
                                <div onClick={()=>setShow(false)} className="cart-container container">
                                    <span className="name">Cart</span>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    {products.length>0 && <div className="cart-quan">{products.length}</div>}
                                </div>
                            </Link>
                            <div className="container">
                                <span className="name">Login</span>
                                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dt-nav">
                    <div className="nav-header">
                        <Link to="/">
                            <img src="assets/logo.svg" alt="logo" />
                        </Link>
                        <i onClick={()=>setShow(true)} className="fa-solid fa-bars"></i>
                    </div>
                    <ul className="page-links">
                        <li className="link">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="link">
                            <Link to="/about">ABOUT</Link>
                        </li>
                        <li className="link">
                            <Link to="/products">PRODUCTS</Link>
                        </li>
                    </ul>
                    <div className="cart-and-login">
                        <div className="cart-container container">
                            <span className="name"><Link to="/cart">Cart</Link></span>
                            <i className="fa-solid fa-cart-shopping"></i>
                            {products.length>0 && <div className="cart-quan">{products.length}</div>}
                        </div>
                        <div className="container">
                            <span className="name">Login</span>
                            <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;