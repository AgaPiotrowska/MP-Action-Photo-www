const loginAction = ({isLogged}) => {
    return {
        type: "SIGN_IN",
        payload: isLogged
    }
};

export default loginAction;