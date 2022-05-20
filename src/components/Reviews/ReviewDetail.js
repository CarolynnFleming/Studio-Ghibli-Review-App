import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ReviewDetail({ review, isOwner }) {
cosnt [sG, setSG] = useState({});
const { id } = useParams();
const { username, movie, review, created } = review;
const date = new Date(created).toLocaleDateString();

useEffect(() => {
    const fetchMovie = async() => {
        const res = await fetch(
            `https://ghibliapi.herokuapp.com/films/${id}`
        );
        const movieData = await res.json();
        setSG(movieData);
    }
    fetchMovie();
}, []);
  return (
    <div>ReviewDetail</div>
  )
}
