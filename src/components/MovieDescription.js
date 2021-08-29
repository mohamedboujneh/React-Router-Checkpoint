import React ,{Component} from "react";
import { Link } from "react-router-dom";
 import Avangers from "./avangers.jpg";
 

class MovieDescription extends Component{
    render(){

        let movie= this.props.movies.find(movie => movie.id==this.props.match.params.id )
        return(
            <div className="card" style={{ width: '18rem' }}> 
                <Link to="/" exact>     Go Back     </Link>
            <img className="card-img-top" src={Avangers}  alt="img movie"/>
            <div className="card-body">
                <h5 className="card-title">Description :  {  movie.description }  </h5>
                
                <embed src={movie.url} allowFullScreen="true" width={425} height={344} />
               
               </div>
               
        </div>
    
        );
    }
}


export default   MovieDescription; 