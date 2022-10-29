import "./header.css";
import {Link} from 'react-router-dom';
function Header() {
    return (  
        <header>
            <div className="width-container">
                <div className="desc-content">
                    <h1 className="title">Design Your Comfort Zone</h1>
                    <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias? dolor sit amet consectetur adipisicing elit.Iusto, at sed omnis corporis doloremque possimus velit!</p>
                    <button className="btn shop-btn"><Link to="/products">SHOP NOW</Link></button>
                </div>
                <div className="img-content">
                    <img src="assets/header1.jpeg" alt="" className="header-img-1" />
                    <img src="assets/header2.jpeg" alt="" className="header-img-2" />
                </div>
            </div>
        </header>
    );
}

export default Header;