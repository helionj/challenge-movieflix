import './styles.css'
const Movie = () => {
    return (
        <div className = "movie-container">
            <h1>Tela listagem de filmes</h1>
            <div className= "movie-list-container">
                <a href="Acessar/movies/1" className= "link-movie">Once Up A Time</a>
                <a href="Acessar/movies/1" className= "link-movie">Sombra e Escuridão</a>
                <a href="Acessar/movies/1" className= "link-movie">The Uricane</a>
            </div>
        </div>
    );
}

export default Movie;