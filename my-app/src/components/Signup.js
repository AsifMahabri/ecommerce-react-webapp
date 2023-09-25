import React, {useState} from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import {Alert, Button} from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
const Signup = () =>{
    const {Signup} = useUserAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [formData, setFormData]= useState({
        email:'',
        password:'',
    });
    const {email,password}=formData;

    function handleChange(e){
        e.preventDefault();
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
        console.log(formData)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            await Signup(email, password);
            navigate("/Login");
        } catch(err){
            setError(err.mesaage);
        }
    };
    return(
        <>
        <div className="p-4 box">
            <h2 className="mb3">Firebase Auth Signup</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <form >
            
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
        </div>
        <div className="p-4 box mt-3 text-center">
            Already have an account? <Link to="/">Log In</Link>
        </div>
        </>
    );
};

export default Signup;