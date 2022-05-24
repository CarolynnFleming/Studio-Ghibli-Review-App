import { Link, useParams, useHistory } from 'react-router-dom';
import { useReview, useReviews } from '../../hooks/reviews';
import ReviewForm from '../../components/Reviews/ReviewForm';

export default function CopyReview() {
    const history = useHistory();
    const { id } = useParams();
    const { review } = useReview(id);
    const { add } = useReviews();

    if(!review) return null;

    const handleSubmit = async (edited) => {
        await add(edited);
        history.replace('/reviews');
    };
  return (
    <div>
        <Link to='/reviews'>
            View Reviews
        </Link>
        <ReviewForm
        label="New Review"
        review={review}
        onSubmit={handleSubmit}
        />
    </div>
  );
}
