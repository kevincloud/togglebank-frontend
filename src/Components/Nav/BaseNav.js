import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import { LDContext } from '../../Providers/LaunchDarkly/context.js';
import { useContext } from 'react';
import { checkRegisterPageLDFlag } from '../../Utils/utils.js';

function BaseNav() {

  const flags = useContext(LDContext);
  let navigate = useNavigate();
  var showRegister = checkRegisterPageLDFlag(flags) ? <Link className="text-white-default text-white px-3 py-2 rounded-md text-sm font-medium" to="/register">Register</Link> : "";

  if (showRegister === '' && window.location.pathname === '/register') {
    navigate("/", { replace: false });
  }

  return (
    <nav className="bg-blue-dark shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center flex-shrink-0 text-white-default mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-xl tracking-tight">Toggle Bank</span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link className="text-white-default text-white px-3 py-2 rounded-md text-sm font-medium" to="/">Home</Link>
                {showRegister}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>
          <a href="/login" className="text-white-default hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default BaseNav;
