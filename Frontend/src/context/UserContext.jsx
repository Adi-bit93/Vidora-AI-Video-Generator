import { createContext, useContext, useReducer, useEffect } from "react";

const initialState = {
    isAuthenticated: false,
    user: null, // {name, email, avatar}
    token: null
};
const UserContext = createContext();
function userReducer(state, action) {
    switch (action.type) { 
        case "LOGIN":
            return {
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            return {
                isAuthenticated: false,
                user: null,
                token: null
            };
        case "UPDATE_USER":
            return {
                ...state,
                user: {...state.user, ...action.payload}
            };
        default:
            return state;
    }
}

// CONTEXT
export function UserProvider({children}){
    const [state, dispatch] = useReducer(userReducer, initialState, () => {
        // load from localStorage
        const saved = localStorage.getItem("cine_user");
        return saved ? JSON.parse(saved) : initialState
    })

    //Save to localStorage
    useEffect(() => {
        localStorage.setItem("cine_user", JSON.stringify(state));
    }, [state]);

    // Helper functions
    const login = (userData) => {
        dispatch({
            type: "LOGIN",
            payload: {
                user: userData.user,
                token: userData.token || "temp-token",
        }
        });
    };

    const logout = () => {
        dispatch({ type: "LOGOUT"});
    };

    const updateUser = (data) => {
        dispatch({
            type: "UPDATE_USER",
            payload: data
        });
    };

    return (
        <UserContext.Provider value={{...state, login, logout, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser(){
    return useContext(UserContext)
}
