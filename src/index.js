import { Auth0Provider } from '@auth0/auth0-react';
import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import App from './components/app';
import ScrollToTop from "./components/common/ScrollToTop";
import { auth0 } from './data/config';
import ConfigDB from './data/customizer/config';
import './index.scss';
import { routes } from './route/ContentRoutes';
import { authHeader, configureFakeBackend, handleResponse } from './services/fack.backend';
import * as serviceWorker from './serviceWorker';
import store from './store/index';

// Signin page
import Signin from './auth/signin';

// Error page 
import Error400 from "./pages/errors/Error400";
import Error401 from "./pages/errors/Error401";
import Error403 from "./pages/errors/Error403";
import Error404 from "./pages/errors/Error404";
import Error500 from "./pages/errors/Error500";
import Error503 from "./pages/errors/Error503";


// Authentication
import Forgetpwd from "./pages/authentication/Forgetpwd";
import Login from "./pages/authentication/Login";
import LoginWithBgImage from "./pages/authentication/LoginWithBgImage";
import LoginWithBgVideo from "./pages/authentication/LoginWithBgVideo";
import Register from "./pages/authentication/Register";
import RegisterWithBgImage from "./pages/authentication/RegisterWithBgImage";
import RegisterWithBgVideo from "./pages/authentication/RegisterWithBgVideo";
import Resetpwd from "./pages/authentication/Resetpwd";
import UnlockUser from "./pages/authentication/UnlockUser";

// Comming soon
import Comingsoon from "./pages/comingSoon/Comingsoon";
import ComingsoonImg from "./pages/comingSoon/ComingsoonImg";
import ComingsoonVideo from "./pages/comingSoon/ComingsoonVideo";

// Maintenance
import Maintenance from "./pages/Maintenance";

import Callback from './auth/callback';

import SignUp from './auth/SignUp';
import { apiClient } from './utils/apiClient';
import { BACKEND_API } from './utils/backend';
import { getPermissions } from './utils/helperFunctions';

// setup fake backend
configureFakeBackend();


const Root = (props) => {
    const [anim, setAnim] = useState("");
    const animation = localStorage.getItem("animation") || ConfigDB.data.router_animation || 'fade'
    const abortController = new AbortController();
    const [currentUser, setCurrentUser] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [jwt_token, set_jwt_token] = useState(localStorage.getItem('token'))

    useEffect(() => {
        console.log(currentUser, authenticated)

    }, [])

    useEffect(() => {
        const requestOptions = { method: 'GET', headers: authHeader() };
        fetch('/users', requestOptions).then(handleResponse)
        const color = localStorage.getItem('color')
        setAnim(animation)

        apiClient().get(`${BACKEND_API}/v1.0/user`)
            .then(response => {
                console.log(response.data)
                setCurrentUser(response.data)
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data));
                localStorage.setItem('permissions', JSON.stringify(getPermissions(response.data)));
            })
            .catch(err => {
                console.log(err.response)
                localStorage.clear()
                set_jwt_token("")
            })

        //  firebase_app.auth().onAuthStateChanged(setCurrentUser);




        setAuthenticated(JSON.parse(localStorage.getItem("authenticated")))
        console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
        console.disableYellowBox = true;
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/${color}.css`);

        return function cleanup() {
            abortController.abort();
        }
        // eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            <Auth0Provider domain={auth0.domain} clientId={auth0.clientId} redirectUri={auth0.redirectUri}>
                <Provider store={store}>
                    <BrowserRouter basename={`/`}>
                        <ScrollToTop />
                        <Switch>

                            {/* AUTHENTICATION ROUTES  */}
                            <Route path={`${process.env.PUBLIC_URL}/login`} component={Signin} />
                            <Route path={`${process.env.PUBLIC_URL}/registration`} component={SignUp} />

                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error400`} component={Error400}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error401`} component={Error401}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error403`} component={Error403}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error404`} component={Error404}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/Error500`} component={Error500}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error503`} component={Error503}></Route>

                            <Route path={`${process.env.PUBLIC_URL}/pages/maintenance`} component={Maintenance}></Route>

                            <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/loginWithBgImg`} component={LoginWithBgImage}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/loginWithVideo`} component={LoginWithBgVideo}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/signup`} component={Register}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/signupWithImg`} component={RegisterWithBgImage}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/signupWithVideo`} component={RegisterWithBgVideo}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/forgetPwd`} component={Forgetpwd}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/unlockUser`} component={UnlockUser}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/resetPwd`} component={Resetpwd}></Route>

                            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoon`} component={Comingsoon}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoonImg`} component={ComingsoonImg}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoonVideo`} component={ComingsoonVideo}></Route>

                            <Route path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback />} />
                            {console.log("jwt_token", jwt_token)}
                            {jwt_token ?
                                <App>

                                    <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                                        return (<Redirect to={`${process.env.PUBLIC_URL}/dashboard/default`} />)
                                    }} />

                                    <TransitionGroup>
                                        {routes.map(({ path, Component }) => (
                                            <Route key={path} exact path={`${process.env.PUBLIC_URL}${path}`}>
                                                {({ match }) => (
                                                    <CSSTransition
                                                        in={match != null}
                                                        timeout={100}
                                                        classNames={anim}
                                                        unmountOnExit
                                                    >
                                                        <div><Component /></div>
                                                    </CSSTransition>
                                                )}
                                            </Route>
                                        ))}
                                    </TransitionGroup>
                                </App>
                                :
                                <Redirect to={`${process.env.PUBLIC_URL}/login`} />
                            }
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </Auth0Provider>
        </Fragment>
    )
}
ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
