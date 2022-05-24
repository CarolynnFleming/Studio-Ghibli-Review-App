import { Link, useParams, useHistory } from 'react-router-dom';
import { useReview } from '../../hooks/reviews';
import { useAuth } from'../../hooks/user';
import reviewDetail from '../../components/Reviews/ReviewDetail';

export default function ViewReview() {
    const history = useHistory();
    const { id } = useParams();
    const { review, remove } = useReview(id);
    const { user } = useAuth();

    if(!review) return null;
  return (
    <div>ViewReview</div>
  )
}
