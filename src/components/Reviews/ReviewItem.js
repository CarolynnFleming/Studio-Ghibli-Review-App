import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/user';

export default function ReviewItem({ review }) {
    const { user } = useAuth();
    const { id, movie, username, userId, created } = review;
    const isOwner = user.id === userId;
    const date = new Date(created);
    const action = isOwner ? 'edit' : 'copy';
  return (
    <li>
        <span>
            {date.toLocaleString()}
        </span>
        <Link to={`/reviews/${id}`}>
            {movie}
        </Link>
        <span>{isOwner ? 'you' : username}</span>
        <span>
            <Link to={`/reviews/${id}/${action}`}>
                {action}
            </Link>
            </span>
    </li>
  );
}
