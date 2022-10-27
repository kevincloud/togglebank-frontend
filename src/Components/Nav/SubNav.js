import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { LDContext } from '../../Providers/LaunchDarkly/context.js';
import { useContext } from 'react';
import { checkCryptoPageLDFlag, checkViewMode } from '../../Utils/utils.js';

const baseClasses = "relative animated-underline";
const addActiveClass = activeState => baseClasses + (activeState.isActive ? " active-link" : "")

function SubNav() {

  const flags = useContext(LDContext);
  let navigate = useNavigate();
  var showCrypto = checkCryptoPageLDFlag(flags) ? "mr-12" : "hidden";

  if(showCrypto === 'hidden' && window.location.pathname === '/crypto'){
    navigate("/accounts", { replace: true });
  }

  return (
    <nav role="navigation" aria-labelledby="label" className="bg-blue-dark">
      <h2 span="true" id="label" className="hidden">Authenticated pages</h2>
      <ul className="flex items max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-xl text-white-default">
        <li className="mr-12">
          <NavLink
            exact="true" to="/accounts"
            className={addActiveClass}
          >
            Accounts
          </NavLink>
        </li>
        <li className={showCrypto}>
          <NavLink
            exact="true" to="/crypto"
            className={addActiveClass}
          >
            Crypto
          </NavLink>
        </li>
        <li className="mr-12">
          <NavLink
            exact="true" to="/profile"
            className={addActiveClass}
          >
            Profile
          </NavLink>
        </li>
       
      </ul>

    </nav>
  );
}

export default SubNav;
