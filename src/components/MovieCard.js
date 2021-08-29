import React from "react";
import Avangers from "./avangers.jpg";
import { Link  } from 'react-router-dom';
  

 

export default  class MovieCard  extends React.Component {
    render(){

        return(
     <div className="card" style={{ width: '18rem' }}>
      
        <img className="card-img-top" src={Avangers}  alt="img movie"/>
        <div className="card-body">
            <h5 className="card-title">Title : {this.props.movie.title} </h5>
            <h5 className="card-title">Rating :{this.props.movie.rating} </h5>
           
           
     
           <Link    className="btn btn-primary"  to= {`/description/${this.props.movie.id}` } >    Description: {this.props.movie.description}     </Link>
        </div>
     
    </div>
  
        );}
 
}