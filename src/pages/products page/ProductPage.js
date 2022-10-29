import "./productPage.css";
import Filters from "../../components/filters/Filters";
import PageBreadcrumbs from "../../components/page breadcrumbs/PageBreadcrumbs";
import ProductList from "../../components/product list/ProductList";
import { useContext } from "react";
import { cartContext } from "../../context/Context";

function ProductPage() {
    const {filteredProd} = useContext(cartContext);
    return ( 
        <>
            <PageBreadcrumbs />
            <div className="product-page">
                <div className="width-container">
                    <Filters />
                    <ProductList prod={filteredProd}/>
                </div>
            </div>
        </>
    );
}

export default ProductPage;