import { City, Country } from "country-state-city";
import React from "react";
import { Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label } from "reactstrap";
import styles from "./UserStep.module.css";



const UserStep = props => {

  if (props.currentStep !== 1) {
    return null;
  }


  return (
    <>
      <p>User Information</p>
      <div className="form-row mb-2">
        <Input className="form-control" name="id" type="hidden" />

        <Col md="6 mb-3">
          <Label className='text-uppercase' htmlFor="first_Name">First Name</Label>
          <Input className="form-control" name="first_Name" type="text"
            placeholder="First name"
            onChange={props.handleChange}
            value={props.data.first_Name}
          />


          {props.serverSideErrors ? (
            !props.serverSideErrors["user.first_Name"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["user.first_Name"][0]}</div>)
          )
            : (null)}

        </Col>
        <Col md="6 mb-3">
          <Label className='text-uppercase' htmlFor="last_Name">Last Name</Label>
          <Input className="form-control" name="last_Name" type="text"
            onChange={props.handleChange}
            value={props.data.last_Name}
            placeholder="Last name"
          />


          {props.serverSideErrors ? (
            !props.serverSideErrors["user.last_Name"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["user.last_Name"][0]}</div>)
          )
            : (null)}
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
              placeholder="email"
            />


            {props.serverSideErrors ? (
              !props.serverSideErrors["user.email"] ? (
                <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
              ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["user.email"][0]}</div>)
            )
              : (null)}
          </InputGroup>
        </Col>
        <Col md="6 mb-3">
          <Label className='text-uppercase' htmlFor="phone">Phone</Label>
          <Input className={`${styles.numberField} form-control`} name="phone" type="number"
            onChange={props.handleChange}
            value={props.data.phone}
            placeholder="phone"

          />

          {props.serverSideErrors ? (
            !props.serverSideErrors["user.phone"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["user.phone"][0]}</div>)
          )
            : (null)}
        </Col>
      </div>

      <div className="form-row mb-2">
        <Col md="6 mb-3">
          <Label className='text-uppercase' htmlFor="password">Password</Label>
          <Input className="form-control" name="password" type="password"
            onChange={props.handleChange}
            value={props.data.password}
          // placeholder="password" 

          />


          {props.serverSideErrors ? (
            !props.serverSideErrors["user.password"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["user.password"][0]}</div>)
          )
            : (null)}
        </Col>
        <Col md="6 mb-3">
          <Label className='text-uppercase' htmlFor="password_confirmation">Confirm Password</Label>
          <Input className="form-control" id="password_confirmation" name="password_confirmation" type="password"
            onChange={props.handleChange}
            value={props.data.password_confirmation}
          // placeholder="confirm password" 
          />


          {props.serverSideErrors ? (
            !props.serverSideErrors["user.password"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["user.password"][0]}</div>)
          )
            : (null)}
        </Col>





      </div>
      <div className='form-row mb-2'>
        <Col md="6 mb-3">
          <FormGroup>
            <Label className='text-uppercase' htmlFor="country">COUNTRY</Label>
            <Input type="select" className="custom-select" name="country" defaultValue={"GB"} value={props.data.country} onChange={props.handleChange} >

              <option value="">{"SELECT COUNTRY"}</option>
              {Country.getAllCountries().map(el => {

                return (
                  <option value={el.isoCode} key={el.id}  >{el.name}</option>
                )
              })}


            </Input>

            {props.serverSideErrors ? (
              !props.serverSideErrors["user.country"] ? (
                <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
              ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["user.country"][0]}</div>)
            )
              : (null)}
          </FormGroup>


        </Col>
        <Col md="6 mb-3">
          <FormGroup>
            <Label className='text-uppercase' htmlFor="city">CITY</Label>

            <Input type="select" className="custom-select" name="city" value={props.data.city} onChange={props.handleChange}>

              <option value="">{"SELECT CITY"}</option>
              {City.getCitiesOfCountry(props.data.country).map(el => {
                return (
                  <option value={el.name} key={el.id}  >{el.name}</option>
                )
              })}


            </Input>

            {props.serverSideErrors ? (
              !props.serverSideErrors["user.city"] ? (
                <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
              ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["user.city"][0]}</div>)
            )
              : (null)}
          </FormGroup>


        </Col>

        <Col md="6 mb-3">
          <Label className='text-uppercase' htmlFor="postcode" >Postcode</Label>
          <Input className="form-control" name="postcode" type="text"
            onChange={props.handleChange}
            value={props.data.postcode}
          // placeholder="postcode"

          />

          {props.serverSideErrors ? (
            !props.serverSideErrors["user.postcode"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["user.postcode"][0]}</div>)
          )
            : (null)}
        </Col>
        <Col md="6 mb-3">
          <Label className='text-uppercase' htmlFor="phone">Address Line 1</Label>
          <Input className="form-control" name="address_line_1" type="textarea"
            onChange={props.handleChange}
            value={props.data.address_line_1}
          // placeholder="address line 1" 

          />

          {props.serverSideErrors ? (
            !props.serverSideErrors["user.address_line_1"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["user.address_line_1"][0]}</div>)
          )
            : (null)}
        </Col>
        <Col md="6 mb-3">
          <Label className='text-uppercase' htmlFor="phone">Address Line 2</Label>
          <Input className="form-control" name="address_line_2" type="textarea"
            onChange={props.handleChange}
            value={props.data.address_line_2}
          // placeholder="address line 2" 

          />

          {props.serverSideErrors ? (
            !props.serverSideErrors["user.address_line_2"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["user.address_line_2"][0]}</div>)
          )
            : (null)}
        </Col>

      </div>
      {/* <div className='form-row mb-2'>
                  <Col md="6 mb-3">
                    <FormGroup>
                    <Label className='text-uppercase' htmlFor="role">Role</Label>
                    <Input type="select" className="custom-select"  name="role"  value={formValues.role?formValues.role:userUpdateData?.roles[0].name} onChange={(e) => setValue("role",e.target.value)}>
                     
                      <option value="">{"Open this select Role"}</option>
                      {roles.map(el => {
                        return (
                            <option value={el.name} key={el.id}  >{el.name}</option>
                        )
                      })}
                    
                  
                    </Input>
                
                    {serverSideErrors?(
                        !serverSideErrors.role?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{serverSideErrors.role[0]}</div>)
                      )
                      :(null)}
                  </FormGroup>
                 
                    
                    </Col>
                  </div> */}
    </>
  );
};

export default UserStep;
