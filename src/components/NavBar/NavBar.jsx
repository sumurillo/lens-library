import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  let link = "";
  if (user.userType === 'photographer') {
    link = <Link to="/:id">My Business</Link>
  } else {
    link = <Link to="/add-review">Add Review</Link>
  }
  
  return (
    <nav>
      <Link to="/">Photographers</Link>
      &nbsp; | &nbsp;
      { link }
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}