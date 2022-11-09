import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START"});
    try {
        const res = await axios.post('auth/login', userCredential);
        dispatch({type: "LOGIN_SUCCESS", playload: res.data});
    } catch (error) {
        dispatch({type: "LOGIN_FAILURE", playload: error});
    };
};