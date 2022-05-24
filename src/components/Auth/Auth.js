import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/user';

export default function Auth({ className }) {
    const { loggedIn, signOut } = useAuth();

    return(
        <>
        {loggedIn ? (
            <button onClick={signOut}>SignOut
            </button>
        ) : (
            <Link to="/login">
                <button>Sign In</button>
            </Link>
        )}
        </>
    );
}