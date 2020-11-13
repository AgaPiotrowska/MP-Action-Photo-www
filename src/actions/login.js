const loginAction = ({token}) => {
    return {
        type: "SIGN_IN",
        payload: token
    }
};

export default loginAction;