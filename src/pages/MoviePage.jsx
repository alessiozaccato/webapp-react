import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReviewCard from '../components/ReviewCard';

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
            <h1>{movie?.title}</h1>
            <img src={movie?.image} alt={movie?.title} />

            <section>
                <h4>Our community reviews</h4>
                {renderReviews()}
            </section>
        </>
    )
}