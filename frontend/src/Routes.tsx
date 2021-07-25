import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Movie from 'pages/Movie';
import MovieDetails from 'pages/MovieDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" exact>
        <Movie/>
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetails/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
