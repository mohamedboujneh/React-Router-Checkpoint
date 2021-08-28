import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import MovieCard from './MovieCard';
import MovieList from './MovieList';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route component={MovieList} path="/" exact={true} />
        <Route  path="/description"  component={MovieCard}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
