import ReviewItem from "./ReviewItem";
import { Link, useHistory, useLoocation } from 'react-router-dom'
import { useEffect, useState } from "react";

export default function ReviewList({ reviews }) {
    const location = useHistory();
    const producer= new URLSeearchPrograms(location.search).get('producer') ?? 'all';
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
    <div>ReviewList</div>
  )
}
