import React, { useState } from "react";
import { Col, Input, Label, Row } from "reactstrap";

const ServiceStep = props => {

  const [allTick, setAllTick] = useState(true);


  if (props.currentStep !== 3) {
    return null;
  }



  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-3">
        <div className={`w-50 w-xm-100 h-25 border border-primary px-2 pt-2 d-flex align-item-center rounded`}>
          <Label className="d-block" for={`category-all-select`} >
            <Input
              className="checkbox_animated"
              id={`category-all-select`}
              type="checkbox"
              name={`category-all-select`}
              defaultChecked={allTick}
              onChange={props.handleServiceChangeAll}
            /> Tick/untick all Services
          </Label>
        </div>
      </div>
      {
        props.data.map((el, index) => {
          return (
            <div className="w-100" key={index}>
              <Input className="form-control" name="id" type="hidden" />

              <div className="form-row mb-2 g-2 " >
                {el.services.map((service, serviceIndex) => {
                  return (
                    <React.Fragment key={serviceIndex}>
                      {console.log(el.services)}
                      <Col md="4 mb-4 mx-0 border border-primary p-2 rounded" >
                        <Label className="d-block" for={`category-${index}-service-${serviceIndex}`} >
                          <Input
                            defaultChecked={allTick}
                            data-testid={`category-${index}-service-${serviceIndex}`}
                            className="checkbox_animated"
                            id={`category-${index}-service-${serviceIndex}`}
                            value={el.services[serviceIndex].checked}
                            checked={el.services[serviceIndex].checked || false}
                            type="checkbox"
                            name={`category-${index}-service-${serviceIndex}`}
                            onChange={props.handleServiceChange}
                          /> {service.name}
                        </Label>
                        <hr />
                        <Row>
                          {
                            service.sub_services.map((sub_service, subServiceIndex) => {
                              return (
                                <Col md="12" key={subServiceIndex}>
                                  <Label className="d-block  pl-4" for="chk-ani">
                                    <Input
                                      data-testid={`category-${index}-service-${serviceIndex}-sub_service-${subServiceIndex}`}
                                      className="checkbox_animated"
                                      id={`category-${index}-service-${serviceIndex}-sub_service-${subServiceIndex}`}
                                      value={`category-${index}-service-${serviceIndex}-sub_service-${subServiceIndex}`}
                                      type="checkbox" name={`category-${index}-service-${serviceIndex}-sub_service-${subServiceIndex}`}
                                      checked={el.services[serviceIndex].sub_services[subServiceIndex].checked || false}
                                      onChange={props.handleSubServiceChange}
                                    />
                                    {sub_service.name}
                                  </Label>
                                </Col>
                              )
                            })
                          }
                        </Row>
                      </Col>
                    </React.Fragment>
                  )
                })}
              </div>

              <>
                <h2 className="text-center">Which of these make do this garage offer?</h2>
                <div className="d-flex justify-content-center align-items-center my-3">
                  <div className="w-50 w-xm-100 h-25 border border-primary px-2 pt-2 d-flex align-item-center rounded">
                    <Label className="d-block" for={`category-all-select`} >
                      <Input
                        className="checkbox_animated"
                        id={`category-all-select`}
                        type="checkbox"
                        name={`category-all-select`}
                        defaultChecked={allTick}
                        onChange={props.handleMakeChangeAll}
                      /> Tick/untick all Makes
                    </Label>
                  </div>
                </div>
                {/* automobile_makes */}
                <div className="form-row mb-2" >
                  {el.automobile_makes.map((make, makeIndex) => {
                    return (
                      <React.Fragment key={makeIndex}>
                        <Col md="4 mb-4 mx-0 border border-primary p-2 rounded" key={makeIndex}>
                          <Label className="d-block" for={`category-${index}-make-${makeIndex}`} >
                            <Input
                              className="checkbox_animated"
                              id={`category-${index}-make-${makeIndex}`}
                              value={el.automobile_makes[makeIndex].checked}
                              checked={el.automobile_makes[makeIndex].checked || false}
                              type="checkbox"
                              name={`category-${index}-make-${makeIndex}`}
                              onChange={props.handleMakeChange}
                            /> {make.name}
                          </Label>
                          <hr />
                          <Row>
                            {
                              make.models.map((model, modelIndex) => {
                                return (
                                  <Col md="12" key={modelIndex}>
                                    <Label className="d-block pl-4" for="chk-ani">
                                      <Input
                                        className="checkbox_animated"
                                        id={`category-${index}-make-${makeIndex}-model-${modelIndex}`}
                                        value={`category-${index}-make-${makeIndex}-model-${modelIndex}`}
                                        type="checkbox"
                                        name={`category-${index}-make-${makeIndex}-model-${modelIndex}`}
                                        checked={el.automobile_makes[makeIndex].models[modelIndex].checked || false}
                                        onChange={props.handleModelChange}
                                      />
                                      {model.name}
                                    </Label>
                                  </Col>
                                )
                              })
                            }
                          </Row>
                        </Col>
                      </React.Fragment>
                    )
                  })}
                </div>
              </>
            </div>
          )
        })
      }
    </>
  );
};

export default ServiceStep;
