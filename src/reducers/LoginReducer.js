const initialState = {
    isLogged: false
};

const LoginReducer = (state= initialState, action) => {
    switch (action.type) {
        case "SIGN_IN" :
            return {
            ...state,
                isLogged: action.payload
    }
        default:
        return {
            ...state
        };
    }
};

export default LoginReducer;