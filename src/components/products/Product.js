import React from "react";
import {connect} from "react-redux";

function Product(props) {

    const returnPrd = (prd)=>{
        return prd.id === props.match.params.id;
    };

    const prd = props.cart.find(returnPrd);

    return(
     <div>
         <h1>{prd?prd.name:"Product does not exist"}</h1>
     </div>
    )

}

const mapStateToProps = (state)=>{
    return{
        cart:state.cart,
    }
};

export default connect(mapStateToProps)(Product);