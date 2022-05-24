import { client, parseData } from './client';

export async function getProfile(userId) {
    const request = await client
    .from('profiles')
    .select()
    .match({ user_id: userId })
    .single();

    return parseData(request);
}

export async function updateProfile({ username, email }) {
    const request = await client
    .from('profiles')
    .update({ username })
    .match({ email })
    .single();
    return parseData(request);
}
export async function createProfile({ email, username }) {
    const request = await client
    .from('profiles')
    .insert({ email, username })
    .single();
    return parseData(request);
}

export async function deleteProfileByEmail(email) {
    const request = await client
    .from('profiles')
    .delete()
    .match({ email });
    return parseData(request);
}