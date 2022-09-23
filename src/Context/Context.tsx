import React, {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';
import {CognitoUser} from '@aws-amplify/auth';
import {Auth, Hub} from 'aws-amplify';
import {HubCallback} from '@aws-amplify/core';

type UsertType = CognitoUser | null | undefined;

type AuthContextType = {
  user: UsertType;
  userId: string;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  userId: '',
});

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UsertType>(undefined);
  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };
  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener: HubCallback = data => {
      const {event} = data.payload;
      if (event == 'signOut') {
        setUser(null);
      }
      if (event == 'signIn') {
        checkUser();
      }
    };
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  return (
    <AuthContext.Provider value={{user, userId: user?.attributes?.sub}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
