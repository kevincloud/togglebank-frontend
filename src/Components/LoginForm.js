import Input from '../Components/Input.js';
import Button from '../Components/Button.js';
import TextLink from '../Components/TextLink.js';
import { LDContext } from '../Providers/LaunchDarkly/context.js';
import { useContext } from 'react';
import { checkRegisterPageLDFlag } from '../Utils/utils.js';

function LoginForm(props) {

  const flags = useContext(LDContext);
  var showRegister = checkRegisterPageLDFlag(flags) ? <TextLink
    text="New user? Create an account"
    href="/register"
    classOverride="mt-1.5"
    id="home-sign-up-link"
    handleClick={props.onRegister}
  /> : "";

  return (
    <div className="px-5 py-5 w-72 rounded-xl bg-white-darker">
      <div className="mb-4 text-center w-full">
        <span className="text-2xl welcome-home-text">Welcome!</span>
      </div>
      <Input
        for="username"
        type="text"
        id="username"
        placeholder="email@domain.com"
        onChange={props.onChange}
      />
      <Input
        for="password"
        type="password"
        id="password"
        placeholder="password"
        onChange={props.onChange}
      />
      <div className="flex flex-col justify-start items-start">
        <Button
          text="Sign In"
          type="submit"
          classOverride="bg-blue-default"
          handleClick={props.onSubmit}
        />
        <div className="mt-3">
          <TextLink
            text="Forgot Password?"
            href="/forgot-password"
            id="home-forgot-password-link"
          />
          {showRegister}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
