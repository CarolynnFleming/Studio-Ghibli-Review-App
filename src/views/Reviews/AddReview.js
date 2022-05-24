import { useHistory } from "react-router-dom";
import { useReviews } from '../../hooks/reviews';
import ReviewForm from '../../components/Reviews/ReviewForm';

export default function AddReview() {
  const { add } = useReviews();
  const history = useHistory();

  const handleSubmit = async review => {
    await add(review);
    history.replace('/reviews');
  };
  return (
    <div>ApiList</div>
  )
}
