import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE={ 
    user: {
        _id : "63681b6baab2e7895b994b5e",
        username: "xavier",
        email: "xavier@outlook.fr",
        profilPicture: "noAvatar.png",
        coverPicture: "noBanner.jpg",
        followers: [],
        followings: [],
    },
    //JSON.parse(localStorage.getItem('user')) || null
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user]);

    return (
        <AuthContext.Provider 
        value = {{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}>
            { children }
        </AuthContext.Provider>
    )
}