import React, { useState } from "react";
import MovieCard from "./MovieCard";
export default function Filter(props) {

 

    const [title, setTitle] = useState('');
    const [newMovies, setMovies] = useState('');
    const [rating, setRating] = useState('');


    const searchMovie_Title = (e) => {
        e.preventDefault();

        setMovies(props.movies.filter(movie => movie.title === title))
    };


    const searchMovie_Rating = (e) => {
        e.preventDefault();

        setMovies(props.movies.filter(movie => movie.rating >= rating))
    };

    return (
        <div>


            <form className="row g-3"  >
                <div className="col-auto">
                    <input type="text" className="form-control" name="title"
                        value={title}
                        onChange={event => setTitle(event.target.value)} placeholder="by title" required></input>
                </div>

                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3" onClick={searchMovie_Title} >Search</button>
                </div> 
            </form>


            <form className="row g-3"  >
                <div className="col-auto">
                    <input type="number" className="form-control" name="rating"
                        value={rating}
                        onChange={event => setRating(event.target.value)} placeholder="by rating" required ></input>
                </div>

                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3" onClick={searchMovie_Rating} >Search</button>
                </div> 
            </form>

            <div className="row"> 
                 {   newMovies.length != 0 ?   newMovies.map(movie => (
                    <MovieCard movie={movie} />   )) : ''
                }
            </div>
        </div>
    );
}
