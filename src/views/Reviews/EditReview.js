import { Link, useParams, useHistory } from 'react-router-dom';
import { useReview } from '../.../hooks/reviews';
import { useAuth } from '../../hooks/user';
import ReviewForm from '../../components/Reviews/ReviewForm';

export default function EditReview() {
    const history = useHistory();
    const { id } = useParams();
    const { review, update } = useReview(id);
    const { user } = useAuth();

    if(!review) return null;

    const isOwner = user.id === review.userId;
    const detailURL = `/reviews/${id}`;

    if(!isOwner) {
        history.replace(detailURL);
        return null;
    }
  return (
    <div>EditReview</div>
  )
}
