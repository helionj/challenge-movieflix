import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import './styles.css';
const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/movies',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);
  return (
    <div className="movie-container">
      <h1>Tela listagem de filmes</h1>

      <div className="movie-list-container">
        {page?.content.map((item) => (
          <Link key={item.id} to={`/movies/${item.id}`} className="link-movie">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
