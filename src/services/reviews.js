import { client, parseData } from './client';

function mapFrom({ created_at, user_id, profiles, ...rest }) {
    return {
        created: created_at,
        userId: user_id,
        username: profiles?.username,
        ...rest
    };
}

function mapTo({ created, userId, username, ...rest }) {
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
const data = parseData(request);
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

export async function updateReview(review) {
    const request = await client
    .from('reviews')
    .update(mapTo(review))
    .match({ id: review.id })
    .single();

    const data = parseData(request);
    return mapFrom(data);
}

export async function getReview(id) {
    const request = await client
    .from('reviews')
    .select(`
    *,
    profiles(
        username
    )
    `)
    .match({ id })
    .single();
    const data = parseData(request);
    return mapFrom(data);
}

export async function removeReview(id) {
    const request = await client
    .from('reviews')
    .delete()
    .match({ id })
    .single();

    const data = parseData(request);
    return mapFrom(data);
}