import axios from 'axios';
import { useState, useEffect } from 'react';

export default function HomePage() {

    const [movies, setmovies] = useState([]);

    const fetchMovies = () => {
        axios
            .get('http://localhost:3000/movies')
            .then((res) => {
                setmovies(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(fetchMovies, []);


    return (
        <>
            <h1 className="text-center">Bool Movies</h1>
            <div className='row'>

                {
                    movies.map((movie) => {
                        return (
                            <div key={movie.id} className='col'>
                                <p>{movie.title}</p>
                            </div>
                        )
                    })
                }

            </div>

        </>
    )
}