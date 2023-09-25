import './App.css';
import Navbar from './components/Navbar';
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetails";
import Login from './components/Login';
import InvalidAccess from './components/InvalidAccess';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Signup from './components/Signup';
import {Container, Row, Col } from "react-bootstrap";
import Cart from './components/Cart'
import Favourite from './components/Favourite';

function App() {
  return (
    <div className="App">
     
    <Container>
      <Row>
        <Col>
        <userAuthContextProvider>
        <Navbar/>
      <Routes>
        <Route path ="/" element={<ProductListing/>} />
        <Route path ="/product/:productId" element={<ProductDetail/>} />
        <Route path="/ProductListing" element={<ProductListing/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/InvalidAccess" element={<InvalidAccess/>}/>
        {/* <Route path="/signup" element={<Signup/>}></Route> */}
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/favourite" element={<Favourite/>}></Route>
        <Route>484 Not Found!</Route>
        </Routes>
        </userAuthContextProvider>
        </Col>
        
        </Row>
        </Container>
    
      

    </div>
  );
};

export default App;
