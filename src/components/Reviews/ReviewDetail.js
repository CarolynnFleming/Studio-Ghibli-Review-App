import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ReviewDetail({ review, isOwner }) {
const [sG, setSG] = useState({});
const { id } = useParams();
const { username, movie, thoughts, created } = review;
const date = new Date(created).toLocaleDateString();
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchMovie = async() => {
        const res = await fetch(
            `https://ghibliapi.herokuapp.com/films/${id}`
        );
        const movieData = await res.json();
        setLoading(false);
        setSG(movieData);
    }
    fetchMovie();
}, []);
  return (
      <>
    <h1>Movie Review</h1>
    <Link to="/reviews">Back to the List of Movies</Link>

    {loading ? (
            <p>Loading Movie...</p>
        ) : (
            <article>
                <h2>{sG.title}</h2>
                <h2>{sG.original_title}</h2>
                <img src={sG.movie_banner} />
                <h4>{sG.description}</h4>
                <h2>Director: {sG.director}</h2>
                <h2>Producer: {sG.producer}</h2>
                <h2>{sG.release_date}</h2>
                
                <h2>{movie}</h2>
        <p>Created by {isOwner ? 'you' : username} on {date}</p>
        <p>{thoughts}</p>
            </article>
        )}
    </>
  )
}
