import { useSelector } from "react-redux"
import React from "react";




const Cart = () =>{
    const products = useSelector((state) => state.cartproduct.products)
    console.log(products)
    const renderList = products.map((product) => {
  const {image, title, price, category, description}= product;
    

    return(
      <>
      <div className="Column Ip">
        <img className="ui fluid image" src={image}></img>
      </div>
      <div className="column rp">
        <h1>{title}</h1>
        <h2><a className="ui teal tag label">${price}</a>
        </h2>
        <h3 className="ui brown block header">{category}</h3>
        <p>{description}</p>

      </div>
      </>
    )
  });
  return <>{renderList}</>;

};

export default Cart;