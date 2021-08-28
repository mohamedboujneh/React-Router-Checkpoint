import React ,{Component} from "react";
import { NavLink } from "react-router-dom";
import Avangers from "./avangers.jpg";
 



class MovieDescription extends Component{
    render(){



        return(
            <div className="card" style={{ width: '18rem' }}>
                     <NavLink to="/" >     Go Back    </NavLink>
            <img className="card-img-top" src={Avangers}  alt="img movie"/>
            <div className="card-body">
                <h5 className="card-title">Title :  </h5>
                <h5 className="card-title">Rating :  </h5>
                
    
            </div>
        </div>
    
        );
    }
}


export default   MovieDescription; 