import { useContext, useState, useEffect } from 'react';
import { ReviewsContext }  from '../context/ReviewsContext';
import { useUser } from './user';
import {
    getReviews,
    getReview,
    createReview,
    updateReview,
    removeReview,
} from '../services/reviews';
import toast from 'react-hot-toast';

export function useReviews() {
  const context = useContext(ReviewsContext);
  if(context === undefined) {
  throw new Error('useSuggestion has to be within a ReviewsContext');
  }

const { reviews, dispatch } = context;

useEffect(() => {
    if (reviews) return; 
    const load = async () => {
        try {
            const payload = await getReviews();
            dispatch({ type: 'reset', payload });
        }
        catch (err) {
            toast.error(err.message);
            throw err;
        }
    };
    load();
}, []);

const add = async (review) => {
    try {
        const payload = await createReview(review);
        dispatch({ type: 'create', payload });
        toast.success(`Your review "${payload.movie}" has been added`);
        return payload;
    }
    catch (err) {
        toast.error(err.message);
        throw err;
    }
};
return { reviews, add };
}

export function useReviewCount() {
const context = useContext(ReviewsContext);

if (context === undefined) {
    throw new Error('useSuggestion must be in a SuggestionContext');
}
return context.reviews?.length;
}


export function useReview(id) {
    const context = useContext(ReviewsContext);
    const { profile } = useUser();
    if (context === undefined) {
        throw new Error('useReview must be used within a ReviewContext');
    }

    const { reviews, dispatch } = context;

    const [review, setReview] = useState(null);

    useEffect(() => {
        const load = async () => {
            try {
                const review = await getReview(id);
                setReview(review);
            }
            catch (err) {
                toast.error(err.message);
                throw err;
            }
        };
        load();
    }, [id]);

    const remove = async () => {
        if (!review) return;

        try {
            const payload = await removeReview(review.id);
            setReview(null);

            if (reviews) dispatch({ type: 'delete', payload });
            toast.success(`Your review "${review.movie}" has been deleted`);
            return payload;
        }
        catch(err) {
            toast.error(err.message);
            throw err;
        }
    };

    const update = async (edits) => {
        if (!review) return;

        try {
            const updated = await updateReview({
                ...review,
                ...edits
            });
            const payload = {
                ...updated,
                username: profile.username
            };

            setReview(payload);

            if (reviews) dispatch({ type: 'update', payload });
            toast.success(`Updated review "${review.movie}"`);
            return payload;
        }
        catch (err) {
            toast.error(err.message);
            throw err;
        }
    };
    return { review, remove, update };
}