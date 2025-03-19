import axios from "axios";
import { useState } from "react";

export default function ReviewForm({ movie_id, reloadReviews }) {
    //endpoint 
    const endpoint = `http://localhost:3000/movies/${movie_id}/reviews`

    //valore stato iniziale
    const initialValue = {
        name: '',
        text: '',
        vote: undefined
    };

    //dichiarazione variabile di stato associata al Form
    const [formReview, setFormReview] = useState(initialValue)

    //funzione che dialoga con il backend
    const handleSubmit = (e) => {

        //per evitare il ricaricamento della pagina
        e.preventDefault();

        axios
            .post(endpoint, formReview, {
                headers: {
                    'Content-Type': 'application/json', // tipo di file(in questo caso json)
                },
            })
            .then(() => {
                setFormReview(initialValue);
                //ricaricare le recensioni da zero utilizzando questo prop
                reloadReviews();
            })
            .catch((err) => console.log(err));

    };

    const setFieldValue = (e) => {
        const { name, value } = e.target;
        setFormReview({
            ...formReview,
            [name]: value,
        });
    };

    return (
        <>
            <div className="card">
                <h5 className="mt-3">Add reviews</h5>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control my-2"
                                value={formReview.name}
                                onChange={setFieldValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>text</label>
                            <textarea
                                name="text"
                                className="form-control my-2"
                                value={formReview.text}
                                onChange={setFieldValue}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label>Vote</label>
                            <input
                                type="number"
                                min={1}
                                max={5}
                                name="vote"
                                className="form-control my-2"
                                value={formReview.vote}
                                onChange={setFieldValue}
                            />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-danger mt-2">
                                Crea Recensione
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}