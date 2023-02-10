import {
  City, Country
} from 'country-state-city';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap';
import SweetAlert from 'sweetalert2';
import { apiClient } from '../../../utils/apiClient';
import { BACKEND_API } from '../../../utils/backend';

const FuelStationForm = ({ toggleModal, fetchData, perPage, type, userUpdateData }) => {
  const { register, handleSubmit, setValue, errors, watch } = useForm();
  const [serverSideErrors, setServerSideErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState([]);
  const formValues = watch();

  useEffect(() => {
    loadRoles()
    console.log(userUpdateData)
    if (type === "update") {
      const fields = ['id', 'first_Name', 'last_Name', 'email', 'phone', 'country', 'city', 'postcode', 'address_line_1', 'address_line_2'];
      fields.forEach(field => setValue(field, userUpdateData[field]));
      setValue("role", userUpdateData.roles[0].name)

    }
    return () => {

    };
  }, []);

  const loadRoles = () => {
    apiClient().get(`${BACKEND_API}/v1.0/roles/get/all`)
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
    if (type === "update") {
      apiClient().put(`${BACKEND_API}/v1.0/users`, data)
        .then(response => {
          console.log(response.data)
          setLoading(false)
          if (response.data) {
            SweetAlert.fire({ title: "Success", text: "User Updated Successfully!", icon: "success" });
            fetchData(perPage)
            toggleModal();
          }
        })
        .catch(error => {
          setLoading(false)
          console.log("error", error.response)
          if (error.response?.status === 422) {
            setServerSideErrors(error.response.data.errors)
            SweetAlert.fire({ title: error.response.data.message, text: "Please Try Again", icon: "warning" });
          }
          else if (error.response?.status === 401) {
            SweetAlert.fire({ title: error.response.data.message, text: "Hello!!! You do not have permission.", icon: "warning" });
          }
          else {
            SweetAlert.fire({ title: "something went wrong!!", text: "Please Try Again", icon: "warning" });
          }
        })

    }
    if (type === "create") {
      apiClient().post(`${BACKEND_API}/v1.0/users`, data)
        .then(response => {
          console.log(response.data)
          setLoading(false)
          if (response.data) {
            SweetAlert.fire({ title: "Success", text: "User Created Successfully!", icon: "success" });
            fetchData(perPage)
            toggleModal();
          }
        })
        .catch(error => {
          setLoading(false)
          console.log("error", error.response)
          if (error.response?.status === 422) {
            setServerSideErrors(error.response.data.errors)
            SweetAlert.fire({ title: error.response.data.message, text: "Please Try Again", icon: "warning" });
          }
          else if (error.response?.status === 401) {
            SweetAlert.fire({ title: error.response.data.message, text: "Hello!!! You do not have permission.", icon: "warning" });
          }
          else {
            SweetAlert.fire({ title: "something went wrong!!", text: "Please Try Again", icon: "warning" });
          }
        })
    }
  };

  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5><span style={{ textTransform: "capitalize" }}>{type}</span> User</h5>
            </CardHeader>
            <CardBody>
              <Form className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row mb-2">
                  <Input className="form-control" name="id" type="hidden" innerRef={register({ required: false })} />

                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="first_Name">First Name</Label>
                    <Input className="form-control" name="first_Name" type="text"

                      // placeholder="First name" 

                      innerRef={register({ required: false })} />
                    <span>{errors.firstName && 'Please provide First name'}</span>

                    {serverSideErrors ? (
                      !serverSideErrors.first_Name ? (
                        <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                      ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.first_Name[0]}</div>)
                    )
                      : (null)}

                  </Col>
                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="last_Name">Last Name</Label>
                    <Input className="form-control" name="last_Name" type="text"

                      // placeholder="Last name" 
                      innerRef={register({ required: false })} />
                    <span>{errors.last_Name && 'Last name is required'}</span>

                    {serverSideErrors ? (
                      !serverSideErrors.last_Name ? (
                        <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                      ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.last_Name[0]}</div>)
                    )
                      : (null)}
                  </Col>
                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="validationCustomUsername">Email</Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>{"@"}</InputGroupText>
                      </InputGroupAddon>
                      <Input className="form-control" name="email" type="text"

                        // placeholder="email"

                        innerRef={register({ required: false })} />
                      <span>{errors.email && 'User name is required'}</span>

                      {serverSideErrors ? (
                        !serverSideErrors.email ? (
                          <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                        ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.email[0]}</div>)
                      )
                        : (null)}
                    </InputGroup>
                  </Col>
                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="phone">Phone</Label>
                    <Input className="form-control" name="phone" type="text"

                      // placeholder="phone"

                      innerRef={register({ required: false })} />
                    <span>{errors.phone && 'Last name is required'}</span>
                    {serverSideErrors ? (
                      !serverSideErrors.phone ? (
                        <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                      ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.phone[0]}</div>)
                    )
                      : (null)}
                  </Col>
                </div>
                <div className="form-row mb-2">
                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="password">Password</Label>
                    <Input className="form-control" name="password" type="password"

                      // placeholder="password" 

                      innerRef={register({ required: false, })} />
                    <span>{errors.city && 'Please provide a valid city'}</span>

                    {serverSideErrors ? (
                      !serverSideErrors.password ? (
                        <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                      ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.password[0]}</div>)
                    )
                      : (null)}
                  </Col>
                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="password_confirmation">Confirm Password</Label>
                    <Input className="form-control" id="password_confirmation" name="password_confirmation" type="password"
                      // placeholder="confirm password" 
                      innerRef={register({ false: true })} />
                    <span>{errors.password && 'Last name is required'}</span>

                    {serverSideErrors ? (
                      !serverSideErrors.password ? (
                        <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                      ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.password[0]}</div>)
                    )
                      : (null)}
                  </Col>





                </div>
                <div className='form-row mb-2'>
                  <Col md="6 mb-3">
                    <FormGroup>
                      <Label className='text-uppercase' htmlFor="country">COUNTRY</Label>
                      <Input type="select" className="custom-select" name="country" innerRef={register({ required: false })} defaultValue={"GB"} value={formValues.country ? formValues.country : userUpdateData?.country} onChange={(e) => setValue("country", e.target.value)} >

                        <option value="">{"SELECT COUNTRY"}</option>
                        {Country.getAllCountries().map(el => {
                          console.log(el)
                          return (
                            <option value={el.isoCode} key={el.id}  >{el.name}</option>
                          )
                        })}


                      </Input>

                      {serverSideErrors ? (
                        !serverSideErrors.country ? (
                          <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                        ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.country[0]}</div>)
                      )
                        : (null)}
                    </FormGroup>


                  </Col>
                  <Col md="6 mb-3">
                    <FormGroup>
                      <Label className='text-uppercase' htmlFor="city">CITY</Label>
                      {console.log(formValues.country)}
                      <Input type="select" className="custom-select" name="city" innerRef={register({ required: false })} value={formValues.city ? formValues.city : userUpdateData?.city} onChange={(e) => setValue("city", e.target.value)}>

                        <option value="">{"SELECT CITY"}</option>
                        {City.getCitiesOfCountry(formValues.country).map(el => {
                          return (
                            <option value={el.name} key={el.id}  >{el.name}</option>
                          )
                        })}


                      </Input>

                      {serverSideErrors ? (
                        !serverSideErrors.city ? (
                          <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                        ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.city[0]}</div>)
                      )
                        : (null)}
                    </FormGroup>


                  </Col>

                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="postcode" >Postcode</Label>
                    <Input className="form-control" name="postcode" type="text"

                      // placeholder="postcode"

                      innerRef={register({ required: false })} />
                    <span>{errors.postcode && 'Last name is required'}</span>
                    {serverSideErrors ? (
                      !serverSideErrors.postcode ? (
                        <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                      ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.postcode[0]}</div>)
                    )
                      : (null)}
                  </Col>
                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="phone">Address Line 1</Label>
                    <Input className="form-control" name="address_line_1" type="textarea"
                      // placeholder="address line 1" 

                      innerRef={register({ required: false })} />
                    <span>{errors.address_line_1 && 'Last name is required'}</span>
                    {serverSideErrors ? (
                      !serverSideErrors.address_line_1 ? (
                        <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                      ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.address_line_1[0]}</div>)
                    )
                      : (null)}
                  </Col>
                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="phone">Address Line 2</Label>
                    <Input className="form-control" name="address_line_2" type="textarea"
                      // placeholder="address line 2" 

                      innerRef={register({ required: false })} />
                    <span>{errors.address_line_2 && 'Last name is required'}</span>
                    {serverSideErrors ? (
                      !serverSideErrors.address_line_2 ? (
                        <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                      ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.address_line_2[0]}</div>)
                    )
                      : (null)}
                  </Col>

                </div>
                <div className='form-row mb-2'>
                  <Col md="6 mb-3">
                    <FormGroup>
                      <Label className='text-uppercase' htmlFor="role">Role</Label>
                      <Input type="select" className="custom-select" name="role" innerRef={register({ required: false })} value={formValues.role ? formValues.role : userUpdateData?.roles[0].name} onChange={(e) => setValue("role", e.target.value)}>

                        <option value="">{"Open this select Role"}</option>
                        {roles.map(el => {
                          return (
                            <option value={el.name} key={el.id}  >{el.name}</option>
                          )
                        })}


                      </Input>

                      {serverSideErrors ? (
                        !serverSideErrors.role ? (
                          <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                        ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.role[0]}</div>)
                      )
                        : (null)}
                    </FormGroup>


                  </Col>
                </div>

                {
                  loading ? (<div className="loader-box">
                    <div className="loader-1"></div>
                  </div>) : (null)
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

export default FuelStationForm