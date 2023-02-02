import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Card, CardBody, CardHeader, Col, Form, Input, Label, Row } from 'reactstrap';
import SweetAlert from 'sweetalert2';
import { apiClient } from '../../../utils/apiClient';
import { BACKEND_API } from '../../../utils/backend';

const SubServiceForm = ({toggleModal,fetchData,perPage,type,
  service,
  subServiceUpdateData}) => {
    const { register, handleSubmit,setValue, errors,setError , watch } = useForm();
    const [serverSideErrors,setServerSideErrors] = useState(null);
    const [loading,setLoading] = useState(false);
    const [roles,setRoles] = useState([]);
    const formValues = watch(); 
   
    useEffect(() => {

        console.log(subServiceUpdateData)
        if(type === "update") {
          const fields = ['id','name', 'description',];
          fields.forEach(field => setValue(field, subServiceUpdateData[field]));
       
      
        }
        return () => {
            
        };
    }, []);

 
    
  const onSubmit = data => {
    setLoading(true)
    setServerSideErrors(null)
    if(type === "update") {
      apiClient().put(`${BACKEND_API}/v1.0/sub-services`,data)
      .then(response => {
          console.log(response.data)
          setLoading(false)
          if(response.data) {
              SweetAlert.fire({title:"Success", text:"Sub Service Updated Successfully!", icon:"success"});
              fetchData(perPage)
              toggleModal();
          }
      })
      .catch(error => {
          setLoading(false)
          console.log("error",error.response)
          if(error.response?.status === 422) {
              setServerSideErrors(error.response.data.errors)
              // setError('', { type: 'custom', message: 'custom message' })
              SweetAlert.fire({title:error.response.data.message, text:"Please Try Again", icon:"warning"});
              // alert(error.response.data.message)
          }
         else if(error.response?.status === 401) {
            SweetAlert.fire({title:error.response.data.message, text:"Hello!!! You do not have permission.", icon:"warning"});
          }
          else {
            SweetAlert.fire({title:"something went wrong!!", text:"Please Try Again", icon:"warning"});
          }
      })
  
    }
    if(type === "create") {
      apiClient().post(`${BACKEND_API}/v1.0/sub-services`,data)
      .then(response => {
          console.log(response.data)
          setLoading(false)
          if(response.data) {
              SweetAlert.fire({title:"Success", text:"Sub Service Created Successfully!", icon:"success"});
              fetchData(perPage)
              toggleModal();
          }
      })
      .catch(error => {
          setLoading(false)
          console.log("error",error.response)
          if(error.response?.status === 422) {
              setServerSideErrors(error.response.data.errors)
              // setError('', { type: 'custom', message: 'custom message' })
              SweetAlert.fire({title:error.response.data.message, text:"Please Try Again", icon:"warning"});
              // alert(error.response.data.message)
          }
       else if(error.response?.status === 401) {
            SweetAlert.fire({title:error.response.data.message, text:"Hello!!! You do not have permission.", icon:"warning"});
          } 
          else {
            SweetAlert.fire({title:"something went wrong!!", text:"Please Try Again", icon:"warning"});
          }
      })
  
    }
   
   
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
                <h5><span style={{textTransform:"capitalize"}}>{type}</span> Sub Service</h5>
              </CardHeader>
              <CardBody>
                <Form className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-row mb-2">
                  <Input className="form-control" name="id" type="hidden" innerRef={register({ required: false })} />
                  <Col md="12 mb-3">
                      <Label className='text-uppercase' htmlFor="service_id">Service</Label>
                      
                      <Input className="form-control" name="service_id" type="hidden" 
                      value={service?.id}
                      
                      innerRef={register({ required: false })} />


                      <Input className="form-control" name="service" type="text" 
                      value={service?.name}
                      readOnly
                      // placeholder="First name" 
                      
                      innerRef={register({ required: false })} />
                      <span>{errors.firstName && 'Please provide name '}</span>
                     
                      {serverSideErrors?(
                        !serverSideErrors.service?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.service[0]}</div>)
                      )
                      :(null)}
                     
                    </Col>
                    <Col md="12 mb-3">
                      <Label className='text-uppercase' htmlFor="name">name</Label>
                      <Input className="form-control" name="name" type="text" 
                      
                      // placeholder="First name" 
                      
                      innerRef={register({ required: false })} />
                      <span>{errors.firstName && 'Please provide name name'}</span>
                     
                      {serverSideErrors?(
                        !serverSideErrors.name?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.name[0]}</div>)
                      )
                      :(null)}
                     
                    </Col>
                    <Col md="12 mb-3">
                      <Label className='text-uppercase' htmlFor="description">description</Label>
                      <Input className="form-control" name="description" type="textarea" 
                      
                      // placeholder="First name" 
                      
                      innerRef={register({ required: false })} />
                      <span>{errors.firstName && 'Please provide name name'}</span>
                     
                      {serverSideErrors?(
                        !serverSideErrors.description?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.description[0]}</div>)
                      )
                      :(null)}
                     
                    </Col>
                   
                  </div>
                 
                
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

export default SubServiceForm