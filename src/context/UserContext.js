import { createContext, useState, useEffect } from "react";
import { getUser } from '../services/user';
import toast from 'react-hot-toast'; 
import { getProfile } from "../services/profiles";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const currentUser = getUser();

    const [user, setUser] = useState(
        currentUser ? { id: currentUser.id, email: currentUser.email } : {}
    );


const [profile, setProfile] = useState(null);

const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
    const loadProfile = async () => {
        setIsLoaded(false);

        try {
            if(!user.email) return setProfile();

            const profile = await getProfile(user.id);
            setProfile(profile);
                toast(`Welcome Friends${profile.username}`), {
                    icon: '🤘'
                }
        }
        catch(err) {
            setProfile(null);
        }
        finally {
            setIsLoaded(true);
        }
    };
    loadProfile();
}, [user]);

const value = { user, setUser, profile, isLoaded, setProfile };

return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}