import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './context/UserContext';
import { ReviewsProvider } from './context/ReviewsContext';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import ViewProfile from './views/Profile/ViewProfile';
import EditProfile from './views/Profile/ViewProfile';
import ViewReviews from './views/Reviews/ViewReviews';
import ViewReview from  './views/Reviews/ViewReview';
import EditReview from './views/Reviews/EditReview';
import AddReview from './views/Reviews/AddReview';
import CopyReview from './views/Reviews/CopyReview';
import Header from './components/Layout/Header'
;
export default function App() {
  return(
    <>
    <Toaster />
    <UserProvider>
      <ReviewsProvider>
        <Header />
        <Switch>
          <Route path='/login'>
            <Auth />
          </Route>
          <Route path="/register">
            <Auth signingUp />
          </Route>
          <PrivateRoute path="/profile/edit">
            <EditProfile/>
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <ViewProfile/>
          </PrivateRoute>
          <PrivateRoute exact={true} path="/reviews">
            <ViewReviews/>
          </PrivateRoute>
          <PrivateRoute exact={true} path="/review/add">
            <AddReview/>
          </PrivateRoute>
          <PrivateRoute exact={true} path="/reviews/:id">
            <ViewReview/>
          </PrivateRoute>
          <PrivateRoute exact={true} path="/reviews/:id/edit">
            <EditReview/>
          </PrivateRoute>
          <PrivateRoute exact={true} path="/reviews/:id/copt">
            <CopyReview/>
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ReviewsProvider>
    </UserProvider>
    </>
  );
}
