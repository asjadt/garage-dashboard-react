import { Country } from 'country-state-city';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap'
import SweetAlert from 'sweetalert2'
import { apiClient } from '../../../utils/apiClient';
import { BACKEND_API } from '../../../utils/backend';

const SubServiceView = ({toggleModal,subServiceViewData}) => {
  
 

    useEffect(() => {
        console.log(subServiceViewData)
        return () => {  
        };
    }, []);


 

  return (
    <>
    <Row>
        <Col sm="12">
        <Card>
              <CardHeader>
                <h5><span style={{textTransform:"capitalize"}}>View</span> Service</h5>
              </CardHeader>
              <CardBody>
              <div className='form-row mb-2'>
                  <Col md="6 mb-3">
           
                    <Label className={"text-uppercase"} htmlFor="phone">Sub Service</Label>
                    <p>{subServiceViewData?.service?.name}</p>
                
          
                 
                    
                    </Col>
                  </div>
                  <div className="form-row mb-2">
                    <Col md="12 mb-3">
                      <Label className={"text-uppercase"} htmlFor="name"> Name</Label>
                      <p>{subServiceViewData?.name}</p>
                     
                     
                    
                    </Col>
                    <Col md="12 mb-3">
                      <Label className={"text-uppercase"} htmlFor="description">Description</Label>
                      <p>{subServiceViewData?.description}</p>
                      
                    </Col>
                   
                  
                  </div>
                 
                
                  
                
                
         
          
              </CardBody>
            </Card>
        </Col>
    </Row>
 


    
    </>
  )
}

export default SubServiceView