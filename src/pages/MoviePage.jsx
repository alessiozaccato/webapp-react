import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReviewCard from '../components/ReviewCard';
import ReviewForm from '../components/ReviewForm';

export default function MoviePage() {

    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const fetchMovie = () => {
        axios
            .get(`http://localhost:3000/movies/${id}`)
            .then((res) => setMovie(res.data))
            .catch((error) => console.log(error));
    };

    useEffect(fetchMovie, [id]);

    const renderReviews = () => {
        return movie.reviews?.map((review) => {
            return <ReviewCard key={review.id} review={review} />;
        });
    };



    return (
        <>
            <div className='card col-6 mx-auto text-center'>

                <h1 className='my-4'>{movie?.title}</h1>
                <img className='img-top img-fluid' src={movie?.image} alt={movie?.title} />

                {/* reviews movie */}
                <section>
                    <h4 className='mt-2'>Our community reviews</h4>
                    {renderReviews()}
                </section>

                {/* form review */}
                <section>
                    {movie?.id && <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />}
                </section>
            </div>
        </>
    )
}