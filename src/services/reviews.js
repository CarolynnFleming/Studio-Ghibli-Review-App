
import { client, parseData } from './client';

function mapFrom({ created_at, user_id, profiles, ...rest }) {
    return {
        created: created_at,
        userId: user_id,
        name: profiles?.username,
        ...rest
    };
}

function mapTo({ created, userId, name, ...rest }) {
    return rest;
}
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