import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { selectedProduct, removeSelectedProduct, addToCart, Favourite } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = ()=> {
    const product = useSelector((state) => state.product);
    const {image, title, price, category, description}= product
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(productId);
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log("Err", err)
        });
        console.log("response is" + response.data)
        dispatch(selectedProduct(response.data));

    };
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return() => {
            dispatch(removeSelectedProduct())
        }
    },[productId])

    const AddToCart =  () =>{
        
            // alert("Inside addToCart")
            dispatch(addToCart(product))
        
        }

        const addFavourite = () =>{
            alert("Inside Favourite")
            dispatch(Favourite(product))
        }
    return (
        <div className="productsWrapper">
            {Object.keys(product).length === 0 ?(<div>...Loading</div>) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable centre aligned grid">
                        <div className="ui vertical divider"></div>
                        <div className="middle aligned row">
                            <div className="Column Ip">
                                <img className="ui fluid image" src={image} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2><a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p> 
                                <div  tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                        </div>
                                    <div >
                                    <button className="visible content" onClick={AddToCart}>Add to cart</button>
                                    </div>
                                    <div>
                                        <button onClick={addFavourite}>Favourite</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
            )}
       </div>   
    );
};

export default ProductDetail;