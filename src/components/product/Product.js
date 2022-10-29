import {useState} from 'react';
import "./product.css";
import {Link} from 'react-router-dom';

function Product({name, price, brand, sku, color, img}) {
    const [fade, setFade] = useState(false);
    return (  
        <div className="product">
            <div className="img-container" onMouseOver={()=>setFade(true)} onMouseOut={()=>setFade(false)}>
                <img src={img} alt="" className="product-img" />
                {fade && (
                    <>
                    <div className="overlay"></div>
                    <Link to={`/products/${sku}`}>
                        <div className="search-container">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </Link>
                    </>
                )}
                
            </div>
            <div className="name-and-price">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    );
}

export default Product;