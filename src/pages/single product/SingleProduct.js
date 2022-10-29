import "./singleProduct.css";
import { useContext, useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {data} from '../../Data';
import PageBreadcrumbs from "../../components/page breadcrumbs/PageBreadcrumbs";
import {cartContext} from '../../context/Context';

function SingleProduct() {
    const location = useLocation().pathname.split('/')[2];
    const element = data.find((item)=>{
        return (item.sku === location);
    })
    const {dispatch} = useContext(cartContext);
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState(element.color[0]);
    const [currImg, setCurrImg] = useState(element.img);
    const imgRef = useRef();
    const colorRef = useRef();
    
    
    
    useEffect(()=>{
        const imgs = Array.from(imgRef.current.children);
        imgs.map((item)=>{
            if(item.src === currImg){
                item.classList.add('minimize');
            }else{
                item.classList.remove('minimize');
            }
            item.addEventListener('click', ()=>{
                setCurrImg(item.src)
            })
        })
    },[currImg])
    useEffect(()=>{
        const arr = Array.from(colorRef.current.children);
        arr[0].classList.add('active');
    },[])
    

    const handleColor = (e)=>{
        const arr = Array.from(colorRef.current.children);
        arr.map((item)=>{
            if(item.classList.contains('active')){
                item.classList.remove('active');
            }
        })
        e.target.classList.add('active');
        setColor(e.target.style.background)
    }
    const handleSubmit = ()=>{
        dispatch({type:"ADD_TO_CART", payload:{
            id: element.id,
            img: element.img,
            name: element.name,
            color,
            price: element.price,
            quantity,
        }})    
    }

    return ( 
        <div className="single-product">
            <PageBreadcrumbs name={element.name}/>
            <div className="width-container single">
                <button className="btn back-btn"><Link to="/products">BACK TO PRODUCTS</Link></button>
                <div className="container">
                    <div className="img-section">
                        <img src={currImg} alt="product-img"/>
                        <div ref={imgRef} className="list-of-img">
                            <img id="img1" src={element.img} alt="product-img"/>
                            <img id="img2" src="https://dl.airtable.com/.attachments/f15406a7d5734462ccbe033523ab44f2/36f645ba/extra-1.jpeg" alt="product-img"/>
                            <img id="img3" src="https://dl.airtable.com/.attachments/7a2335390d5403fa6f30e5da7c529a1a/8074a08a/extra-2.jpeg" alt="product-img"/>
                            <img id="img4" src="https://dl.airtable.com/.attachments/f026e088c27b48e3d0333c1bb2f89875/8323e097/extra-3.jpeg" alt="product-img"/>
                            <img id="img5" src="https://dl.airtable.com/.attachments/e789790777f02ec1068c6e12a31b9b8d/9f9968d0/extra-4.jpeg" alt="product-img"/>                    
                        </div>
                    </div>
                    <div className="info-section">
                        <h2 className="title">{element.name}</h2>
                        <div className="reviews">
                            <svg stroke="currentColor" fill="red" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                            <svg stroke="currentColor" fill="red" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                            <svg stroke="currentColor" fill="red" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                            <svg stroke="currentColor" fill="red" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                            <svg stroke="currentColor" fill="red" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                            <span className="review-count">(27 customer reviews)</span>
                        </div>
                        <p className="price">$ {element.price}</p>
                        <p className="desc margin">Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>                
                        <div className="avial details">
                            <p className="avail-title">Available :</p>
                            <p className="desc">In Stock</p>
                        </div>
                        <div className="sku details">
                            <p className="avail-title">SKU :</p>
                            <p className="desc">{element.sku}</p>
                        </div>
                        <div className="Brand details">
                            <p className="avail-title">Brand :</p>
                            <p className="desc">{element.brand}</p>
                        </div>
                        <div className="line"></div>
                        <div className="color details">
                            <p className="avail-title">Colors :</p>
                            <div ref={colorRef} className="select-color">
                                {element && element.color.map((item, index)=>{
                                    return (<div key={index} onClick={handleColor} style={{background: `${item}`}} className="color">
                                        <i className="fa-sharp fa-solid fa-check"></i>
                                    </div>);
                                })}
                            </div>
                        </div>
                        <div className="quantity-section">
                            <i onClick={()=> quantity>1 && setQuantity((prev)=>prev-1)} className="fa-solid fa-minus"></i>
                            <span className="quantity">{quantity}</span>
                            <i onClick={()=> setQuantity((prev)=>prev+1)} className="fa-solid fa-plus"></i>
                        </div>
                        <button onClick={handleSubmit} className="btn add-to-cart">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;