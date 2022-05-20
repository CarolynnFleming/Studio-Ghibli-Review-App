import { createContext, useState, useEffect } from "react";
import { getUser } from '../services/users';
import { getProfile } from "../services/profiles";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const currentUser = getUser();

    const [user, setUser] = useState(
        currentUser ? { id: currentUser.id, email: currentUser.email } : {}
    );
}

const [profile, setProfile] = useState(null);

const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
    const loadProfile = async () => {
        setIsLoaded(false);

        try {
            if(!user) return setProfile();

            const profile = await getProfile(user.id);
            setProfile(profile);
            <h1>
                `Welcome ${profile.username}`
            </h1>
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