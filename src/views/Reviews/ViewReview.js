import { Link, useParams, useHistory } from 'react-router-dom';
import { useReview } from '../../hooks/reviews';
import { useAuth } from'../../hooks/user';;
import ReviewDetail from '../../components/Reviews/ReviewDetail';

export default function ViewReview() {
    const history = useHistory();
    const { id } = useParams();
    const { review, remove } = useReview(id);
    const { user } = useAuth();

    if(!review) return null;

    const isOwner = user.id === review.userId;

    const handleDelete = async () => {
        if(!confirm('Are you sure?')) return;
        await remove();
        history.replace('/reviews')
    }
  return (
    <div>
        <Link to="/reviews">
            View reviews
        </Link>
        <ReviewDetail
        review={review}
        isOwner={isOwner}
        />
        <div>
            {isOwner && <Link to={`/reviews/${id}/edit`}>
                <p>
                    <button>Edit Review</button>
                    </p>
                    </Link>}
            {isOwner && 
            <p>
                <button onClick={handleDelete}>
                    Delete Suggestion
                </button>
            </p>
            }
            { isOwner || <Link to={`/reviews/${id}/copy`}>
                <p>
                    <button>Copy Review</button>
                </p>
                
            </Link>}
        </div>
    </div>
  );
}
