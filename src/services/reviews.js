
import { data } from 'autoprefixer';
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
        user_id,
        profiles (
            username
        )
    `);
const data= parseData(request);
return data.map(mapFrom);
}

export async function createReview(review) {
    const request = await client
    .from('reviews')
    .insert(mapTo(review))
    .single();

    const data = parseData(request);
    return mapFrom(data);
}