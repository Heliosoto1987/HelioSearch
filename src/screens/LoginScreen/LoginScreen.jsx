//vendor
import React, { useContext, useEffect } from 'react';
//hooks
import { useForm } from '../../hooks/useForm';
//firebase
import { firebase, googleAuthProvider } from '../../firebase/firebase-config';
//context
import { UserContext } from '../../createContex/createContex';
//types
import { types } from '../../types/types';


export const LoginScreen = (props) => {
    const { state, dispatch } = useContext(UserContext)
    const [formValues, handleInputChange] = useForm({
        email: '',
        password: '',
    });


    const handleLogin = () => {

    }

    const handleGoogleLogin = async () => {
        try {
            const resp = await firebase.auth().signInWithPopup(googleAuthProvider)
            const { user } = resp
            const action = {
                types: types.login,
                payload: {
                    name: user.displayName,
                    email: user.email,
                    uid: user.uid
                }
            }
            return dispatch(action)

        } catch (error) {
            alert('Do you need account on google?')
        }
    }

    useEffect(() => {
        if (state.name?.length > 1) {
            props.history.push('/searchy')
        }
    }, [state, props]);

    const { email, password } = formValues;

    return (
        <div className="loginscreen">
            <div className="loginscreen__img">
                <img src="/HelioSearch/assets/logo.png" alt="Img Logo"></img>
            </div>
            <h2 className="loginscreen__title">Welcome</h2>
            <h2 className="loginscreen__title">Login with your email and password, or with your google account</h2>
            <form
                onSubmit={handleLogin}
                className="loginscreen__form"
            >
                <label>Email</label>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />

                {
                    <button
                        className="btn loginscreen__btn"
                        type="submit"
                    // disabled={ loading }

                    >
                        Login
                    </button>
                }

                <div className="login__social-networks">
                    <p>Login with social networks</p>
                    <div className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div
                            className="google-icon-wrapper"
                            onClick={handleLogin}
                        >
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

            </form>
        </div>
    )
}
