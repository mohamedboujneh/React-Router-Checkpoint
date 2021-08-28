 import './App.css';
import MovieList from './components/MovieList';
import { Link,   Route,Redirect, BrowserRouter, Switch } from 'react-router-dom';
import MovieDescription from "./components/MovieDescription";
import { useHistory } from "react-router-dom";
 
function App() {
  return (
    
   <div className="App">
     <BrowserRouter>
   <MovieList />
   </BrowserRouter>
 </div>
     
   );
}

export default App;
