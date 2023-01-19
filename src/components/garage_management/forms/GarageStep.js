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
                        !props.serverSideErrors["garage.email"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.email"][0]}</div>)
                      )
                      :(null)}
                      </InputGroup>
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
                      <Label className='text-uppercase' htmlFor="web_page">Web Page</Label>
                      <Input className="form-control" name="web_page" type="text" 
                        onChange={props.handleChange}
                        value={props.data.web_page}
                      // placeholder="phone"
                      
                     />
                  
                      {props.serverSideErrors?(
                        !props.serverSideErrors["garage.web_page"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.web_page"][0]}</div>)
                      )
                      :(null)}
                    </Col>

                    <Col md="6 mb-3">
                      <Label className='text-uppercase' htmlFor="phone">Phone</Label>
                      <Input className="form-control" name="phone" type="text" 
                        onChange={props.handleChange}
                        value={props.data.phone}
                      // placeholder="phone"
                      
                     />
                  
                      {props.serverSideErrors?(
                        !props.serverSideErrors["garage.phone"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.phone"][0]}</div>)
                      )
                      :(null)}
                    </Col>


                    <Col md="6 mb-3">
                      <Label className='text-uppercase' htmlFor="additional_information">Additional Information</Label>
                      <Input className="form-control" name="additional_information" type="text" 
                        onChange={props.handleChange}
                        value={props.data.additional_information}
                      // placeholder="Last name" 
                     />
                     
                    
                      {props.serverSideErrors?(
                        !props.serverSideErrors["garage.additional_information"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.additional_information"][0]}</div>)
                      )
                      :(null)}
                    </Col>
                  </div>


                  <div className='form-row mb-2'>
                  <Col md="6 mb-3">
                    <FormGroup>
                    <Label className='text-uppercase' htmlFor="country">COUNTRY</Label>
                    <Input type="select" className="custom-select"  name="country"   defaultValue={"GB"} value={props.data.country} onChange={props.handleChange} >
                     
                     <option value="">{"SELECT COUNTRY"}</option>
                     {Country.getAllCountries().map(el => {
                
                       return (
                           <option value={el.isoCode} key={el.id}  >{el.name}</option>
                       )
                     })}
                   
                 
                   </Input>
               
                   {props.serverSideErrors?(
                       !props.serverSideErrors["garage.country"]?(
                           <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                       ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.country"][0]}</div>)
                     )
                     :(null)}
                  </FormGroup>
                 
                    
                    </Col>
                    <Col md="6 mb-3">
                    <FormGroup>
                    <Label className='text-uppercase' htmlFor="city">CITY</Label>
               
                    <Input type="select" className="custom-select"  name="city"   value={props.data.city} onChange={props.handleChange}>
                     
                     <option value="">{"SELECT CITY"}</option>
                     {City.getCitiesOfCountry(props.data.country).map(el => {
                       return (
                           <option value={el.name} key={el.id}  >{el.name}</option>
                       )
                     })}
                   
                 
                   </Input>
               
                   {props.serverSideErrors?(
                       !props.serverSideErrors["garage.city"]?(
                           <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                       ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.city"][0]}</div>)
                     )
                     :(null)}
                  </FormGroup>
                 
                    
                    </Col>
                  
                    <Col md="6 mb-3">
                      <Label className='text-uppercase' htmlFor="postcode" >Postcode</Label>
                      <Input className="form-control" name="postcode" type="text" 
                        onChange={props.handleChange}
                        value={props.data.postcode}
                      // placeholder="postcode"

                    />
                     
                      {props.serverSideErrors?(
                        !props.serverSideErrors["garage.postcode"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.postcode"][0]}</div>)
                      )
                      :(null)}
                    </Col>
                  <Col md="6 mb-3">
                      <Label className='text-uppercase' htmlFor="phone">Address Line 1</Label>
                      <Input className="form-control" name="address_line_1" type="textarea" 
                        onChange={props.handleChange}
                        value={props.data.address_line_1}
                      // placeholder="address line 1" 
                      
                 />
                    
                      {props.serverSideErrors?(
                        !props.serverSideErrors["garage.address_line_1"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.address_line_1"][0]}</div>)
                      )
                      :(null)}
                    </Col>
                    <Col md="6 mb-3">
                      <Label className='text-uppercase' htmlFor="phone">Address Line 2</Label>
                      <Input className="form-control" name="address_line_2" type="textarea" 
                        onChange={props.handleChange}
                        value={props.data.address_line_2}
                      // placeholder="address line 2" 
                      
                      />
                    
                      {props.serverSideErrors?(
                        !props.serverSideErrors["garage.address_line_2"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.address_line_2"][0]}</div>)
                      )
                      :(null)}
                    </Col>
                   
                  </div>

      <div className="form-row mb-2">
                  <Input className="form-control" name="id" type="hidden" />

                    <Col md="6 mb-3">
                      <Label className='text-uppercase' htmlFor="is_mobile_garage">Mobile Garage</Label>
                      <Input className="form-control" name="is_mobile_garage" type="select" 
                      
                      // placeholder="First name" 
                      onChange={props.handleChange}
                      value={props.data.is_mobile_garage}
                       >
<option value={1}>
yes
</option>
<option value={0}>
no
</option>

                       </Input>
                    
                     
                      {props.serverSideErrors?(
                        !props.serverSideErrors["garage.is_mobile_garage"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.is_mobile_garage"][0]}</div>)
                      )
                      :(null)}
                     
                    </Col>
            <Col md="6 mb-3">
                      <Label className='text-uppercase' htmlFor="wifi_available">Wifi Available</Label>
                      <Input className="form-control" name="wifi_available" type="select" 
                      
                      // placeholder="First name" 
                      onChange={props.handleChange}
                      value={props.data.wifi_available}
                       >
<option value={1}>
yes
</option>
<option value={0}>
no
</option>

                       </Input>
                    
                     
                      {props.serverSideErrors?(
                        !props.serverSideErrors["garage.wifi_available"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.wifi_available"][0]}</div>)
                      )
                      :(null)}
                     
                    </Col>
                    
                 

                    <Col md="6 mb-3">
                      <Label className='text-uppercase' htmlFor="labour_rate">labour_
                       rate</Label>
                      <Input className="form-control" name="labour_rate" type="text" 
                        onChange={props.handleChange}
                        value={props.data.labour_rate}
                      // placeholder="Last name" 
                     />
                     
                    
                      {props.serverSideErrors?(
                        !props.serverSideErrors["garage.labour_rate"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.labour_rate"][0]}</div>)
                      )
                      :(null)}
                    </Col>
                  
                    <Col md="6 mb-3">
                      <Label className='text-uppercase' htmlFor="average_time_slot">Average Time Slot</Label>
                      <Input className="form-control" name="average_time_slot" type="text" 
                        onChange={props.handleChange}
                        value={props.data.average_time_slot}
                      // placeholder="phone"
                      
                     />
                  
                      {props.serverSideErrors?(
                        !props.serverSideErrors["garage.average_time_slot"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.average_time_slot"][0]}</div>)
                      )
                      :(null)}
                    </Col>

               
                  </div>

    </>
  );
};

export default GarageStep;