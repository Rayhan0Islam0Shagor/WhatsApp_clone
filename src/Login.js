import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css'
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

const Login = () => {
    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(err => alert(err.message));
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" />

                <div className="login_text">
                    <h1 style={{ textTransform: "uppercase" }}>Sign in to WhatsApp</h1>
                </div>

                <Button type="submit" onClick={signIn}
                    style={{
                        "marginTop": "50px", "textDecoration": "inherit",
                        "backgroundColor": "#2BB641", "color": "white"
                    }}
                >
                    Sign In With Google
                </Button>
            </div>
        </div>
    );
};

export default Login;