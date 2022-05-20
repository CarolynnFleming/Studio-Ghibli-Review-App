import React from 'react'
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
    const { loggedIn } = useAuth();
  return (
    <Route{...rest}
    render={({location}) =>
loggedIn ? (
    children
) : (
    <Redirect to={{
        pathname: '/login',
        state: { from: location },
    }}
    />
)}
/>
  )
}
