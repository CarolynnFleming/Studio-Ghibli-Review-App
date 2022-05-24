import { Link } from 'react-router-dom';
import { useReviews } from '../../hooks/reviews';
import ReviewList from '../../components/Reviews/ReviewList';


export default function ViewReviews() {
    const { reviews } = useReviews();
    
  return (
    <div>ViewReviews</div>
  )
}
