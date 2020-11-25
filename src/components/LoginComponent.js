import React, {useState}  from "react";
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

        const requestOptions = {
            method: 'POST',
            headers: { 'Authorization': 'Basic '+btoa(login+":"+password)}
        };

        fetch('https://api.mpactionphoto.pl/login', requestOptions)
            .then(data => {
                dispatch(loginAction({isLogged: true}));
                history.push("/");
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