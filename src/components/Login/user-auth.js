import React, { useState, createContext, useContext, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Route, Redirect } from 'react-router-dom'

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthContextProvider = props => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}> {props.children} </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

const getUser = user => {
    const { displayName, email, photoURL } = user;
    return { name: displayName, email, photo: photoURL };
}

const Auth = () => {
    const [user, setUser] = useState(null);
    const provider = new firebase.auth.GoogleAuthProvider();
    const signInWithGoogle = () => {
        return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const signedInUser = getUser(res.user);
            setUser(signedInUser);
            return res.user;
        })
        .catch(err => {
            console.log(err);
            setUser(null);
            return err.message;
        })
    }
    const signOut = () => {
        return firebase.auth().signOut().then(function () {
            setUser(null);
            return true;
        }).catch(function (error) {
            return false;
        });
    }
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                const currUser = getUser(user);
                setUser(currUser);
            }else{
                
            }
        })
    }, [])
     return {
        user,
        signInWithGoogle,
        signOut,
    }
}

export default Auth;