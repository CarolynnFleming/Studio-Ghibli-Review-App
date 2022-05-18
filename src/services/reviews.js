
import { client, parseData } from './client';

export async function getReviews() {
    const request = await client
    .from('reviews')
    .select(`
        id,
        review,
        created_at,
        user_id
    `);
return parseData(request);
}

export async function createReview(review) {
    const request = await client
    .from('reviews')
    .insert(review)
    .single();

    return parseData(request);
}