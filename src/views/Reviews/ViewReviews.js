import { Link } from 'react-router-dom';
import { useReviews } from '../../hooks/reviews';
import ReviewList from '../../components/Reviews/ReviewList';


export default function ViewReviews() {
    const { reviews } = useReviews();

  return (
    <div>
        <h1>Reviews List Page!</h1>

        <Link to="/reviews/add">
            <button>Add New Review</button>
        </Link>
        <ReviewList reviews={reviews} />
    </div>
  );
}
