import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap'
import SweetAlert from 'sweetalert2'
import { apiClient } from '../../../utils/apiClient';
import { BACKEND_API } from '../../../utils/backend';

const UserView = ({toggleModal,userViewData}) => {
  
 

    useEffect(() => {
        console.log(userViewData)
        return () => {  
        };
    }, []);


 

  return (
    <>
    <Row>
        <Col sm="12">
        <Card>
              <CardHeader>
                <h5><span style={{textTransform:"capitalize"}}>View</span> User</h5>
              </CardHeader>
              <CardBody>
             
                  <div className="form-row mb-2">
                    <Col md="6 mb-3">
                      <Label htmlFor="first_Name">First Name</Label>
                      <p>{userViewData.first_Name}</p>
                     
                     
                    
                    </Col>
                    <Col md="6 mb-3">
                      <Label htmlFor="last_Name">Last Name</Label>
                      <p>{userViewData.last_Name}</p>
                      
                    </Col>
                    <Col md="6 mb-3">
                      <Label htmlFor="validationCustomUsername">Email</Label>
                    
                        <p>{userViewData.email}</p>
                  
                     
                    </Col>
                    <Col md="6 mb-3">
                      <Label htmlFor="phone">Phone</Label>
                     
                      <p>{userViewData.phone}</p>
                    </Col>
                  </div>
                 
                  <div className='form-row mb-2'>
                  <Col md="6 mb-3">
                      <Label htmlFor="country">Country</Label>
                      
                      <p>{userViewData.country}</p>
                    </Col>
                    <Col md="6 mb-3">
                      <Label htmlFor="city">City</Label>
                      
                      <p>{userViewData.city}</p>
                    </Col>
                    <Col md="6 mb-3">
                      <Label htmlFor="postcode">Postcode</Label>
                    
                      <p>{userViewData.postcode}</p>
                    </Col>
                  <Col md="6 mb-3">
                      <Label htmlFor="phone">Address Line 1</Label>
                      
                      <p>{userViewData.address_line_1}</p>
                    </Col>
                    <Col md="6 mb-3">
                      <Label htmlFor="phone">Address Line 2</Label>
                   
                      <p>{userViewData.address_line_2}</p>
                    </Col>
                   
                  </div>
                  <div className='form-row mb-2'>
                  <Col md="6 mb-3">
           
                    <Label htmlFor="phone">Role</Label>
                    <p>{userViewData.roles[0].name}</p>
                
          
                 
                    
                    </Col>
                  </div>
                
                
         
          
              </CardBody>
            </Card>
        </Col>
    </Row>
 


    
    </>
  )
}

export default UserView