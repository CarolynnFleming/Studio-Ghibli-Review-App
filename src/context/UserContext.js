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

