import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import man from '../assets/images/dashboard/user.png';
import { LOGIN, Password, RememberMe, YourName } from '../constant';
import { BACKEND_API } from '../utils/backend';
import { getPermissions } from '../utils/helperFunctions';

const Logins = (props) => {

  const history = useHistory();
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

  useEffect(() => {
    localStorage.setItem('profileURL', value);
    localStorage.setItem('Name', name);
    localStorage.setItem('isUser', isuser);
  }, [value, name, isuser]);

  const loginWithJwt = (email, password) => {
    setLoading(true)
    return Axios.post(`${BACKEND_API}/v1.0/login`, { email, password }).then(response => {
      setLoading(false)
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
          <h3 className="text-center font-weight-bold text-primary">{LOGIN}</h3>
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
            Haven't Any Account? <span role="button" className='text-primary' onClick={() => { history.push(`${process.env.PUBLIC_URL}/registration`) }}>Create Account.</span>
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