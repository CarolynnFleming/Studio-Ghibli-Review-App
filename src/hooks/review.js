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
    
}