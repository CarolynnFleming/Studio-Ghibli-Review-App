import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import { useAuth } from '../../hooks/user';

const PROFILE_PATH = '/profile';

export default function Auth({ signingUp = false }) {
  const history = useHistory();
  const location = useLocation();
  const { loggedIn, signUp, signIn } = useAuth();


  return (
    <div>Auth</div>
  )
}
