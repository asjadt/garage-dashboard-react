import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, Col, Container, Form, Row } from "reactstrap";
import SweetAlert from 'sweetalert2';
import BreadCrumb from '../../layout/Breadcrumb';

import { apiClient } from '../../utils/apiClient';
import { BACKEND_API } from '../../utils/backend';

import { useLocation, withRouter } from 'react-router-dom';
import { GARAGE_CREATE } from '../../constant/permissions';
import Error401Unauthorized from '../../pages/errors/Error401Unauthorized';

import useGeoLocation from '../../hooks/useGeoLocation';
import { topCardState } from '../dashboard/data';
import GarageStep from './forms/GarageStep';
import ServiceStep from './forms/ServiceStep';
import UserStep from './forms/UserStep';
import MultiStepProgressBar from './utils/MultiStepProgressBar';



const GarageCreate = ({ history }) => {
  const { pathname } = useLocation()
  // eslint-disable-next-line 
  const [stateOptions, setStateValues] = useState(topCardState);
  const [placeAutoComplete, setPlaceAutoComplete] = useState({});
  const [placeAutoComplete2, setPlaceAutoComplete2] = useState({});
  const location = useGeoLocation()
  const [state, setState] = useState({
    currentStep: 1,
  })
  const [user, setUser] = useState({
    first_Name: '',
    last_Name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    image: '',
    address_line_1: 'N/A',
    address_line_2: 'N/A',
    country: 'N/A',
    city: 'N/A',
    postcode: 'N/A',
  })
  const [garage, setGarage] = useState({
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
    is_mobile_garage: '1',
    wifi_available: '1',
    labour_rate: '',
    average_time_slot: '',
  })



  const [automobileCategories, setAutomobileCategories] = useState([]);

  const [service, setService] = useState([
    {
      automobile_category_id: "1",
      services: [

      ],
      automobile_makes: [

      ]
    }
  ])

  const loadAutomobileMakes = () => {
    apiClient().get(`${BACKEND_API}/v1.0/automobile-makes-all/${1}`)
      .then(response => {
        let makes = response.data
        loadServices(makes)
      })
      .catch(error => {
        if (error.response?.status === 401) {
          SweetAlert.fire({ title: error.response.data.message, text: "Hello!!! You do not have permission.", icon: "warning" });
        }
        else {
          SweetAlert.fire({ title: "something went wrong!!", text: "Please Try Again", icon: "warning" });
        }
      })
  }

  useEffect(() => {
    loadAutomobileCategories()
    loadAutomobileMakes()
  }, [])

  const loadAutomobileCategories = () => {
    apiClient().get(`${BACKEND_API}/v1.0/automobile-categories/get/all`)
      .then(response => {
        console.log(response.data)
        let categories = response.data
        setAutomobileCategories(categories)

      })
      .catch(error => {
        if (error.response?.status === 401) {
          SweetAlert.fire({ title: error.response.data.message, text: "Hello!!! You do not have permission.", icon: "warning" });
        }
        else {
          SweetAlert.fire({ title: "something went wrong!!", text: "Please Try Again", icon: "warning" });
        }
      })
  }

  const loadServices = (makes) => {
    apiClient().get(`${BACKEND_API}/v1.0/services-all/${1}`)
      .then(response => {
        let services = response.data
        // setAutomobileCategories(categories)
        let tempServices = JSON.parse(JSON.stringify(service))

        console.log(tempServices)
        tempServices[0] = {
          ...tempServices[0],

          services: [...services.map(el => {
            el.checked = true;
            el.sub_services.map(sub_el => {
              sub_el.checked = true;
              return sub_el;
            })
            return el;
          })],
          automobile_makes: [...makes.map(el => {
            el.checked = true;
            el.models.map(model => {
              model.checked = true;
              return model;
            })
            return el;
          })]

        };

        setService(tempServices)
      })
      .catch(error => {
        if (error.response?.status === 401) {
          SweetAlert.fire({ title: error.response.data.message, text: "Hello!!! You do not have permission.", icon: "warning" });
        }
        else {
          SweetAlert.fire({ title: "something went wrong!!", text: "Please Try Again", icon: "warning" });
        }
      })
  }

  const [serverSideErrors, setServerSideErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  let permissions = JSON.parse(localStorage.getItem("permissions"));
  const [distanceError, setDistanceError] = useState('')

  // CALCULATE THE DISTANCE BETWEEN ADDRESS AND LIVE LOCATION
  function distance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km (change this constant to get miles)
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return Math.round(d * 1000);
  }

  // AUTO COMPLETE ADDRESS LINE 1 CHANGE THEN IT SHOULD REPLACE THE POSTCODE AND THE ADDRESS LINE 1
  useEffect(() => {
    const dis = distance(location?.coordinates.lat, location?.coordinates.lon, placeAutoComplete?.coordinates?.lat, placeAutoComplete?.coordinates?.lng)
    if ((dis < 500 || isNaN(dis) || JSON.parse(localStorage.getItem('user'))?.roles[0]?.name === 'superadmin')) {
      setGarage({
        ...garage,
        city: placeAutoComplete?.locality,
        country: placeAutoComplete?.country,
        address_line_1: placeAutoComplete?.full_address,
        postcode: placeAutoComplete?.postal_code
      })
      setDistanceError('')
    } else {
      placeAutoComplete?.full_address && setDistanceError('You are in a wrong place.')
    }
  }, [placeAutoComplete])

  // AUTO COMPLETE ADDRESS LINE @ CHANGE THEN IT SHOULD REPLACE THE ADDRESS LINE 2
  useEffect(() => {
    setGarage({
      ...garage,
      address_line_2: placeAutoComplete2?.full_address
    })
  }, [placeAutoComplete2])



  const addCategory = () => {
    let tempServices = JSON.parse(JSON.stringify(service))
    tempServices.push({
      automobile_category_id: "1",
      services: [
      ],
      automobile_makes: [
      ]
    });

    setService(tempServices)
  }

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleGarageChange = (e) => {
    const { name, value } = e.target;
    setGarage({ ...garage, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const _next = () => {
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

  const nextButton = () => {
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

  const submitButton = () => {
    let currentStep = state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 2) {
      return (
        <>
          {
            loading ?
              <Button color="primary float-right" type='button' disabled>Loading..</Button>
              :
              <Button color="primary float-right" type='button' onClick={handleSubmitStep}>Submit</Button>
          }
        </>

      )
    }
    // ...else render nothing
    return null;
  }

  const handleCategoryChange = (e) => {
    let index = e.target.name.split("-")[1];
    let name = e.target.name.split("-")[2];

    let tempServices = JSON.parse(JSON.stringify(service))
    console.log(tempServices, index, name)
    tempServices[index] = {
      ...tempServices[index],
      [name]: e.target.value
    };
    setService(tempServices)
  }

  const handleMakeChange = (e) => {
    const { name } = e.target
    let index = name.split("-")[1];
    let makeIndex = name.split("-")[3];

    let tempServices = JSON.parse(JSON.stringify(service))

    tempServices[index].automobile_makes[makeIndex].checked = !tempServices[index].automobile_makes[makeIndex].checked;

    tempServices[index].automobile_makes[makeIndex].models.forEach(element => {
      element.checked = tempServices[index].automobile_makes[makeIndex].checked;
      return element
    });

    setService(tempServices)
  }

  const handleModelChange = (e) => {
    const { name } = e.target
    let index = name.split("-")[1];
    let makeIndex = name.split("-")[3];
    let modelIndex = name.split("-")[5];

    let tempServices = JSON.parse(JSON.stringify(service))

    tempServices[index].automobile_makes[makeIndex].models[modelIndex].checked = !tempServices[index].automobile_makes[makeIndex].models[modelIndex].checked;
    setService(tempServices)
  }

  const handleServiceChange = (e) => {
    const { name } = e.target
    let index = name.split("-")[1];
    let serviceIndex = name.split("-")[3];

    let tempServices = JSON.parse(JSON.stringify(service))

    tempServices[index].services[serviceIndex].checked = !tempServices[index].services[serviceIndex].checked;
    tempServices[index].services[serviceIndex].sub_services.forEach(element => {
      element.checked = tempServices[index].services[serviceIndex].checked;
      return element
    });
    setService(tempServices)
  }

  const handleSubServiceChange = (e) => {
    const { name } = e.target;
    let index = name.split("-")[1];
    let serviceIndex = name.split("-")[3];
    let subServiceIndex = name.split("-")[5];

    let tempServices = JSON.parse(JSON.stringify(service));
    console.log(subServiceIndex);
    console.log("test", tempServices[index].services[serviceIndex].sub_services[subServiceIndex]);
    tempServices[index].services[serviceIndex].sub_services[subServiceIndex].checked = !tempServices[index].services[serviceIndex].sub_services[subServiceIndex].checked;
    setService(tempServices)
  }

  const handleServiceChangeAll = (e) => {
    const { checked } = e.target
    let tempServices = JSON.parse(JSON.stringify(service))
    tempServices.map(services => {
      services.services.map(service => {
        service.checked = checked;
        service.sub_services.map(sub_service => {
          sub_service.checked = checked
          return sub_service;
        })
        return service;
      })
      return services;
    })
    setService(tempServices)
  }

  const handleMakeChangeAll = (e) => {
    const { checked } = e.target
    let tempServices = JSON.parse(JSON.stringify(service))
    tempServices.map(automobile_makes => {
      automobile_makes.automobile_makes.map(make => {
        make.checked = checked;
        make.models.map(model => {
          model.checked = checked;
          return model;
        })
        return make;
      })
    })
    setService(tempServices)
  }


  const handleSubmitStep = () => {
    let currentStep = state.currentStep;

    apiClient()
      .post(`${BACKEND_API}/v1.0/auth/register-with-garage`, {
        user: user,
        garage: garage,
        service: currentStep === 3 ? service : null
      })
      .then(res => {
        SweetAlert.fire({ title: "Success", text: "Garage Registered Successfully!", icon: "success" });
        history.push("/garages/list");
        console.log("garage", res);
      })
      .catch(error => {
        setLoading(false)
        if (error.response?.status === 422) {
          const { errors } = error.response.data
          setServerSideErrors(errors)
          if (
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
          ) {

            setState({
              ...state,
              currentStep: 1
            });

            SweetAlert.fire({ title: error.response.data.message, text: "Please Try Again", icon: "warning" });
            return
          }
          else if (
            (currentStep >= 2)
            &&
            (
              errors["garage.name"]
              ||
              errors["garage.about"]
              ||
              errors["garage.web_page"]
              ||
              errors["garage.phone"]
              ||
              errors["garage.email"]
              ||
              errors["garage.additional_information"]
              ||
              errors["garage.country"]
              ||
              errors["garage.city"]
              ||
              errors["garage.postcode"]
              ||
              errors["garage.address_line_1"]
              ||
              errors["garage.address_line_2"]
              ||
              errors["garage.logo"]
              ||
              errors["garage.is_mobile_garage"]
              ||
              errors["garage.wifi_available"]
              ||
              errors["garage.labour_rate"]
              ||
              errors["garage.average_time_slot"]
            )
          ) {
            setState({
              ...state,
              currentStep: 2
            });

            SweetAlert.fire({ title: error.response.data.message, text: "Please Try Again", icon: "warning" });
            return
          }
          else if (
            (currentStep >= 3)
            &&
            (
              errors["service.makes"]
              ||
              errors["service.services"]
              ||
              errors["service.0.automobile_makes"]
              ||
              errors["service.0.services"]
            )
          ) {
            setState({
              ...state,
              currentStep: 3
            });

            SweetAlert.fire({ title: error.response.data.message, text: "Please Try Again", icon: "warning" });
            return
          }
          else {
            console.log("errors", errors)
            setServerSideErrors(null)
            _next()
          }

        }
        else if (error.response?.status === 401) {
          SweetAlert.fire({ title: error.response.data.message, text: "Hello!!! You do not have permission.", icon: "warning" });
        }
        else {
          SweetAlert.fire({ title: "something went wrong!!", text: "Please Try Again", icon: "warning" });
        }
      })
  };


  // IF HAVE NO PERMISSION OF CREATE GARAGE 
  if (!permissions.includes(GARAGE_CREATE)) {
    return <><Error401Unauthorized></Error401Unauthorized></>
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
                  <div>
                    <div>
                      <h5>Garage Management</h5><span> Create Garage </span>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className='px-5 mb-5 my-1'>
                    <MultiStepProgressBar currentStep={state.currentStep} />
                  </div>
                  <CardText />

                  <UserStep
                    currentStep={state.currentStep}
                    handleChange={handleUserChange}
                    data={user}
                    serverSideErrors={serverSideErrors} />

                  <GarageStep
                    distanceError={distanceError}
                    setPlaceAutoComplete2={setPlaceAutoComplete2}
                    setPlaceAutoComplete={setPlaceAutoComplete}
                    currentStep={state.currentStep}
                    handleChange={handleGarageChange}
                    data={garage}
                    serverSideErrors={serverSideErrors} />

                  <ServiceStep
                    pathname={pathname}
                    handleMakeChangeAll={handleMakeChangeAll}
                    handleServiceChangeAll={handleServiceChangeAll}
                    currentStep={state.currentStep}
                    handleChange={handleUserChange}
                    data={service}
                    serverSideErrors={serverSideErrors}
                    addCategory={addCategory}
                    automobileCategories={automobileCategories}
                    handleCategoryChange={handleCategoryChange}
                    handleMakeChange={handleMakeChange}
                    handleModelChange={handleModelChange}
                    handleServiceChange={handleServiceChange}
                    handleSubServiceChange={handleSubServiceChange} />
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