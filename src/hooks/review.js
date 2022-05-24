import { useContext, useState, useEffect } from 'react';
import { ReviewsContext, reviewsContext}  from '../context/ReviewsContext';
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


export function useReview(id) {
    const context = useContext(ReviewsContext);
}