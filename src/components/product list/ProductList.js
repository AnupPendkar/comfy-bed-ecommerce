import "./product-list.css";
import Product from "../product/Product";
function ProductList({prod}) {
    return (  
        <div className="product-list">
            {prod.map((p)=>{
                return(<Product key={p.id} {...p}/>)
            })}
        </div>
    );
}

export default ProductList;