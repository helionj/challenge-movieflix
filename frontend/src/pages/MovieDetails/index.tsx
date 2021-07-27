import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Review } from 'types/review';
import { hasAnyRoles } from 'util/auth';
import { requestBackend } from 'util/requests';
import EmptyCard from './EmptyCard';
import ReviewCard from './ReviewCard';
import './styles.css';
type UrlParams = {
  movieId: string;
};

type FormData = {
  text: string;
};

const MovieDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { movieId } = useParams<UrlParams>();
  const [reviews, setReviews] = useState<Review[]>();
  const [isNewReview, setIsNewReview] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviews(response.data);
      console.log('REVIEWS', response.data);
    });
  }, [movieId, isNewReview]);

  const onSubmit = (formData: FormData) => {
    setIsNewReview(false);

    const data = {
      movieId: movieId,
      ...formData,
    };
    console.log(data);

    const params: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      withCredentials: true,
      data,
    };

    requestBackend(params)
      .then((response) => {
        console.log('SUCESSO', response.data);
        setIsNewReview(true);
      })
      .catch((error) => {
        console.log('ERROR', error.message);
      });
  };

  return (
    <div className="movie-details-container">
      <h1>Tela detalhes do filme id : {movieId}</h1>

      {hasAnyRoles(['ROLE_MEMBER']) && (
        <div className="form-movie-details base-card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                {...register('text', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className="form-control base-input"
                placeholder="Deixe aqui a sua avaliação"
                name="text"
              />
              <div className="invalid-feedback d-block">
                {errors.text?.message}
              </div>
            </div>

            <div className="review-submit">
              <button className="btn btn-primary">
                <h5>Salvar avaliação</h5>
              </button>
            </div>
          </form>
        </div>
      )}
      {reviews === undefined || reviews.length === 0 ? (
        <EmptyCard />
      ) : (
        <div className="card-list-review base-card">
          {reviews?.map((item) => (
            <ReviewCard
              user={item.user.name}
              review={item.text}
              key={item.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
