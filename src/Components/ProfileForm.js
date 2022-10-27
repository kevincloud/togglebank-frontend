import React from "react";
import InputProfile from './InputProfile.js';
import Button from './Button.js';
import Checkbox from './Checkbox.js';
import Dropdown from "./Dropdown.js";

function ProfileForm(props) {
  const USStates = [
    { id: 1, name: "AL", unavailable: false },
    { id: 2, name: "AK", unavailable: false },
    { id: 3, name: "AS", unavailable: false },
    { id: 4, name: "AZ", unavailable: false },
    { id: 5, name: "AR", unavailable: false },
    { id: 6, name: "CA", unavailable: false },
    { id: 7, name: "CO", unavailable: false },
    { id: 8, name: "CT", unavailable: false },
    { id: 9, name: "DE", unavailable: false },
    { id: 10, name: "DC", unavailable: false },
    { id: 11, name: "FM", unavailable: false },
    { id: 12, name: "FL", unavailable: false },
    { id: 13, name: "GA", unavailable: false },
    { id: 14, name: "GU", unavailable: false },
    { id: 15, name: "HI", unavailable: false },
    { id: 16, name: "ID", unavailable: false },
    { id: 17, name: "IL", unavailable: false },
    { id: 18, name: "IN", unavailable: false },
    { id: 19, name: "IA", unavailable: false },
    { id: 20, name: "KS", unavailable: false },
    { id: 21, name: "KY", unavailable: false },
    { id: 22, name: "LA", unavailable: false },
    { id: 23, name: "ME", unavailable: false },
    { id: 24, name: "MH", unavailable: false },
    { id: 25, name: "MD", unavailable: false },
    { id: 26, name: "MA", unavailable: false },
    { id: 27, name: "MI", unavailable: false },
    { id: 28, name: "MN", unavailable: false },
    { id: 29, name: "MS", unavailable: false },
    { id: 30, name: "MO", unavailable: false },
    { id: 31, name: "MT", unavailable: false },
    { id: 32, name: "NE", unavailable: false },
    { id: 33, name: "NV", unavailable: false },
    { id: 34, name: "NH", unavailable: false },
    { id: 35, name: "NJ", unavailable: false },
    { id: 36, name: "NM", unavailable: false },
    { id: 37, name: "NY", unavailable: false },
    { id: 38, name: "NC", unavailable: false },
    { id: 39, name: "ND", unavailable: false },
    { id: 40, name: "MP", unavailable: false },
    { id: 41, name: "OH", unavailable: false },
    { id: 42, name: "OK", unavailable: false },
    { id: 43, name: "OR", unavailable: false },
    { id: 44, name: "PW", unavailable: false },
    { id: 45, name: "PA", unavailable: false },
    { id: 46, name: "PR", unavailable: false },
    { id: 47, name: "RI", unavailable: false },
    { id: 48, name: "SC", unavailable: false },
    { id: 49, name: "SD", unavailable: false },
    { id: 50, name: "TN", unavailable: false },
    { id: 51, name: "TX", unavailable: false },
    { id: 52, name: "UT", unavailable: false },
    { id: 53, name: "VT", unavailable: false },
    { id: 54, name: "VI", unavailable: false },
    { id: 55, name: "VA", unavailable: false },
    { id: 56, name: "WA", unavailable: false },
    { id: 57, name: "WV", unavailable: false },
    { id: 58, name: "WI", unavailable: false },
    { id: 59, name: "WY", unavailable: false }
  ];

  return (
    <>
      <div className="w-110 bg-white-darker rounded-xl flex flex-col justify-center items-center shadow-2xl">
        <span className="text-3xl text-blue-dark text-center mt-20">Profile Details</span>
        <form className="p-20 pt-10 w-98 flex flex-col">
          <InputProfile
            for="name"
            type="text"
            id="name"
            placeholder="Name"
            value={props.userObject.name}
            onChange={props.onChange}
            />
          <InputProfile
            for="username"
            type="text"
            id="username"
            placeholder="Email"
            value={props.userObject.username}
            onChange={props.onChange}
            />
          <InputProfile
            for="phoneNumber"
            type="tel"
            id="phonenumber"
            placeholder="Phone Number"
            value={props.userObject.phonenumber}
            onChange={props.onChange}
            />
          <Dropdown 
            for="state"
            id="state"
            text="Select state"
            selectedOption={props.userObject.state}
            options={USStates}
            onChange={props.onChange}
          />
          <Checkbox 
            id="beta"
            text="Opt into our Beta Program"
            type="checkbox"
            checked={props.userObject.beta}
            onChange={props.toggleBetaCheckboxValue}
          />
          <Button
            classOverride="bg-white-darker text-orange-default px-3 border-orange-default border-2 w-1/2"
            type="button"
            text="Save"
            handleClick={props.onSubmit}
          />
        </form>
      </div>
    </>
  );
}

export default ProfileForm;

