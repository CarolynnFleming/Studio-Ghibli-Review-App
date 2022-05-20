import { Link } from 'react-router-dom';
import { useUser, UseAuth } from '../../hooks/user';
import { useReviewCount } from '../../hooks/reviews';
import AuthButton from '../../components/Auth/Auth';

export default function Header() {
    const { user, profile, isLoaded } = useUser();
    const { loggedIn } = useAuth();
    const count = useReviewCount();
}