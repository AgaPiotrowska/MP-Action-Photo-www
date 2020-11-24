import React, {useState}  from "react";
import {AuthenticationDetails, CognitoUser, CognitoUserPool, CookieStorage} from 'amazon-cognito-identity-js';
import {useSelector, useDispatch} from "react-redux";
import loginAction from "../actions/login";
import {useHistory} from "react-router-dom";

const LoginComponent = () => {

    const history=useHistory();

    const isLogged = useSelector((state)=> state.isLogged);
    const dispatch = useDispatch();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    function authenticate(login, password) {
        const AD = new AuthenticationDetails(
            {
                Username: login,
                Password: password
            }
        );

        const PC = {
            UserPoolId: 'us-east-2_mLfFLjeO2',
            ClientId: '53bq9gltdmmbk8h1to6g68emhg',
            Storage: new CookieStorage({domain: "localhost:3000"})
        };
        const userPool = new CognitoUserPool(PC);

        const CU = new CognitoUser(
            {
                Username: login,
                Pool: userPool,
                Storage: new CookieStorage({domain: "localhost:3000"})
            });

        CU.authenticateUser(AD,
            {
                onSuccess: function (result) {
                    const token = result.idToken.jwtToken;

                    dispatch(loginAction({token}));
                    history.push("/");
                },
                onFailure: function (err) {
                    console.log(err);
                },
            });

    }

    return (
        <div className="login-form">
            <input type="text" placeholder="login" onChange={(event) => setLogin(event.target.value)} ></input>
            <input type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} ></input>
            <button className="button-upload" type="submit" onClick={() => authenticate(login, password)}>LOGIN</button>
        </div>
    )
};

export default LoginComponent;