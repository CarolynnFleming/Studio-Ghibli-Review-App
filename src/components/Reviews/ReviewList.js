import ReviewItem from "./ReviewItem";
import { Link, useHistory, useLoocation } from 'react-router-dom'
import { useState } from "react";

export default function ReviewList({ reviews }) {
    const location = useHistory();
    const producer= new URLSeearchPrograms(location.search).get('producer') ?? 'all';
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleProduceChange = (e) => {
        history.pushState(`/?producer=${e.target.value}`);
    };

    if(!reviews) return null;
  return (
    <div>ReviewList</div>
  )
}
