import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap'
import SweetAlert from 'sweetalert2'
import { apiClient } from '../../../utils/apiClient';
import { BACKEND_API } from '../../../utils/backend';


const ServiceForm = ({toggleModal,fetchData,perPage,type,serviceUpdateData}) => {
    const { register, handleSubmit,setValue, errors,setError , watch } = useForm();
    const [serverSideErrors,setServerSideErrors] = useState(null);
    const [loading,setLoading] = useState(false);
    const [automobileCategories,setAutomobileCategories] = useState([]);
    const formValues = watch(); 
   
    useEffect(() => {
      loadAutomobileCategories()
        console.log(serviceUpdateData)
        if(type == "update") {
          const fields = ['id','name','description','image','automobile_category_id'];
          fields.forEach(field => setValue(field, serviceUpdateData[field]));
         console.log("serviceUpdateData",serviceUpdateData)
         setValue("category",serviceUpdateData.category?.name)
       
      
        }
        return () => {
            
        };
    }, []);

    const loadAutomobileCategories = () => {
        apiClient().get(`${BACKEND_API}/v1.0/automobile-categories/get/all`)
        .then(response => {
console.log(response.data)
setAutomobileCategories(response.data)
        })
        .catch(error => {
           if(error.response?.status == 401) {
            SweetAlert.fire({title:error.response.data.message, text:"Hello!!! You do not have permission.", icon:"warning"});
          }
          else {
            SweetAlert.fire({title:"something went wrong!!", text:"Please Try Again", icon:"warning"});
          }
        })
    }
    
  const onSubmit = data => {
    setLoading(true)
    setServerSideErrors(null)
    if(type == "update") {
      apiClient().put(`${BACKEND_API}/v1.0/services`,data)
      .then(response => {
          console.log(response.data)
          setLoading(false)
          if(response.data) {
              SweetAlert.fire({title:"Success", text:"Service Updated Successfully!", icon:"success"});
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
         else if(error.response?.status == 401) {
            SweetAlert.fire({title:error.response.data.message, text:"Hello!!! You do not have permission.", icon:"warning"});
          }
          else {
            SweetAlert.fire({title:"something went wrong!!", text:"Please Try Again", icon:"warning"});
          }
      })
  
    }
    if(type == "create") {
      apiClient().post(`${BACKEND_API}/v1.0/services`,data)
      .then(response => {
          console.log(response.data)
          setLoading(false)
          if(response.data) {
              SweetAlert.fire({title:"Success", text:"Service Created Successfully!", icon:"success"});
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
       else if(error.response?.status == 401) {
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
                <h5><span style={{textTransform:"capitalize"}}>{type}</span> Service</h5>
              </CardHeader>
              <CardBody>
                <Form className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                <div className='form-row mb-2'>
            

                  <Col md="6 mb-3">
                    <FormGroup>
                    <Label className='text-uppercase' htmlFor="automobile_category_id">Automobile Category</Label>
                    {console.log("category",formValues)}
                    <Input className="form-control" name="category" type="text" 
                      
                     readOnly
                      
                      innerRef={register({ required: false })} />
                    {/* <Input type="select" className="custom-select"  name="automobile_category_id"  innerRef={register({ required: false })} value={formValues.automobile_category_id?formValues.automobile_category_id:serviceUpdateData?.automobile_category_id} onChange={(e) => setValue("automobile_category_id",e.target.value)}>
                     
                      <option value="">{"Select Automobile Category"}</option>
                      {automobileCategories.map(el => {
                        return (
                            <option value={el.id} key={el.id}  >{el.name}</option>
                        )
                      })}
                    
                  
                    </Input> */}
                
                    {serverSideErrors?(
                        !serverSideErrors.automobile_category_id?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.automobile_category_id[0]}</div>)
                      )
                      :(null)}
                  </FormGroup>
                 
                    
                    </Col>
                  </div>
                  <div className="form-row mb-2">
                  <Input className="form-control" name="id" type="hidden" innerRef={register({ required: false })} />

                    <Col md="12 mb-3">
                      <Label className='text-uppercase' htmlFor="name">Name</Label>
                      <Input className="form-control" name="name" type="text" 
                      
                      // placeholder="First name" 
                      
                      innerRef={register({ required: false })} />
                      <span>{errors.name && 'Please provide First name'}</span>
                     
                      {serverSideErrors?(
                        !serverSideErrors.name?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.name[0]}</div>)
                      )
                      :(null)}
                     
                    </Col>

                    <Col md="12 mb-3">
                      <Label className='text-uppercase' htmlFor="description">Description</Label>
                      <Input className="form-control" name="description" type="textarea" 
                      
                      // placeholder="First name" 
                      
                      innerRef={register({ required: false })} />
                      <span>{errors.description && 'Please provide First name'}</span>
                     
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

export default ServiceForm