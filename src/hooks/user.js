import { useContext } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from '../context/UserContext';
import {
    signInUser,
    signUpUser,
    signOutUser,
} from '../services/user';
import {
    createProfile,
    updateProfile
} from '../services/profiles';

export const useAuth = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('Auth has to be within UserProvider')
    }

    const { user, setUser } = context;

    const loggedIn = user?.email;
    const signUp = async (email, password) => {
        try{
            const user = await signUpUser(email, password);
            setUser(user);
        }
        catch (err) {
            toast.error(err.message);
            throw err;
        }
    };

    const signIn = async (email, password) => {
        try{
            const user = await signInUser(email, password);
            setUser(user);
        }
        catch (err) {
            toast.error(err.message);
            throw err;
        }
    };

    const signOut = async () => {
        await signOutUser();
        setUser({});
        toast('You have been signed out');
    };

    return { user, loggedIn, signUp, signIn, signOut };
};

export const useUser = () => {
    const context = useContext(UserContext);
    if(context === undefined) {
        throw new Error ('userUser must be in a UserProvider');
    }

    const { user, profile, isLoaded, setProfile } = context;

const create = async (data) => {
    try{
        const profile = await createProfile(data);
        setProfile(profile);
        toast.success('Profile created');
    }
    catch(err) {
        toast.error(err.message);
        throw err;
    }
};

const update = async (data) => {
    try{
        const profile = await updateProfile(data);
        setProfile(profile);
        toast.success('Profile updated');
    }
    catch(err) {
        toast.error(err.message);
        throw err;
    }
};
return { user, profile, isLoaded, create, update };
};