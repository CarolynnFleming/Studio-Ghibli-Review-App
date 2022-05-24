import { Link } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';
import ProfileForm from '../../components/Profile/ProfileForm';
import { useUser } from '../../hooks/user';

export default function ViewProfile() {
    const { user, profile, isLoaded, create } = useUser();

    if(isLoaded) return null;

    const hasProfile = user && profile;

    const handleCreate = async (profile) => {
        await create(profile);
    }

    return hasProfile
    ? <ShowProfile profile={profile} />
    : <CreateProfile
    email={user.email}
    onCreate={handleCreate}
    />;
}

function CreateProfile({ email, onCreate }) {
    return(
        <>
        <p>Fill out the Form and Create A Profile!</p>
        <ProfileForm
        formLabel='Create Profile'
        onSubmit={onCreate}
        email={email}
        />
        </>
    );
}