import { Link } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';
import ProfileForm from '../../components/Profile/ProfileForm';
import { useUser } from '../../hooks/user';

export default function ViewProfile() {
    const { user, profile, isLoaded, create } = useUser();

    if(isLoaded) return null;
}