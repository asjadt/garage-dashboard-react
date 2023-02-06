import React from "react";
import { Col, Input, InputGroup, InputGroupAddon, InputGroupText, Label } from "reactstrap";
import styles from "./UserStep.module.css";



const UserStep = props => {
  if (props.currentStep !== 1) {
    return null;
  } 
  return (
    <>
      <div className="form-row mb-2">
        <Input className="form-control" name="id" type="hidden" />

        <Col md="6 mb-3">
          <Label className='' htmlFor="first_Name">First Name*</Label>
          <Input className="form-control" name="first_Name" type="text"
            // placeholder="First name"
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
          <Label className='' htmlFor="last_Name">Last Name*</Label>
          <Input className="form-control" name="last_Name" type="text"
            onChange={props.handleChange}
            value={props.data.last_Name}
            // placeholder="Last name"
          />


          {props.serverSideErrors ? (
            !props.serverSideErrors["user.last_Name"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["user.last_Name"][0]}</div>)
          )
            : (null)}
        </Col>
        <Col md="6 mb-3">
          <Label className='' htmlFor="validationCustomUsername">Email*</Label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>{"@"}</InputGroupText>
            </InputGroupAddon>
            <Input className="form-control" name="email" type="text"
              onChange={props.handleChange}
              value={props.data.email}
              // placeholder="email"
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
          <Label className='' htmlFor="phone">Phone Number*</Label>
          <Input className={`${styles.numberField} form-control`} name="phone" type="number"
            onChange={props.handleChange}
            value={props.data.phone}
            // placeholder="phone"

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
          <Label className='' htmlFor="password">Password* <small><small>( password must have minimum 8 character )</small></small></Label>
          <Input className="form-control" name="password" type="password"
            onChange={props.handleChange}
            value={props.data.password}
            // placeholder="password must have minimum 8 character"
          />

          {props.serverSideErrors ? (
            !props.serverSideErrors["user.password"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["user.password"][0]}</div>)
          )
            : (null)}
        </Col>
        <Col md="6 mb-3">
          <Label className='' htmlFor="password_confirmation">Confirm Password*</Label>
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
    </>
  );
};

export default UserStep;
