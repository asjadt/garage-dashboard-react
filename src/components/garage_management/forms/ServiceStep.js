import React, { useEffect, useState } from "react";
import { Accordion } from 'react-bootstrap';
import { Card, CardBody, CardHeader, Col, Input, Label } from "reactstrap";

const ServiceStep = props => {
  const [collapseId, setCollapseId] = useState([{ id: undefined, status: false }]);

  const [allTick, setAllTick] = useState(true);

  useEffect(() => {
    props.data.map((el, index) => { setCollapseId(el?.automobile_makes.map((make, makeIndex) => { return { id: makeIndex, status: false } })) })
  }, [])


  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <>
      <h2 className="text-center">Which of these services do this garage offer?</h2>
      {props.serverSideErrors && (
        !props.serverSideErrors["service.0.services"] ? (
          <div className="valid-feedback text-center" style={{ display: "block" }}>{"Looks good!"}</div>
        ) : (<div className="invalid-feedback text-center" style={{ display: "block" }}>{props.serverSideErrors["service.0.services"][0]} service</div>)
      )}
      <div className="d-flex justify-content-center align-items-center my-3">
        <div sm={`w-100`} className={`w-50 w-xm-100 h-25 border border-primary px-2 pt-2 d-flex align-item-center rounded`}>
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

              <div className="card-columns" >
                {el.services.map((service, serviceIndex) => {
                  return (
                    <Accordion md="card-body border border-primary rounded " key={`${serviceIndex}`}>
                      <Card className="shadow" >
                        <CardHeader className="p-0 pt-1 w-100">
                          <Accordion.Toggle as={Card.Header} className="btn pt-2  h-100 d-flex w-100" color="default" eventKey={`${serviceIndex}`}>
                            <Label className="d-block" for={`category-${index}-service-${serviceIndex}`} >
                              <Input
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
                          </Accordion.Toggle>
                        </CardHeader>
                        <Accordion.Collapse eventKey={`${serviceIndex}`}>
                          <CardBody className="px-0">
                            {
                              service.sub_services.map((sub_service, subServiceIndex) => {
                                return (
                                  <Col md="12" key={subServiceIndex}>
                                    <Label className="d-block pl-4" for="chk-ani">
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
                          </CardBody>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  )
                })}
              </div>



              <>
                <h2 className="text-center">Which of these make do this garage offer?</h2>
                {props.serverSideErrors && (
                  !props.serverSideErrors["service.0.automobile_makes"] ? (
                    <div className="valid-feedback text-center" style={{ display: "block" }}>{"Looks good!"}</div>
                  ) : (<div className="invalid-feedback text-center" style={{ display: "block" }}>{props.serverSideErrors["service.0.automobile_makes"][0]} make</div>)
                )}
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

                <div className="card-columns" >
                  {el.automobile_makes.map((make, makeIndex) => {
                    return (
                      <Accordion md="card-body border rounded" key={`${makeIndex}`}>
                        <Card className="shadow" >
                          <CardHeader className="p-0 pt-2 w-100">
                            <Accordion.Toggle as={Card.Header} className="btn pt-2  h-100 d-flex w-100" color="default" eventKey={`${makeIndex}`}>
                              <Label className="card-title" for={`category-${index}-make-${makeIndex}`} >
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
                            </Accordion.Toggle>
                          </CardHeader>


                          <Accordion.Collapse className="" eventKey={`${makeIndex}`}>
                            <CardBody>
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
                            </CardBody>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    )
                  })}
                </div>
              </>
            </div >
          )
        })
      }
    </>
  );
};

export default ServiceStep;
