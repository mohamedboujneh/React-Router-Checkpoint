import React from "react";
import Avangers from "./avangers.jpg";
export default  props => (

    <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={Avangers}  alt="img movie"/>
        <div className="card-body">
            <h5 className="card-title">Title : {props.movie.title} </h5>
            <h5 className="card-title">Rating :{props.movie.rating} </h5>
            <p className="card-text">Description: {props.movie.description} </p>

        </div>
    </div>



);