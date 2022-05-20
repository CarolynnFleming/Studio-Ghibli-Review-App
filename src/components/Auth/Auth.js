import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/user';

export default function AuthButton({ className }) {
    const { isLoggedIn, signOut } = useAuth();

    return()
}