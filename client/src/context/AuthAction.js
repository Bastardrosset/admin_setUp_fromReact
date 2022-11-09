export const loginStart = (userCredentials) => ({
    type:"LOGIN_START",
});

export const loginSuccess = (user) => ({
    type:"LOGIN_SUCCESS",
    playload: user,
});

export const loginFailure = (error) => ({
    type:"LOGIN_FAILURE",
    playload: error
});