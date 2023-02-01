import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import man from '../assets/images/dashboard/user.png';
import { LOGIN, Password, RememberMe, YourName } from '../constant';
import { facebookProvider, firebase_app, githubProvider, googleProvider, twitterProvider } from '../data/config';
import { BACKEND_API } from '../utils/backend';
import { getPermissions } from '../utils/helperFunctions';

const Logins = (props) => {

  const history = useHistory();
  const { loginWithRedirect } = useAuth0()
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [loading, setLoading] = useState(false)

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
  }, [value, name, isuser]);

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
  const loginWithJwt = (email, password) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ({ email, password })
    };

    return Axios.post(`${BACKEND_API}/v1.0/login`, { email, password }).then(response => {
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
    <div className="page-wrapper d-flex justify-content-center min-vh-100 w-100 align-items-center">
      <Container fluid={true} className="w-50">
        <Form className="theme-form">
          <h4>{LOGIN}</h4>
          <FormGroup>
            <Label className="col-form-label pt-0">{YourName}</Label>
            <Input className="form-control" type="text" onChange={e => setEmail(e.target.value)} defaultValue={email} required="" />
          </FormGroup>
          <FormGroup>
            <Label className="col-form-label">{Password}</Label>
            <Input className="form-control" type="password" onChange={e => setPassword(e.target.value)} defaultValue={password} required="" />
          </FormGroup>
          <div className="checkbox pl-3">
            <Input id="checkbox1" type="checkbox" />
            <Label for="checkbox1">{RememberMe}</Label>
          </div>
          <div>
            Haven't Any Account? <span role="button" onClick={() => { history.push(`${process.env.PUBLIC_URL}/registration`) }}>Create Account.</span>
          </div>
          <FormGroup className="form-row mt-3 mb-0">
            {loading ?
              <Button color="primary btn-block" disabled={loading}>
                {"LOADING..."}
              </Button>
              :
              <>
                <Button color="primary btn-block" onClick={() => loginWithJwt(email, password)}>
                  {LOGIN}
                </Button>
              </>
            }
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}

export default Logins;