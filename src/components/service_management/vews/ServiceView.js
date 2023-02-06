import React from 'react';
import { Card, CardBody, CardHeader, Col, Label, Row } from 'reactstrap';

const ServiceView = ({ serviceViewData }) => {

  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5><span style={{ textTransform: "capitalize" }}>View</span> Service</h5>
            </CardHeader>
            <CardBody>
              <div className='form-row mb-2'>
                <Col md="6 mb-3">
                  <Label className={"text-uppercase"} htmlFor="phone">Automobile Category</Label>
                  <p>{serviceViewData.category?.name}</p>
                </Col>
              </div>
              <div className="form-row mb-2">
                <Col md="12 mb-3">
                  <Label className={"text-uppercase"} htmlFor="name"> Name</Label>
                  <p>{serviceViewData.name}</p>
                </Col>
                <Col md="12 mb-3">
                  <Label className={"text-uppercase"} htmlFor="description">Description</Label>
                  <p>{serviceViewData.description}</p>
                </Col>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>




    </>
  )
}

export default ServiceView