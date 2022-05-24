import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import  Loading from '../../components/Loading/Loading';
import ProfileForm from '../../components/Profile/ProfileForm';
import { useUser } from '../../hooks/user';

export default function EditProfile() {
    const history = useHistory();
    const { profile, update, isLoaded } = useUser();
    const [loading, setLoading] = useState(false);

    if(!isLoaded) return null;

    const handleEdit = async (profile) => {
        try{
            setLoading(true);
            await update(profile);
            history.push('/profile');
        } catch (error) {
            setLoading(false);
        }
    };
    
}