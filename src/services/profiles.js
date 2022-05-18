import { client, parseData } from './client';

export async function getProfile() {
    const request = await client
    .from('profiles')
    .select()
    .single()
    return parseData(request);
}