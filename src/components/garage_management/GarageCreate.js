import React, { Fragment, useEffect, useState } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import { Container, Row, Col, Card, CardHeader, Table, Pagination, PaginationItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, CardBody, CardTitle, CardText, CardFooter } from "reactstrap"
import SweetAlert from 'sweetalert2'

import { BACKEND_API } from '../../utils/backend';
import { apiClient } from '../../utils/apiClient';
import { css } from "@emotion/react";

import setLinksView from '../../utils/pagination';


import {
    Edit, Delete, Eye
} from 'react-feather';
import GarageView from './vews/GarageView';
import DatePicker from "react-datepicker";
import { GARAGE_CREATE, GARAGE_DELETE, GARAGE_UPDATE, GARAGE_VIEW } from '../../constant/permissions';
import Error401Unauthorized from '../../pages/errors/Error401Unauthorized';
import { checkPermissions } from '../../utils/helperFunctions';
import { Link, withRouter } from 'react-router-dom';
import Registration from '../forms/form-layout/form-wizard-1/registration';

import Birthdate from '../forms/form-layout/form-wizard-1/birthdate';
import StepZilla from "react-stepzilla";
import Emails from '../forms/form-layout/form-wizard-1/email';
import MultiStepProgressBar from './utils/MultiStepProgressBar';
import UserStep from './forms/UserStep';
import ServiceStep from './forms/ServiceStep';
import GarageStep from './forms/GarageStep';



const GarageCreate = () => {
 
    const [state,setState] = useState({
        currentStep: 1,
      })
    const [user,setUser] = useState({
        first_Name : '',
        last_Name : '',
        email : '',
        password : '',
        password_confirmation : '',
        phone : '',
        image : '',
        address_line_1 : '',
        address_line_2 : '',
        country : '',
        city : '',
        postcode : '',
    })  
    const [garage,setGarage] = useState({
        name: '',
        about: '',
        web_page: '',
        phone: '',
        email: '',
        additional_information: '',
        address_line_1: '',
        address_line_2: '',
        country: '',
        city: '',
        postcode: '',
        logo: '',
        is_mobile_garage: '',
        wifi_available: '',
        labour_rate: '',
        average_time_slot: '',
    })  
    const [serverSideErrors,setServerSideErrors] = useState(null);
    const [loading,setLoading] = useState(false);
let permissions = JSON.parse(localStorage.getItem("permissions"));



  if(!permissions.includes(GARAGE_CREATE)) {
return <><Error401Unauthorized></Error401Unauthorized></>
  }
  const steps =
  [
      { name: 'Step 1', component: <Registration /> },
      { name: 'Step 2', component: <Emails /> },
      { name: 'Step 3', component: <Birthdate /> },
      
  ]
 
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser({...user,[name]: value});
  }
  const handleGarageChange = (e) => {
    const { name, value } = e.target;
    setGarage({...garage,[name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { email, username, password } = state;
    // alert(`Your registration detail: \n 
    //   Email: ${email} \n 
    //   Username: ${username} \n
    //   Password: ${password}`);
  };
  const handleSubmitStep = () => {

    let currentStep = state.currentStep;

    apiClient()
    .post(`${BACKEND_API}/v1.0/auth/register-with-garage`,{
        user:user
    })
    .then(res => {
console.log("garage",res)
    })
    .catch(error => {
        setLoading(false)
          console.log("error",error.response)
          if(error.response?.status == 422) {
            const {errors} = error.response.data
            setServerSideErrors(errors)
            if(
                (currentStep >= 1)
                &&
                (
                    errors["user.first_Name"]
                    ||
                    errors["user.last_Name"]
                    ||
                    errors["user.email"]
                    ||
                    errors["user.password"]
                    ||
                    errors["user.phone"]
                    ||
                    errors["user.image"]
                    ||
                    errors["user.address_line_1"]
                    ||
                    errors["user.address_line_2"]
                    ||
                    errors["user.country"]
                    ||
                    errors["user.city"]
                    ||
                    errors["user.postcode"]
                  
                )
            ){
       
                setState({
                        ...state,
                          currentStep: 1
                 });
               
                SweetAlert.fire({title:error.response.data.message, text:"Please Try Again", icon:"warning"});
                return
            }
         else   if(
                (currentStep >= 2)
                &&
                (
                    errors["garage.name"]
                    ||
                    errors["garage.last_Name"]
                )
            ){
               
                setState({
                        ...state,
                          currentStep: 2
                 });
            
                SweetAlert.fire({title:error.response.data.message, text:"Please Try Again", icon:"warning"});
                return
            }
          else  if(
            
                (currentStep >= 3)
                &&
                (
                    errors["service.first_Name"]
                    ||
                    errors["service.last_Name"]
                )
            
          ){
                setState({
                        ...state,
                          currentStep: 3
                 });
                
                SweetAlert.fire({title:error.response.data.message, text:"Please Try Again", icon:"warning"});
                return
            }
            else {
                console.log("errors",errors)
                setServerSideErrors(null)
                _next()
            }

              
              // setError('', { type: 'custom', message: 'custom message' })
           
              // alert(error.response.data.message)
          }
       else if(error.response?.status == 401) {
            SweetAlert.fire({title:error.response.data.message, text:"Hello!!! You do not have permission.", icon:"warning"});
          } 
          else {
            SweetAlert.fire({title:"something went wrong!!", text:"Please Try Again", icon:"warning"});
          }
      
        console.log("garage_err",error)
    })

};

  const   _next = () => {
       let currentStep = state.currentStep;

    currentStep = currentStep >= 2 ? 3 : currentStep + 1;

    setState({
        ...state,
          currentStep: currentStep
        });

   
  
    
  }

  const _prev = () => {
    let currentStep = state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setState({
        ...state,
      currentStep: currentStep
    });
  }
  const previousButton = () => {
    let currentStep = state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button color="secondary float-left" onClick={_prev}>
          Previous
        </Button>
      );
    }

    // ...else return nothing
    return null;
  }

 const  nextButton = () => {
    let currentStep = state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <Button color="primary float-right" onClick={handleSubmitStep}>
          Next
        </Button>
      );
    }
    // ...else render nothing
    return null;
  }
 const  submitButton =() => {
    let currentStep = state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 2) {
      return <Button color="primary float-right" type='button' onClick={handleSubmitStep}>Submit</Button>;
    }
    // ...else render nothing
    return null;
  }
    return (
        <Fragment>

            <BreadCrumb parent="Home" subparent="Garage Management / Garages" title="Manage Garages" />
            <Container fluid={true}>
             

                <Row>

                    <Col sm="12">
                        <Form onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <h5>Garage Management</h5><span> Create Garage </span>
                            </CardHeader>
                            <CardBody>
                            {/* <StepZilla 
                                steps={steps} 
                                showSteps={true} 
                                showNavigation={true} 
                                stepsNavigation={true}
                                prevBtnOnLastStep={true}
                              /> */}

<CardTitle>
               <MultiStepProgressBar currentStep={state.currentStep} /> 
              </CardTitle>
              <CardText />

              <UserStep
                currentStep={state.currentStep}
                handleChange={handleUserChange}
                data={user}
                serverSideErrors={serverSideErrors}
              />
               <GarageStep
                currentStep={state.currentStep}
                handleChange={handleGarageChange}
                data={garage}
                serverSideErrors={serverSideErrors}
              />
               <ServiceStep
                currentStep={state.currentStep}
                handleChange={handleUserChange}
                email={state.email}
              />






                            </CardBody>
                           
                            <CardFooter>
              {previousButton()}
              {nextButton()}
              {submitButton()}
            </CardFooter>
                  

                        </Card>
                        </Form>
                    </Col>

                </Row>
            </Container>

          
           

        

        </Fragment>
    );
};

export default withRouter(GarageCreate);