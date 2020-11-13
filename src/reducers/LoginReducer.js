const initialState = {
    isLogged: false,
    token: null
};

const LoginReducer = (state= initialState, action) => {
    switch (action.type) {
        case "SIGN_IN" :
            return {
            ...state,
                isLogged: true,
                token: action.payload
    }
        default:
        return {
            ...state
        };
    }
};

export default LoginReducer;