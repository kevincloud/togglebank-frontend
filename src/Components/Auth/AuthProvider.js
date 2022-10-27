import React, { useState, useEffect } from 'react';
import ls from 'local-storage';
import { fakeAuthProvider } from '../../Utils/auth';
import AuthContext from './AuthContext';
import { clearLocalStorage } from '../../Utils/utils';

function AuthProvider({ defaultUser, children }) {
  let [user, setUser] = useState(defaultUser);
  let [id, setId] = useState(0);

  let signin = (newUser, userId, callback) => {
    clearLocalStorage();

    ls.set('LD_User', newUser);
    ls.set('LD_User_ID', userId);

    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      setId(userId);
      callback();
    });
  };

  let signout = (callback) => {
    clearLocalStorage();

    return fakeAuthProvider.signout(() => {
      setUser(null);
      setId(0);
      callback();
    });
  };

  let value = { user, id, signin, signout };

  useEffect(() => {
    if (!id || !user) {
      const loggedInUser = ls.get('LD_User');
      const loggedInUserID = ls.get('LD_User_ID');
      if (loggedInUser && loggedInUserID) {
        signin(loggedInUser, loggedInUserID, () => null);
      }
    }
  }, [id, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider;
