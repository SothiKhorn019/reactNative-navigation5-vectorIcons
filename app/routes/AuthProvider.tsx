import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage } from 'react-native';


export const AuthContext = React.createContext({});

interface AuthProviderProps {

}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState(null);
    return (<AuthContext.Provider value={{
        user,
        login: () => {
            const fakeUser = { username: 'bob' };
            setUser(fakeUser);
            AsyncStorage.setItem("user", JSON.stringify(fakeUser));
        },

        logout: () => { },


    }}>{children}
    </AuthContext.Provider>)
}




