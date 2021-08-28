import React from "react";
import Avangers from "./avangers.jpg";
import { BrowserRouter,Link, NavLink, Redirect, Route } from 'react-router-dom';
import MovieDescription from "./MovieDescription";


 

export default  props => (
   
     <div className="card" style={{ width: '18rem' }}>
      
        <img className="card-img-top" src={Avangers}  alt="img movie"/>
        <div className="card-body">
            <h5 className="card-title">Title : {props.movie.title} </h5>
            <h5 className="card-title">Rating :{props.movie.rating} </h5>
           
           
     
           <Link     className="btn btn-primary"    to= "/description"   >
          Description: {props.movie.description}      </Link>
 
        </div>

    </div>
  
  
 
);