import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Movies from 'pages/Movie';
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
        <Movies/>
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetails/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
