import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    const { id, title, director, genre, abstract, release_year, image } = movie;

    return (
        <>
            <div className="card mb-4">
                <img src={image} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <span>{director}</span>
                    <span className="text-danger"> '{release_year}'</span>
                    <p>{genre}</p>
                    <p>{abstract}</p>
                    <Link className="text-warning" to={`movies/${id}`}>Read More</Link>
                </div>
            </div>
        </>
    )
}