import { City, Country } from "country-state-city";
import React from "react";
import { Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label } from "reactstrap";
import AutoComplete from "../../AutoComplete/AutoComplete";

const GarageStep = props => {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <>
      <div className="form-row mb-2">
        <Input className="form-control" name="id" type="hidden" />
        {/* GARAGE NAME FIELD  */}
        <Col md="6 mb-3">
          <Label className='' htmlFor="name">Garage Name*</Label>
          <Input className="form-control" name="name" type="text"
            data-testid="registration_garage_name"
            // placeholder="Garage name"
            onChange={props.handleChange}
            value={props.data.name}
          />
          {props.serverSideErrors && (
            !props.serverSideErrors["garage.name"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.name"][0]}</div>)
          )
          }
        </Col>

        {/* EMAIL FIELD  */}
        <Col md="6 mb-3">
          <Label className='' htmlFor="validationCustomUsername">Email*</Label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>{"@"}</InputGroupText>
            </InputGroupAddon>
            <Input className="form-control" name="email" type="text"
              data-testid="registration_garage_email"
              onChange={props.handleChange}
              value={props.data.email}
              // placeholder="email"
            />
            {props.serverSideErrors && (
              !props.serverSideErrors["garage.email"] ? (
                <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
              ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.email"][0]}</div>)
            )
            }
          </InputGroup>
        </Col>

        {/* PHONE FIELD  */}
        <Col md="6 mb-3">
          <Label className='' htmlFor="phone">Phone Number</Label>
          <Input className="form-control" name="phone" type="text"
            data-testid="registration_garage_phone"
            onChange={props.handleChange}
            value={props.data.phone}
            // placeholder="phone"
          />

          {props.serverSideErrors && (
            !props.serverSideErrors["garage.phone"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.phone"][0]}</div>)
          )
          }
        </Col>

        {/* ADDRESS LINE 1 FIELD  */}
        <Col md="6 mb-3">
          <Label className='' htmlFor="phone">Address Line 1*</Label>

          <AutoComplete
            setPlaceAutoComplete={props.setPlaceAutoComplete}
            class_Name={'form-control'}
            name='address_line_1'
            id={'address'}
            // placeholder="address line 1"
          />
          {props?.distanceError !== ''&& <div className="invalid-feedback" style={{ display: "block" }}>{props?.distanceError}</div>}
          {props.serverSideErrors && (
            !props.serverSideErrors["garage.address_line_1"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.address_line_1"][0]}</div>)
          )
          }
        </Col>
      </div>


      <div className='form-row mb-2'>

        {/* ADDRESS LINE 2 FIELD  */}
        <Col md="6 mb-3">
          <Label className='' htmlFor="phone">Address Line 2</Label>
          <AutoComplete
            setPlaceAutoComplete={props.setPlaceAutoComplete2}
            class_Name={'form-control'}
            name='address_line_1'
            id={'address'}
            // placeholder="address line 2"
          />
          {props.serverSideErrors && (
            !props.serverSideErrors["garage.address_line_2"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.address_line_2"][0]}</div>)
          )
          }
        </Col>

        {/* POST CODE FIELD  */}
        <Col md="6 mb-3">
          <Label className='' htmlFor="postcode" >Postcode*</Label>
          <Input className="form-control"
            data-testid="registration_garage_postcode"
            name="postcode"
            type="text"
            onChange={props.handleChange}
            value={props.data.postcode}
            // placeholder="postcode"
          />

          {props.serverSideErrors && (
            !props.serverSideErrors["garage.postcode"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.postcode"][0]}</div>)
          )
          }
        </Col>

        {/* COUNTRY FIELD  */}
        <Col md="6 mb-3">
          <FormGroup>
            <Label className='' htmlFor="country">Country*</Label>
            <Input type="select" className="custom-select"
              data-testid="registration_garage_country"
              name="country"
              defaultValue={"GB"}
              value={props.data.country}
              onChange={props.handleChange} >
              <option value="">{"SELECT COUNTRY"}</option>
              {Country.getAllCountries().map(el => {
                return (
                  <option value={el.isoCode} key={el.id}  >{el.name}</option>
                )
              })}
            </Input>
            {props.serverSideErrors && (
              !props.serverSideErrors["garage.country"] ? (
                <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
              ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.country"][0]}</div>)
            )
            }
          </FormGroup>
        </Col>

        {/* CITY FIELD  */}
        <Col md="6 mb-3">
          <FormGroup>
            <Label className='' htmlFor="city">City*</Label>
            <Input type="select"
              data-testid="registration_garage_city"
              className="custom-select"
              name="city"
              value={props.data.city}
              onChange={props.handleChange}>
              <option value="">{"SELECT CITY"}</option>
              {City.getCitiesOfCountry(props.data.country).map(el => {
                return (
                  <option value={el.name} key={el.id}>{el.name}</option>
                )
              })}
            </Input>
            {props.serverSideErrors && (
              !props.serverSideErrors["garage.city"] ? (
                <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
              ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.city"][0]}</div>)
            )
            }
          </FormGroup>
        </Col>
      </div>

      <div className='form-row mb-2'>
        {/* ABOUT FIELD  */}
        <Col md="6 mb-3">
          <Label className='' htmlFor="about">About</Label>
          <Input className="form-control" name="about" type="textarea"
            data-testid="registration_garage_about"
            onChange={props.handleChange}
            value={props.data.about}
            // placeholder="about"
          />
          {props.serverSideErrors && (
            !props.serverSideErrors["garage.about"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.about"][0]}</div>)
          )
          }
        </Col>

        {/* ADDITIONAL INFORMATION  */}
        <Col md="6 mb-3">
          <Label className='' htmlFor="additional_information">Additional Information</Label>
          <Input className="form-control" name="additional_information" type="textarea"
            data-testid="registration_garage_additional_information"
            onChange={props.handleChange}
            value={props.data.additional_information}
            // placeholder="additional information"
          />
          {props.serverSideErrors && (
            !props.serverSideErrors["garage.additional_information"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.additional_information"][0]}</div>)
          )
          }
        </Col>
      </div>

      <div className="form-row mb-2">
        {/* WEB PAGE  */}
        <Col md="6 mb-3">
          <Label className='' htmlFor="web_page">Web Page</Label>
          <Input className="form-control" name="web_page" type="text"
            data-testid="registration_garage_web_page"
            onChange={props.handleChange}
            value={props.data.web_page}
            // placeholder="web page"
          />
          {props.serverSideErrors && (
            !props.serverSideErrors["garage.web_page"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.web_page"][0]}</div>)
          )
          }
        </Col>


        {/* MOBILE GARAGE FIELD  */}
        <Input className="form-control" name="id" type="hidden" />
        <Col md="6 mb-3">
          <Label className='' htmlFor="is_mobile_garage">Mobile Garage</Label>
          <Input className="form-control"
            data-testid="registration_garage_is_mobile_garage"
            name="is_mobile_garage"
            type="select"
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
          {
            props.serverSideErrors && (
              !props.serverSideErrors["garage.is_mobile_garage"] ? (
                <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
              ) : (
                <div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.is_mobile_garage"][0]}</div>
              )
            )
          }
        </Col>

        {/* WIFI AVAILABLE  */}
        <Col md="6 mb-3">
          <Label className='' htmlFor="wifi_available">Wifi Available</Label>
          <Input className="form-control"
            data-testid="registration_garage_wifi_available"
            name="wifi_available"
            type="select"
            onChange={props.handleChange}
            value={props.data.wifi_available}>
            <option value={1}>
              yes
            </option>
            <option value={0}>
              no
            </option>
          </Input>
          {props.serverSideErrors && (
            !props.serverSideErrors["garage.wifi_available"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.wifi_available"][0]}</div>)
          )
          }
        </Col>

        {/* LABOUR RATE  */}
        <Col md="6 mb-3">
          <Label className='' htmlFor="labour_rate">Labour Rate</Label>
          <Input className="form-control"
            data-testid="registration_garage_labour_rate"
            name="labour_rate"
            type="text"
            // placeholder="labour rate"
            onChange={props.handleChange}
            value={props.data.labour_rate}
          />
          {props.serverSideErrors && (
            !props.serverSideErrors["garage.labour_rate"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.labour_rate"][0]}</div>)
          )
          }
        </Col>

        {/* AVERAGE TIME SLOT  */}
        <Col md="6 mb-3">
          <Label className='' htmlFor="average_time_slot">Average Time Slot</Label>
          <Input className="form-control"
            data-testid="registration_garage_average_time_slot"
            name="average_time_slot"
            type="text"
            // placeholder="time"
            onChange={props.handleChange}
            value={props.data.average_time_slot}
          />

          {props.serverSideErrors && (
            !props.serverSideErrors["garage.average_time_slot"] ? (
              <div className="valid-feedback" style={{ display: "block" }}>{"Looks good!"}</div>
            ) : (<div className="invalid-feedback" style={{ display: "block" }}>{props.serverSideErrors["garage.average_time_slot"][0]}</div>)
          )
          }
        </Col>
      </div>

    </>
  );
};

export default GarageStep;