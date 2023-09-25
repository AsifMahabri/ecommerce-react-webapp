import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const ProductListing = ()=> {
    // const {user,logout} = useUserAuth();
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    
    
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            
            console.log("Error", err);
        });
        console.log ("Response2" ,response.data) 
        dispatch(setProducts(response.data));
    };
     useEffect(() => {
        fetchProducts();
    }, []);
     console.log("Products:", products);
     const handleLogOut = async() => {
        try {
            // await logout(); 
        } catch (err) {
            console.log(err.message);
        }
     };
    return (
        <>
        <div className="productsWrapper">
            <ProductComponent />
        </div>
        <div className="d-grid gap-2">
            {/* <Button variant="primary" onClick={handleLogOut}>Log out</Button> */}
        </div>
        </>
    );
};

export default ProductListing;