import Button from "../Button";
import SubNav from "./SubNav";
import moneyIcon from '../../img/money-icon.svg';

function AuthenticatedNav({ user, fn }) {
  return (
    <>
      <nav className="bg-black-default text-white-default shadow-xl sticky top-0 z-50 h-16">
          <div className="max-w-7xl m-auto relative flex items-center justify-between h-16 px-5">
              <span className="text-lg logged-in-text">Welcome, {user}</span>
              <img src={moneyIcon} alt="" className="h-9"></img>
              <Button text="Sign Out" classOverride="bg-orange-default text-white-default" handleClick={fn}/>
          </div>
      </nav>
      <SubNav/>
    </>
  )
}

export default AuthenticatedNav;
