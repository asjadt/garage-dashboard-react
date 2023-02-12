import React from 'react';
import { Card, CardBody, Col, Label, Row } from 'reactstrap';

const FuelStationView = ({ toggleModal, fuelStationViewData }) => {


  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <div className="form-row mb-2">
                <Col md="6 mb-3">
                  <Label className={"text-uppercase"} htmlFor="first_Name">Name</Label>
                  <p>{fuelStationViewData.name}</p>
                </Col>
                <Col md="6 mb-3">
                  <Label className={"text-uppercase"} htmlFor="last_Name">Description</Label>
                  <p>{fuelStationViewData.description}</p>
                </Col>
                <Col md="6 mb-3">
                  <Label className={"text-uppercase"} htmlFor="validationCustomUsername">Address</Label>
                  <p>{fuelStationViewData.address}</p>
                </Col>
                <Col md="6 mb-3">
                  
                </Col>
                <Col md="6 mb-3">
                  <Label className={"text-uppercase"} htmlFor="phone">Openning Time</Label>
                  <p>{fuelStationViewData.opening_time}</p>
                </Col>
                <Col md="6 mb-3">
                  <Label className={"text-uppercase"} htmlFor="phone">Closing Time</Label>
                  <p>{fuelStationViewData.closing_time}</p>
                </Col>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default FuelStationView