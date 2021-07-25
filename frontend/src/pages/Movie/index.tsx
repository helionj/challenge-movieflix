import { Link } from 'react-router-dom';
import './styles.css'
const Movie = () => {
    return (
        <div className = "movie-container">
            <h1>Tela listagem de filmes</h1>
            <div className= "movie-list-container">
                <Link to="/movies/movieId:1" className= "link-movie">Once Up A Time</Link>
                <Link to ="/movies/movieId:2" className= "link-movie">Sombra e Escuridão</Link>
                <Link to="/movies/movieId:3" className= "link-movie">The Uricane</Link>
            </div>
        </div>
    );
}

export default Movie;