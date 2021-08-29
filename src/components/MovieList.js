import React from "react";
import MovieForm from "./MovieForm";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
 

export default class MovieList extends React.Component {
   
    



    render() {
        let movies   = this.props.movies;


        return (
           
                     
            <div>
                   <div className="row">
                <MovieForm onSubmit={this.props.addMovie} />
                </div>
                 
                <div className="row">
                    {movies.map(movie => (
                        
                        <MovieCard movie={movie} />
                         
                    ))}
                </div>
                <br/> 
                <div className="row">
                <Filter movies={movies} />
 
                </div>
           
                </div>
           
      
                
        );
    }
}