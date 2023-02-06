import React from 'react'
import { Card, CardBody, CardHeader, Col, Label, Row } from 'reactstrap'


const SubServiceView = ({ subServiceViewData }) => {

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