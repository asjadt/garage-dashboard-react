import { City, Country } from "country-state-city";
import React, { useState } from "react";
import { FormGroup, Label, Input, Col, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

const GarageStep = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      
      <p>Garage Information</p>
      <div className="form-row mb-2">
                  <Input className="form-control" name="id" type="hidden" />

                    <Col md="6 mb-3">
                      <Label className='text-uppercase' htmlFor="name">Name</Label>
                      <Input className="form-control" name="name" type="text" 
                      
                      // placeholder="First name" 
                      onChange={props.handleChange}
                      value={props.data.name}
                       />
                    
                     
                      {props.serverSideErrors?(
                        !props.serverSideErrors["garage.name"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.name"][0]}</div>)
                      )
                      :(null)}
                     
                    </Col>
                    <Col md="6 mb-3">
                      <Label className='text-uppercase' htmlFor="about">About</Label>
                      <Input className="form-control" name="about" type="text" 
                        onChange={props.handleChange}
                        value={props.data.about}
                      // placeholder="Last name" 
                     />
                     
                    
                      {props.serverSideErrors?(
                        !props.serverSideErrors["garage.about"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.about"][0]}</div>)
                      )
                      :(null)}
                    </Col>
                    <Col md="6 mb-3">
                      <Label className='text-uppercase' htmlFor="validationCustomUsername">Email</Label>
                      <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>{"@"}</InputGroupText>
                      </InputGroupAddon>
                        <Input className="form-control" name="email" type="text" 
                          onChange={props.handleChange}
                          value={props.data.email}
                        // placeholder="email"
                        
                      />
                     
                       
                        {props.serverSideErrors?(
                        !props.serverSideErrors["user.email"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["user.email"][0]}</div>)
                      )
                      :(null)}
                      </InputGroup>
                    </Col>
                    <Col md="6 mb-3">
                      <Label className='text-uppercase' htmlFor="phone">Phone</Label>
                      <Input className="form-control" name="phone" type="text" 
                        onChange={props.handleChange}
                        value={props.data.phone}
                      // placeholder="phone"
                      
                     />
                  
                      {props.serverSideErrors?(
                        !props.serverSideErrors["user.phone"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["user.phone"][0]}</div>)
                      )
                      :(null)}
                    </Col>
                  </div>
    </>
  );
};

export default GarageStep;