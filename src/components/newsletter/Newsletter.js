import "./newsletter.css";
function Newsletter() {
    return (  
        <div className="newsletter">
            <div className="width-container">
                <div className="wrapper">
                    <h3 className="title">Join our newsletter and get 20% off</h3>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
                </div>
                <div className="wrapper">
                    <div className="input-container">
                        <input type="text" placeholder="Enter Email"/>
                        <button className="btn subscribe-btn">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;