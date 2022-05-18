import { format } from 'prettier';
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

export as