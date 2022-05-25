import ReviewItem from "./ReviewItem";
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";

export default function ReviewList({ reviews }) {
    const history = useHistory();
    const location = useLocation();
    const producer= new URLSearchParams(location.search).get('producer') ?? 'all';
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleProduceChange = (e) => {
        history.pushState(`/?producer=${e.target.value}`);
    };

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            const producerParams = new URLSearchParams(location.search).get('producer');

            const url =
            producerParams === 'all' || !producerParams
            ?'https://ghibliapi.herokuapp.com/films'
            : `https://ghibliapi.herokuapp.com/films?producer=${producerParams}`;

            const res = await fetch(url);
            const sGF = await res.json();

            setMovies(sGF)
            setLoading(false);
        }
        fetchMovies();
    }, [location.search]);

    if(!reviews) return null;
  return (
    <>
    {loading ? (
        <p>Loading Movies...</p>
    ) : (
        <section>
            <label htmlFor="producer">Film Producer:</label>
            <select id="producer" value={producer} onChange={handleProduceChange}>
            <option value="all">All</option>
                <option value="Isao Takahata">Isao Takahata</option>
                <option value="Toru Hara">Toru Hara</option>
                <option valu="Hayao Miyacaki">Hayao Miyazaki</option>
                <option value="Toshio Suzuki">Toshio Suzuki</option>
                <option value="Yoshio Nishimura">Yoshio Nishimura</option>
                <option value="Isao Takahata">Isao Takahata</option>
                <option value="Vincent Maraval">Vincent Maraval</option>
                <option value="Pascal Caucheteux">Pascal Caucheteux</option>
                <option value="Gregoire Sorlat">Gregoire Sorlat</option>
            </select>
            {movies.map((movie) => ( 
            <article key={movie.id}>
                <Link to={`/reviews/${movie.id}`}>
                    <h3>{movie.title}</h3>
                </Link>
                <p>{movie.original_title}</p>
                <img src={movie.image}/>
                <h2>Director: {movie.director}</h2>
                <h2>Producer: {movie.producer}</h2>
            </article>))}
        </section>
    )}
    <ul>
        <li>
            <span>Date</span>
            <span>Movie</span>
            <span>Owner</span>
            <span></span>
        </li>
        {reviews.map(review => {
            return(
                <ReviewItem
                key={review.id}
                review={review} />
            );
        })}
    </ul>
    </>
  );
}
