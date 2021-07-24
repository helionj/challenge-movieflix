import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Movie from 'pages/Movie';
import MovieDetails from 'pages/MovieDetails';


const  App = () =>{
  return (
    <div>
      <Navbar/>
      <MovieDetails/>
    </div>
  );
}

export default App;
