import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card, CardBody, Col, Form, Input, Label, Row } from 'reactstrap';
import SweetAlert from 'sweetalert2';
import { apiClient } from '../../../utils/apiClient';
import { BACKEND_API } from '../../../utils/backend';

const FuelStationForm = ({ toggleModal, fetchData, perPage, type, fuelStationUpdateData }) => {
  const { register, handleSubmit, setValue, errors } = useForm();
  const [serverSideErrors, setServerSideErrors] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    console.log(fuelStationUpdateData)
    if (type === "update") {
      const fields = ['id', 'name', 'description', 'address', 'opening_time', 'closing_time'];
      fields.forEach(field => setValue(field, fuelStationUpdateData[field]));
    }
    return () => {

    };
  }, []);


  const onSubmit = data => {
    setLoading(true)
    setServerSideErrors(null)
    if (type === "update") {
      apiClient().put(`${BACKEND_API}/v1.0/fuel-station`, data)
        .then(response => {
          console.log(response.data)
          setLoading(false)
          if (response.data) {
            SweetAlert.fire({ title: "Success", text: "Fuel Station Updated Successfully!", icon: "success" });
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
      apiClient().post(`${BACKEND_API}/v1.0/fuel-station`, data)
        .then(response => {
          console.log(response.data)
          setLoading(false)
          if (response.data) {
            SweetAlert.fire({ title: "Success", text: "Fuel Station Created Successfully!", icon: "success" });
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
            <CardBody>
              <Form className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row mb-2">
                  <Input className="form-control" name="id" type="hidden" innerRef={register({ required: false })} />
                  {/* FUEL STATION NAME  */}
                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="first_Name">Name*</Label>
                    <Input className="form-control" name="name" type="text"
                      innerRef={register({ required: false })} />
                    <span>{errors.name && 'Name is required'}</span>
                    {serverSideErrors && (
                      !serverSideErrors.name ? (
                        <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                      ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.name[0]}</div>)
                    )}
                  </Col>
                  {/* FUEL STATION DESCRIPTION  */}
                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="last_Name">Description</Label>
                    <Input className="form-control" name="description" type="text"
                      innerRef={register({ required: false })} />
                    <span>{errors.description && 'Something is wrong!'}</span>
                    {serverSideErrors && (
                      !serverSideErrors.description ? (
                        <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                      ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.description[0]}</div>)
                    )}
                  </Col>
                </div>
                {/* FUEL STATION ADDRESS  */}
                <div className='form-row mb-2'>
                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="phone">Address*</Label>
                    <Input className="form-control" name="address" type="textarea"
                      innerRef={register({ required: false })} />
                    <span>{errors.address && 'Address is required'}</span>
                    {serverSideErrors && (
                      !serverSideErrors.address ? (
                        <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                      ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.address[0]}</div>)
                    )}
                  </Col>
                  {/* FUEL STATION OPENNING TIME  */}
                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="phone">Opening Time*</Label>
                    <Input className="form-control" name="opening_time" type="time"
                      innerRef={register({ required: false })} />
                    <span>{errors.opening_time && 'Opening Time is required'}</span>
                    {serverSideErrors && (
                      !serverSideErrors.opening_time ? (
                        <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                      ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.opening_time[0]}</div>)
                    )}
                  </Col>
                  {/* FUEL STATION CLOSING TIME  */}
                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="phone">Closing Time*</Label>
                    <Input className="form-control" name="closing_time" type="time"
                      innerRef={register({ required: false })} />
                    <span>{errors.closing_time && 'Closing Time is required'}</span>
                    {serverSideErrors && (
                      !serverSideErrors.closing_time ? (
                        <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                      ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.closing_time[0]}</div>)
                    )}
                  </Col>
                </div>
                {
                  loading && (
                    <div className="loader-box">
                      <div className="loader-1"></div>
                    </div>
                  )
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