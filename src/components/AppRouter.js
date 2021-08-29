import React from 'react';
import {  Route } from 'react-router-dom'; 
 import MovieDescription from './MovieDescription';
import MovieList from './MovieList';
 
class AppRouter extends React.Component  {


  state = {
    movies: [],
};

addMovie = movie => {
    this.setState(state => ({

        movies: [movie, ...state.movies]
    }));
};
render() {
  return(
     <div className="container">
     
        <Route  path="/" exact   render={(props) => <MovieList {...props} addMovie={this.addMovie}  movies={this.state.movies} />} />
        <Route  path="/description/:id"  render={(props) => <MovieDescription    {...props}   movies={this.state.movies} />} />
     
    </div>
 );
  }
}
export default AppRouter;
