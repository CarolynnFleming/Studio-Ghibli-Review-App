import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/user';

export default function Home() {
  const { loggedIn } = useAuth();

  return (
    <>
    <h1>Welcome to the Studio Ghibli Film Review App!!!</h1>

    <p>Choose a movie from our list</p>
    <p>Write a review <Link to ="/reviews">leave a review on any movies you've watched!</Link></p>
    <p>Create Accout</p>
    {loggedIn ? (
      <Link to="/profile">View your profile</Link>
    ) : (
      <>
      <Link to="/register">Create Account</Link>
      {'or' /* */}
      <Link to="/login">Sign In</Link>
      </>
    )}
    </>
  );
}
