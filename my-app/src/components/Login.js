import React, { useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import ProductListing from "../containers/ProductListing";
import { useUserAuth } from "../context/UserAuthContext";
import { Form, Alert } from "react-router-dom";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button"

const Login = () => {
    const [error, setError] = useState("");
    const {login, googleSignIn} = useUserAuth();
    let location = useLocation();
    let navigate = useNavigate();
    console.log(location)

    const [formData, setFormData]= useState({
        email:'',
        password:'',
    });

    const {email,password}=formData;
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            await login(email, password);
            navigate("/Home");
        } catch(err){
            setError(err.mesaage);
        }
    };
    function handleChange(e){
        e.preventDefault();
        const {name, value}=e.target;
        setFormData({...formData, [name]:value})
        console.log(formData)
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();

        try{
            await googleSignIn();
            navigate("/ProductListing")
        } catch (err) {
            setError(err.mesaage)
        }
    };

  return(
        <>
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            {/* {error && <Alert variant="danger">{error}</Alert>} */}
            <div>
                <label>Enter email</label>
                <input type="email" id="email" name="email" placeholder="Enter email" onChange={handleChange} value={email}></input>
            </div>
            <div>
                <label htmlFor="password">password:</label>
                <input type="password" id="password" name="password" onChange={handleChange} value={password}></input>
                <button type="submit">Submit</button>
            </div>
        </form>
        <div>
            <GoogleButton className="g-btn" type="dark" onClick={handleGoogleSignIn}/>
        </div>
        <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to="/signup">Sign up</Link>

        </div>
        </>
    )
}
export default Login;