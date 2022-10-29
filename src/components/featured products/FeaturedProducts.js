import Product from "../product/Product";
import "./featured-products.css";
import {Link} from 'react-router-dom';
import {data} from "../../Data";

function FeaturedProducts() {
    var prod = [];
    while(prod.length < 4){
        var r = Math.floor(Math. random() * data.length);
        if(!prod.includes(data[r])) prod.push(data[r]);
    }
    return (  
        <div className="featured-prod">
            <div className="width-container">
            <h2 className="title">Featured Products</h2>
            <div className="underline"></div>
            <div className="products">
            {prod.map((item)=>{
                return(<Product key={item.id} {...item}/>)
            })}
            </div>
            <Link to="/products">
                <button className="btn all-products">ALL PRODUCTS</button>
            </Link>
            </div>
        </div>
    );
}

export default FeaturedProducts;    