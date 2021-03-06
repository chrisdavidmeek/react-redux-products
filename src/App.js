import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import About from "./components/about/About";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Product from "./components/products/Product";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App(props) {
  return (

<Router>
    <div className="App">
        <nav>
            <Link to={"/"}>Home</Link>-
            <Link to={"/about"}>About</Link>-
            <Link to={"/products"}>Products</Link>-
            <Link to={"/product/1"}>ProductPage</Link>
        </nav>
        <Switch>
            <Route path={"/"} exact component={Home}/>
            <Route path={"/about"} component={About}/>
            <Route path={"/products"} component={Products}/>
            <Route path={"/product/:id"} component={Product}/>
        </Switch>
    </div>
</Router>
  );
}


//const mapStateToProps = (state)=>{
//    return{
//        user:state.user,
//        toggle:state.toggle
//    }
//};

export default App;
