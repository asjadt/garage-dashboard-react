import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap'
import SweetAlert from 'sweetalert2'
import { apiClient } from '../../../utils/apiClient';
import { BACKEND_API } from '../../../utils/backend';

const UserForm = ({toggleModal,fetchData,perPage}) => {
    const { register, handleSubmit, errors,setError } = useForm();
    const [serverSideErrors,setServerSideErrors] = useState(null);
    const [loading,setLoading] = useState(false);
    const [roles,setRoles] = useState([]);

    useEffect(() => {
        loadRoles()

        return () => {
            
        };
    }, []);

    const loadRoles = () => {
        apiClient().get(`${BACKEND_API}/v1.0/roles/all`)
        .then(response => {
console.log(response.data)
setRoles(response.data.roles)
        })
        .catch(error => {
            console.log(error.response)
        })
    }
    
  const onSubmit = data => {
    setLoading(true)
    setServerSideErrors(null)
    
    apiClient().post(`${BACKEND_API}/v1.0/users`,data)
    .then(response => {
        console.log(response.data)
        setLoading(false)
        if(response.data) {
            SweetAlert.fire({title:"Success", text:"User Created Successfully!", icon:"success"});
            fetchData(perPage)
            toggleModal();
        }
    })
    .catch(error => {
        setLoading(false)
        console.log("error",error.response)
        if(error.response?.status == 422) {
            setServerSideErrors(error.response.data.errors)
            // setError('', { type: 'custom', message: 'custom message' })
            SweetAlert.fire({title:error.response.data.message, text:"Please Try Again", icon:"warning"});
            // alert(error.response.data.message)
        }
    })
   
    // if (data !== '') {
      
        
    // } else {
    //   errors.showMessages();
    // }
  };

  return (
    <>
    <Row>
        <Col sm="12">
        <Card>
              <CardHeader>
                <h5>Create User</h5>
              </CardHeader>
              <CardBody>
                <Form className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-row">
                    <Col md="4 mb-3">
                      <Label htmlFor="first_Name">First Name</Label>
                      <Input className="form-control" name="first_Name" type="text" placeholder="First name" innerRef={register({ required: false })} />
                      <span>{errors.firstName && 'Please provide First name'}</span>
                     
                      {serverSideErrors?(
                        !serverSideErrors.first_Name?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.first_Name[0]}</div>)
                      )
                      :(null)}
                     
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="last_Name">Last Name</Label>
                      <Input className="form-control" name="last_Name" type="text" placeholder="Last name" innerRef={register({ required: false })} />
                      <span>{errors.last_Name && 'Last name is required'}</span>
                    
                      {serverSideErrors?(
                        !serverSideErrors.last_Name?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.last_Name[0]}</div>)
                      )
                      :(null)}
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="validationCustomUsername">Email</Label>
                      <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>{"@"}</InputGroupText>
                      </InputGroupAddon>
                        <Input className="form-control" name="email" type="text" placeholder="email" innerRef={register({ required: false })} />
                        <span>{errors.email && 'User name is required'}</span>
                       
                        {serverSideErrors?(
                        !serverSideErrors.email?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.email[0]}</div>)
                      )
                      :(null)}
                      </InputGroup>
                    </Col>
                  </div>
                  <div className="form-row">
                    <Col md="6 mb-3">
                      <Label htmlFor="password">Password</Label>
                      <Input className="form-control" name="password" type="text" placeholder="password" innerRef={register({ required: false, })} />
                      <span>{errors.city && 'Please provide a valid city'}</span>
                  
                      {serverSideErrors?(
                        !serverSideErrors.password?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.password[0]}</div>)
                      )
                      :(null)}
                    </Col>
                    <Col md="6 mb-3">
                      <Label htmlFor="password_confirmation">Confirm Password</Label>
                      <Input className="form-control" id="password_confirmation" name="password_confirmation" type="text" placeholder="confirm password" innerRef={register({ false: true })} />
                      <span>{errors.password && 'Last name is required'}</span>
              
                      {serverSideErrors?(
                        !serverSideErrors.password?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.password[0]}</div>)
                      )
                      :(null)}
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="phone">Phone</Label>
                      <Input className="form-control" name="phone" type="text" placeholder="phone" innerRef={register({ required: false })} />
                      <span>{errors.phone && 'Last name is required'}</span>
                      {serverSideErrors?(
                        !serverSideErrors.phone?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.phone[0]}</div>)
                      )
                      :(null)}
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="phone">Address Line 1</Label>
                      <Input className="form-control" name="address_line_1" type="text" placeholder="address line 1" innerRef={register({ required: false })} />
                      <span>{errors.address_line_1 && 'Last name is required'}</span>
                      {serverSideErrors?(
                        !serverSideErrors.address_line_1?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.address_line_1[0]}</div>)
                      )
                      :(null)}
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="phone">Address Line 2</Label>
                      <Input className="form-control" name="address_line_2" type="text" placeholder="address line 2" innerRef={register({ required: false })} />
                      <span>{errors.address_line_2 && 'Last name is required'}</span>
                      {serverSideErrors?(
                        !serverSideErrors.address_line_2?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.address_line_2[0]}</div>)
                      )
                      :(null)}
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="country">Country</Label>
                      <Input className="form-control" name="country" type="text" placeholder="country" innerRef={register({ required: false })} />
                      <span>{errors.country && 'Last name is required'}</span>
                      {serverSideErrors?(
                        !serverSideErrors.country?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.country[0]}</div>)
                      )
                      :(null)}
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="city">City</Label>
                      <Input className="form-control" name="city" type="text" placeholder="city" innerRef={register({ required: false })} />
                      <span>{errors.city && 'Last name is required'}</span>
                      {serverSideErrors?(
                        !serverSideErrors.city?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.city[0]}</div>)
                      )
                      :(null)}
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="postcode">Postcode</Label>
                      <Input className="form-control" name="postcode" type="text" placeholder="postcode" innerRef={register({ required: false })} />
                      <span>{errors.postcode && 'Last name is required'}</span>
                      {serverSideErrors?(
                        !serverSideErrors.postcode?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.postcode[0]}</div>)
                      )
                      :(null)}
                    </Col>
                    <Col md="4 mb-3">
                    <FormGroup>
                    <Input type="select" className="custom-select"  name="role"  innerRef={register({ required: false })} >
                      <option value="">{"Open this select Role"}</option>
                      {roles.map(el => {
                        return (
                            <option value={el.name} key={el.id}>{el.name}</option>
                        )
                      })}
                    
                  
                    </Input>
                
                    {serverSideErrors?(
                        !serverSideErrors.role?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.role[0]}</div>)
                      )
                      :(null)}
                  </FormGroup>
                 
                    
                    </Col>
                  
                  </div>
                  {/* <FormGroup>
                    <div className="form-check">
                      <div className="checkbox p-0">
                        <Input className="form-check-input" id="invalidCheck" type="checkbox" />
                        <Label className="form-check-label" htmlFor="invalidCheck">{"Agree to terms and conditions"}</Label>
                      </div>
                      <div className="invalid-feedback">{"You must agree before submitting."}</div>
                    </div>
                  </FormGroup> */} 
                  {
 loading?( <div className="loader-box">
 <div className="loader-1"></div>
</div>):(null)
                  }
                 
                  <Button color="primary">{"Submit form"}</Button>
                </Form>
              </CardBody>
            </Card>
        </Col>
    </Row>
 


    
    </>
  )
}

export default UserForm