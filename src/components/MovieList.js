import React from "react";
import MovieForm from "./MovieForm";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import { BrowserRouter,Link, Redirect, Route, Router } from 'react-router-dom';
import MovieDescription from "./MovieDescription";


export default class MovieList extends React.Component {
   
    state = {
        movies: [],
    };

    addMovie = movie => {
        this.setState(state => ({

            movies: [movie, ...state.movies]
        }));
    };




    render() {
        let movies = [];


        movies = this.state.movies;


        return (
           
                     
            <div>
                <MovieForm onSubmit={this.addMovie} />
              
                 
                <div class="row">
                    {movies.map(movie => (
                         
                        <MovieCard movie={movie} />
                         
                    ))}
                </div>
               
                <Route  path="/description"      component={MovieDescription}  />


                <Filter movies={movies} />

            </div>
           
      
                
        );
    }
}