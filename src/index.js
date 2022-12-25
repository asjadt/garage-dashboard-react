import React, { Fragment,useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {firebase_app,auth0} from './data/config';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react'
import store from './store/index'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import App from './components/app';
import {routes} from './route/ContentRoutes'
import ScrollToTop from "./components/common/ScrollToTop";
import ConfigDB from './data/customizer/config'
import {configureFakeBackend ,authHeader, handleResponse} from './services/fack.backend'

// Signin page
import Signin from './auth/signin'

// Error page 
import Error400 from "./pages/errors/Error400";
import Error401 from "./pages/errors/Error401";
import Error403 from "./pages/errors/Error403";
import Error404 from "./pages/errors/Error404";
import Error500 from "./pages/errors/Error500";
import Error503 from "./pages/errors/Error503";


// Authentication
import Login from "./pages/authentication/Login";
import LoginWithBgImage from "./pages/authentication/LoginWithBgImage";
import LoginWithBgVideo from "./pages/authentication/LoginWithBgVideo";
import Register from "./pages/authentication/Register";
import RegisterWithBgImage from "./pages/authentication/RegisterWithBgImage";
import RegisterWithBgVideo from "./pages/authentication/RegisterWithBgVideo";
import UnlockUser from "./pages/authentication/UnlockUser";
import Forgetpwd from "./pages/authentication/Forgetpwd";
import Resetpwd from "./pages/authentication/Resetpwd";

// Comming soon
import Comingsoon from "./pages/comingSoon/Comingsoon";
import ComingsoonImg from "./pages/comingSoon/ComingsoonImg";
import ComingsoonVideo from "./pages/comingSoon/ComingsoonVideo";

// Maintenance
import Maintenance from "./pages/Maintenance";

import Callback from './auth/callback'
import { apiClient } from './utils/apiClient';
import { BACKEND_API } from './utils/backend';

// setup fake backend
configureFakeBackend();


const Root = (props) =>  {
    const [anim, setAnim] = useState("");
    const animation = localStorage.getItem("animation") || ConfigDB.data.router_animation || 'fade'
    const abortController = new AbortController();
    const [currentUser, setCurrentUser] = useState(false);
    const [authenticated,setAuthenticated] = useState(false);
    const jwt_token = localStorage.getItem('token');

    useEffect(() => {

        const requestOptions = { method: 'GET', headers: authHeader() };
        fetch('/users', requestOptions).then(handleResponse)
        const color = localStorage.getItem('color')
        setAnim(animation)

        apiClient().get(`${BACKEND_API}/v1.0/user`)
        .then(response => {
            console.log(response.data)
            setCurrentUser(response.data)
        })
        .catch(err => {
            console.log(err.response)
            localStorage.clear()
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
    return( 
        <Fragment>
            <Auth0Provider domain={auth0.domain} clientId={auth0.clientId} redirectUri={auth0.redirectUri}>
            <Provider store={store}>
                <BrowserRouter basename={`/`}>
                <ScrollToTop />
                  <Switch>
                      <Route  path={`${process.env.PUBLIC_URL}/login`} component={Signin} />
                      <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error400`} component={Error400}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error401`} component={Error401}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error403`} component={Error403}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error404`} component={Error404}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/errors/Error500`} component={Error500}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/errors/error503`} component={Error503}></Route>

                      <Route  path={`${process.env.PUBLIC_URL}/pages/maintenance`} component={Maintenance}></Route>

                      <Route  path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/loginWithBgImg`} component={LoginWithBgImage}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/loginWithVideo`} component={LoginWithBgVideo}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/signup`} component={Register}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/signupWithImg`} component={RegisterWithBgImage}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/signupWithVideo`} component={RegisterWithBgVideo}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/forgetPwd`} component={Forgetpwd}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/unlockUser`} component={UnlockUser}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/resetPwd`} component={Resetpwd}></Route>

                      <Route  path={`${process.env.PUBLIC_URL}/pages/comingsoon`} component={Comingsoon}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/comingsoonImg`} component={ComingsoonImg}></Route>
                      <Route  path={`${process.env.PUBLIC_URL}/pages/comingsoonVideo`} component={ComingsoonVideo}></Route>
                        
                      <Route  path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback/>} />
               {console.log("jwt_token",jwt_token)}
                      {jwt_token ?
                            <App>
                       
                            <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                                    return (<Redirect to={`${process.env.PUBLIC_URL}/dashboard/default`} />)
                                }} />
                            
                            <TransitionGroup>
                            {routes.map(({ path, Component }) => (
                                <Route key={path} exact   path={`${process.env.PUBLIC_URL}${path}`}>
                                    {({ match }) => (
                                        <CSSTransition 
                                        in={match != null}
                                        timeout={100}
                                        classNames={anim} 
                                        unmountOnExit
                                        >
                                        <div><Component/></div>
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
ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.unregister();
