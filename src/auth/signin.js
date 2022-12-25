import React,{useState,useEffect} from 'react';
import man from '../assets/images/dashboard/user.png';
import {Container,Row,Col,CardBody,Form,FormGroup,Input,Label,Button} from 'reactstrap'
import {firebase_app ,googleProvider,facebookProvider,twitterProvider,githubProvider } from '../data/config'
import {handleResponse} from  '../services/fack.backend'
import { useAuth0 } from '@auth0/auth0-react'
import { GooglePlus,Facebook,Twitter,Github,Login,LOGIN,YourName,Password,RememberMe,SignIn,SignUp,LoginWithAuth0,LoginWithJWT } from '../constant';
import { toast } from 'react-toastify';
import {useHistory} from 'react-router-dom'
import { BACKEND, BACKEND_API } from '../utils/backend';
import Axios from 'axios';
import { getPermissions } from '../utils/helperFunctions';

const Logins = (props) => {

  const history = useHistory();
  const {loginWithRedirect} = useAuth0()
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [loading,setLoading] = useState(false) 

  const [value, setValue] = useState(
      localStorage.getItem('profileURL' || man)
  );
    const [name, setName] = useState(
      localStorage.getItem('Name')
  );

  const [isuser, setisuser] = useState(localStorage.getItem("isUser"));

  const toggleform = () => {
    document.querySelector('.cont').classList.toggle('s--signup');
   }

  useEffect(() => {
      localStorage.setItem('profileURL', value);
      localStorage.setItem('Name', name);
      localStorage.setItem('isUser', isuser);
  }, [value,name,isuser]);

  const loginAuth = async (event) => {
    event.preventDefault();
    setLoading(true)
    try {
        await firebase_app.auth().signInWithEmailAndPassword(email, password).then(function () {
              setValue(man);
              setName("Elana Saint");
              setisuser("true")
              setTimeout(() => {
                history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
                window.location.reload()
              }, 200);
              
            
              })
              
    } catch (error) {
        setTimeout(() => {
            toast.error("Oppss.. The password is invalid or the user does not have a password.");
        }, 200);
    }
    
  }
  const googleAuth = async () => {
    try {
        firebase_app.auth().signInWithPopup(googleProvider).then(function (result) {
            setName(result.user.displayName);
            setValue(result.user.photoURL);
            setisuser("true")
            setTimeout(() => {
              history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
              window.location.reload()
            }, 200);
          
        });
    } catch (error) {
        setTimeout(() => {
            toast.error("Oppss.. The password is invalid or the user does not have a password.");
        }, 200);
    }
  };
  const facebookAuth = async () => {
    try {
        firebase_app.auth().signInWithPopup(facebookProvider).then(function (result) {
            setValue(result.user.photoURL);
            setName(result.user.displayName);
            setisuser("true")
            setTimeout(() => {
              history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
              window.location.reload()
            }, 200);
        });
    } catch (error) {
        setTimeout(() => {
            toast.error("Oppss.. The password is invalid or the user does not have a password.");
        }, 200);
    }
  }
  const twitterAuth = async () => {
    try {
        firebase_app.auth().signInWithPopup(twitterProvider).then(function (result) {
            setValue(result.user.photoURL);
            setName(result.user.displayName);
            setisuser("true")
            setTimeout(() => {
              history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
              window.location.reload()
            }, 200);
        });
    } catch (error) {
        setTimeout(() => {
            toast.error("Oppss.. The password is invalid or the user does not have a password.");
        }, 200);
    }
  }
  const githubAuth = async () => {
    try {
        firebase_app.auth().signInWithPopup(githubProvider).then(function (result) {
          
            setValue(result.user.photoURL);
            setName("Hardik Parmar");
            setisuser("true")
            setTimeout(() => {
              history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
              window.location.reload()
            }, 200);
        });
    } catch (error) {
        setTimeout(() => {
            toast.error("Oppss.. The password is invalid or the user does not have a password.");
        }, 200);
    }
  }
  const loginWithJwt = (email,password) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ({ email, password })
    };
    
   return Axios.post(`${BACKEND_API}/v1.0/login`,{ email, password }).then(response => {
console.log(response.data.data)
setValue(man);
setName(`${response.data.data.first_Name} ${response.data.data.last_Name}`);
 localStorage.setItem('token', response.data.data.token);
 localStorage.setItem('user', JSON.stringify(response.data.data));
 localStorage.setItem('permissions', JSON.stringify(getPermissions(response.data.data)));
window.location.href = `${process.env.PUBLIC_URL}/dashboard/default`
return response.data.data.token;
    }).catch(err => {
console.log(err.response)
    })
   
  }
  return (
      <div className="page-wrapper">
        
      <Container fluid={true} className="p-0">
        <div className="authentication-main m-0">
          <Row>
            <Col md="12">
              <div className="auth-innerright">
                <div className="authentication-box">
                  <CardBody className="h-100-d-center">
                    <div className="cont text-center b-light">
                      <div> 
                        <Form className="theme-form">
                          <h4>{LOGIN}</h4>
                          <h6>{"Enter your Username and Password"}</h6>
                          <FormGroup>
                            <Label className="col-form-label pt-0">{YourName}</Label>
                            <Input className="form-control" type="text" onChange={e => setEmail(e.target.value)} defaultValue={email} required=""/>
                          </FormGroup>
                          <FormGroup>
                            <Label className="col-form-label">{Password}</Label>
                            <Input className="form-control" type="password" onChange={e => setPassword(e.target.value)} defaultValue={password}  required=""/>
                          </FormGroup>
                          <div className="checkbox p-0">
                            <Input id="checkbox1" type="checkbox"/>
                            <Label for="checkbox1">{RememberMe}</Label>
                          </div>
                          <FormGroup className="form-row mt-3 mb-0">
                            {loading ?
                            <Button color="primary btn-block" disabled={loading}>
                              {"LOADING..."}
                            </Button>
                            :
                            <>
                            <Button color="primary btn-block"   onClick={() => loginWithJwt(email,password)}>
                                 {LOGIN}
                             </Button>
                            {/* <Button color="primary btn-block"   onClick={(event) => loginAuth(event)}>
                                 {LOGIN}
                             </Button> */}
                            </>
                            
                            }
                          </FormGroup>
                          {/* <div className="social mt-3">
                            <Row form className="btn-showcase">
                              <Col md="6" sm="6">
                                <Button color="secondary btn-block" onClick={loginWithRedirect}>
                                    {LoginWithAuth0}
                                </Button>
                              </Col>
                              <Col md="6" sm="6">
                                <Button color="success btn-block" onClick={() => loginWithJwt(email,password)}>
                                    {LoginWithJWT}
                                </Button>
                              </Col>
                            </Row>
                          </div>  */}
                          {/* <div className="login-divider"></div> */}
                          {/* <div className="social mt-3">
                            <Row form className="btn-showcase">
                              <Col md="3" sm="6">
                                <Button color="social-btn btn-fb" onClick={facebookAuth}>{Facebook}</Button>
                              </Col>
                              <Col md="3" sm="6">
                                <Button color="social-btn btn-twitter" onClick={twitterAuth}>{Twitter}</Button>
                              </Col>
                              <Col md="3" sm="6">
                                <Button color="social-btn btn-google" onClick={googleAuth}>{GooglePlus} </Button>
                              </Col>
                              <Col md="3" sm="6">
                                <Button color="social-btn btn-github btn-block" onClick={githubAuth} >{Github}</Button>
                              </Col>
                            </Row>
                          </div> */}
                        </Form>
                      </div>
                      <div className="sub-cont">
                        <div className="img">
                          <div className="img__text m--up">
                            <h2>{"New User?"}</h2>
                            <p>{"Sign up and discover great amount of new opportunities!"}</p>
                          </div>
                          <div className="img__text m--in">
                            <h2>{"One of us?"}</h2>
                            <p>{"If you already has an account, just sign in. We've missed you!"}</p>
                          </div>
                          <div className="img__btn" onClick={toggleform}><span className="m--up">{SignUp}</span><span className="m--in">{SignIn}</span></div>
                        </div>
                        <div>
                          <Form className="theme-form">
                          <h4 className="text-center">{"NEW USER"}</h4>
                          <h6 className="text-center">{"Enter your Username and Password For Signup"}</h6>
                          <Row form>
                            <Col md="12">
                              <FormGroup>
                                <Input className="form-control" type="text" placeholder="First Name"/>
                              </FormGroup>
                            </Col>
                            <Col md="12">
                              <FormGroup>
                                <Input className="form-control" type="text" placeholder="Last Name"/>
                              </FormGroup>
                            </Col>
                          </Row>
                          <FormGroup>
                            <Input className="form-control" type="text" placeholder="User Name"/>
                          </FormGroup>
                          <FormGroup>
                            <Input className="form-control" type="password" placeholder="Password"/>
                          </FormGroup>
                          <Row form>
                            <Col sm="4">
                              <Button color="primary" type="submit">{SignUp}</Button>
                            </Col>
                            <Col sm="8">
                              <div className="text-left mt-2 m-l-20">{"Are you already user? "} 
                                <a className="btn-link text-capitalize" href="login.html">{Login}</a>
                              </div>
                            </Col>
                          </Row>
                          <div className="form-divider"></div>
                          <div className="social mt-3">
                            <div className="form-row btn-showcase">
                              <Col sm="4">
                                <Button color="social-btn btn-fb">{Facebook}</Button>
                              </Col>
                              <Col sm="4">
                                <Button color="social-btn btn-twitter">{Twitter}</Button>
                              </Col>
                              <Col sm="4">
                                <Button color="social-btn btn-google">{GooglePlus}</Button>
                              </Col>
                            </div>
                          </div>
                        </Form>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        </Container>
      </div>
  );
}

export default Logins;