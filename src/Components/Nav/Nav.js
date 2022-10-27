import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Auth/AuthContext";
import BaseNav from './BaseNav';
import AuthenticatedNav from './AuthenticatedNav';

function Nav() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    auth.signout(() => navigate('/'))
  };

  if (!auth.user) {
    return <BaseNav/>;
  }

  return <AuthenticatedNav user={auth.user} fn={logout}/>;
}

export default Nav;
