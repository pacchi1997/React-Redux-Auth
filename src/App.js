import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const loggedIn = useSelector(state => state.authenication.isAuthenticated);
  return (
    <>
    <Header />
    {!loggedIn ? <Auth /> : <UserProfile />}

    </>
  );
}

export default App;
