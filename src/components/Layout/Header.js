import { Link } from 'react-router-dom';
import { useUser, useAuth } from '../../hooks/user';
import { useReviewCount } from '../../hooks/reviews';
import Auth from '../../components/Auth/Auth';

export default function Header() {
    const { user, profile, isLoaded } = useUser();
    const { loggedIn } = useAuth();
    const count = useReviewCount();

    if (loggedIn && !isLoaded) return null;

    return (
        <>
        <header>
            <Link to='/'>Review the Ghibli Movies</Link>
            <Link to="/reviews">{count} Review{count !== 1 && 'r'}</Link>
            <p>{loggedIn ? (
                <>
                <span>Signed in as</span>
                <span>{profile?.username || user.email}</span>
                </>
            ) : (
                <span>Not Signed In</span>
            )}
            <Auth />
            </p>
        </header>
        </>
    );
}