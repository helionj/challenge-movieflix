import axios from 'axios';
import { BASE_URL } from 'util/requests';
import ReviewCard from './ReviewCard';
import './styles.css';

const MovieDetails = () => {
  axios.get(BASE_URL+"/movies/1")
    .then(response => {
      console.log(response.data)
    });
    
  return (
    <div className="movie-details-container">
        <h1>Tela detalhes do filme id: 1</h1>
      <div className="form-movie-details base-card">
        <form>
          <div className="mb-4">
            <input
              type="text"
              className="form-control base-input"
              placeholder="Deixe aqui a sua avaliação"
              name="username"
            />
          </div>

          <div className="review-submit">
            <button className= "btn btn-primary">
                <h5>Salvar avaliação</h5>
            </button>
          </div>
        </form>
      </div>
      <div className="card-list-review base-card">
            <ReviewCard user="Maria Silva" review="Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco."/>
            <ReviewCard user="Maria Silva" review="Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco."/>
            <ReviewCard user="Maria Silva" review="Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco."/>
            <ReviewCard user="Maria Silva" review="Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco."/>
      </div>
    </div>
  );
};

export default MovieDetails;
