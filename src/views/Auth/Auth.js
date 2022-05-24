import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import { useAuth } from '../../hooks/user';

const PROFILE_PATH = '/profile';

export default function Auth({ signingUp = false }) {
  const history = useHistory();
  const location = useLocation();
  const { loggedIn, signUp, signIn } = useAuth();

  const signUpOptions = {
    action: signUp,
    redirectTo: '/confirm-email',
    header: 'Welcome!',
    label: 'Sign Up',
    message: <>Already have an account ? <Link to="/login">Sign In</Link></>
  };
  return (
    <div>Auth</div>
  )
}
