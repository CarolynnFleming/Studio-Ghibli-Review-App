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
    redirectTo: '/login',
    header: 'Welcome!',
    label: 'Sign Up',
    message: <>Already have an account ? <Link to="/login">Sign In</Link></>
  };
  const signInOptions = {
    action: signIn,
    redirectTo: location.state?.from?.pathename || PROFILE_PATH,
    header: 'Welcome!',
    label: 'Sign In',
    message: <>Need an account ? <Link to="/register">Sign Up</Link></>
  };

  const options = signingUp ? signUpOptions : signInOptions;

  const handleSubmit = async (email, password) => {
    await options.action(email, password);
    history.replace(options.redirectTo);
  };

  if (loggedIn) return <Redirect to={PROFILE_PATH} />;

  return (
    <section>
      <h2>{options.header}</h2>
      <br />
      <UserForm
      onSubmit={handleSubmit}
      label={options.label}
      />

      <p>
        {options.message}
      </p>
    </section>
  )
}
