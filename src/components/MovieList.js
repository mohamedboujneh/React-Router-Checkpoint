import React from "react";
import MovieForm from "./MovieForm";
import MovieCard from "./MovieCard";
import Filter from "./Filter";


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

                <Filter movies={movies} />

            </div>
        );
    }
}