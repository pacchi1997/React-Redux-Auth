import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';
import classes from './Header.module.css';

const Header = () => {

const isLogout = useSelector(state => state.authenication.isAuthenticated);
const dispatch = useDispatch();
const logoutHandler = (event) =>{
event.preventDefault();
dispatch(authActions.logout());
}
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
    { isLogout ? <ul>
          <li>
            <a href='#'>My Products</a>
          </li>
          <li>
            <a href='#'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul> : ""}
      </nav>
    </header>
  );
};

export default Header;
