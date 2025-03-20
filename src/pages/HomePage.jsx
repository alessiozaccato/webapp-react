import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import GlobalContext from '../contexts/globalContext';

import MovieCard from '../components/MovieCard';

export default function HomePage() {

    const [movies, setmovies] = useState([]);

    const { setIsLoading } = useContext(GlobalContext)

    const fetchMovies = () => {

        setIsLoading(true)

        axios
            .get('http://localhost:3000/movies')
            .then((res) => {
                setmovies(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => setIsLoading(false));
    }

    const renderMovies = () => {
        return movies.map((movie) => {
            return (
                <div key={movie.id} className='col'>
                    <MovieCard movie={movie} />
                </div>
            )
        })
    }

    useEffect(fetchMovies, []);


    return (
        <>
            <h1 className="text-center text-secondary my-4">Bool Movies</h1>
            <div className='row row-cols-3'>

                {renderMovies()}

            </div>

        </>
    )
}