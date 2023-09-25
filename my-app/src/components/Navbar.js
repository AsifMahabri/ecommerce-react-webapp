import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AddCategory } from "../redux/actions/productActions";



const Navbar = () => {
    const dispatch= useDispatch();
    
    const AddElectronicsCategory = () =>{
        dispatch(AddCategory("Electronics"))
    }


    return (
        <>
        <div
        style={{
            display: 'flex',
            alignment: 'center',
            justifyContent: 'space-between',
        }}
        >
            <span className="logo">SHOPLANE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    cart
                </Link>
                <Link className="navLink" to="/favourite">
                    favourite
                    </Link>
                {/* <span className="cartCount">Cart items: {items.length}</span> */}
            </div>
            
            <div>
            <ul id="horbar">
    <li><button>All</button></li>
    <li><button onClick={AddElectronicsCategory}>Electronics</button></li>
    <li><button>Jewellery</button></li>
    <li><button>Mens Clothing</button></li>
    <li><button>Womens Clothing</button></li>
    </ul>
    </div>
    </div>
    </>
    );
};

export default Navbar;