import { useContext } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from '../context/UserContext';
import {
    signInUser,
    signUpUser,
    signOutUser,
} from '../services/users';
import {
    createProfile,
    updateProfile
} from '../services/profiles';

export const useAuth = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('Auth has to be within UserProvider')l
    }
}