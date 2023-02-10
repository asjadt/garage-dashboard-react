import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card, CardBody, CardHeader, Col, Form, Input, Label, Row } from 'reactstrap';
import SweetAlert from 'sweetalert2';
import { apiClient } from '../../../utils/apiClient';
import { BACKEND_API } from '../../../utils/backend';


const RoleForm = ({ toggleModal, fetchData, perPage, type, roleUpdateData, initialRolePermissions }) => {
  const { register, handleSubmit, setValue, errors } = useForm();
  const [serverSideErrors, setServerSideErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (type === "update") {
      const fields = ['id', 'name'];
      fields.forEach(field => setValue(field, roleUpdateData[field]));
      const tempPermissions = [];
      roleUpdateData.permissions.map(el => {
        tempPermissions.push(el.name)
      })
      setValue("permissions", tempPermissions)
    }
    return () => {
    };
  }, []);

  const onSubmit = data => {
    setLoading(true)
    setServerSideErrors(null)
    if (type === "update") {
      apiClient().put(`${BACKEND_API}/v1.0/roles`, data)
        .then(response => {
          console.log(response.data)
          setLoading(false)
          if (response.data) {
            SweetAlert.fire({ title: "Success", text: "Role Updated Successfully!", icon: "success" });
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
      apiClient().post(`${BACKEND_API}/v1.0/roles`, data)
        .then(response => {
          console.log(response.data)
          setLoading(false)
          if (response.data) {
            SweetAlert.fire({ title: "Success", text: "Role Created Successfully!", icon: "success" });
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
              <h5><span style={{ textTransform: "capitalize" }}>{type}</span> Role</h5>
            </CardHeader>
            <CardBody>
              <Form className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row mb-2">
                  <Input className="form-control" name="id" type="hidden" innerRef={register({ required: false })} />

                  <Col md="6 mb-3">
                    <Label className='text-uppercase' htmlFor="name"> Name</Label>
                    <Input className="form-control" name="name" type="text"
                      readOnly={type === "update"}
                      disabled={type === "update"}
                      innerRef={register({ required: false })} />
                    <span>{errors.firstName && 'Please provide First name'}</span>
                    {serverSideErrors && (
                      !serverSideErrors.name ? (
                        <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
                      ) : (<div className="invalid-feedback" style={{ display: "block" }}>{serverSideErrors.name[0]}</div>)
                    )}

                  </Col>

                </div>
                {initialRolePermissions.map((el, index) => {
                  return (
                    <div className="form-row mb-2" key={index}>
                      <Col md="12 mb-3">
                        <Label className='text-uppercase'> {el.role}</Label>
                      </Col>
                      {
                        el.permissions.map((el2, index2) => {
                          return (
                            <Col md="3 mb-3" key={index2}>
                              <Label className="d-block" for="chk-ani">
                                <Input className="checkbox_animated" id={'permissions'} value={el2} innerRef={register({ required: false })} type="checkbox" name='permissions' /> {el2}
                              </Label>
                            </Col>
                          )
                        })
                      }
                    </div>
                  )
                })}

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

export default RoleForm