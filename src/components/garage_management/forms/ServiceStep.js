import React from "react";
import { FormGroup, Label, Input, Button, Col, Row, CardBody, Card } from "reactstrap";
import { data } from "../../charts/Chartsjs/ChartsData";

const ServiceStep = props => {
  if (props.currentStep !== 3) {
    return null;
  }


  return (
    <>
      <p>Service Information</p>
     
      <p>Make and Models</p>
          {
            props.data.map((el, index) => {

              return (
                <div key={index}>
                  <Input className="form-control" name="id" type="hidden" />

                  {/* <Col md="12 mb-3">
                     
                        <Label className='text-uppercase' htmlFor="is_mobile_garage">Automobile Category</Label>
                      <Input className="form-control" name={`service-${index}-automobile_category_id`} type="select" 
                      
                      // placeholder="First name" 
                      onChange={props.handleCategoryChange}
                      value={el.automobile_category_id}
                       >
                        <option value="">Select Category</option>
                        {
                          props.automobileCategories.map(category => {
return <option value={category.id}>
{category.name}</option>

                          })
                        }


                       </Input>
                    
                     
                      {props.serverSideErrors?(
                        !props.serverSideErrors["garage.is_mobile_garage"]?(
                            <div className="valid-feedback" style={{display:"block"}}>{"Looks good!"}</div>
                        ):( <div className="invalid-feedback" style={{display:"block"}}>{props.serverSideErrors["garage.is_mobile_garage"][0]}</div>)
                      )
                      :(null)}
                     

                      
                     
                    </Col> */}


                  {/* automobile_makes */}
                  <Card>
        <CardBody>
                  <div className="form-row mb-2" >
                    {el.automobile_makes.map((make, makeIndex) => {
                      return (
                        <React.Fragment key={makeIndex}>
                          <Col md="4 mb-3" key={makeIndex}>
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

                            <Row style={(el.automobile_makes[makeIndex].checked ? { display: "block" } : { display: "none" })}>
                              {
                                make.models.map((model, modelIndex) => {
                                  return (<Col md="12" key={modelIndex}> <Label className="d-block" for="chk-ani">
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
                                  </Label>  </Col>)
                                })
                              }
                            </Row>
                          </Col>

                        </React.Fragment>

                      )
                    })}

                  </div>
                  </CardBody>

</Card>
<p>Services and Sub Services</p>
<Card>
        <CardBody>
                  <div className="form-row mb-2" >
                    {el.services.map((service, serviceIndex) => {
                      return (
                        <React.Fragment key={serviceIndex}>
                          <Col md="4 mb-3" >
                            <Label className="d-block" for={`category-${index}-service-${serviceIndex}`} >
                              <Input
                                className="checkbox_animated"
                                id={`category-${index}-service-${serviceIndex}`}
                                value={el.services[serviceIndex].checked}
                                checked={el.services[serviceIndex].checked || false}
                                type="checkbox"
                                name={`category-${index}-service-${serviceIndex}`}
                                onChange={props.handleServiceChange}
                              /> {service.name}
                            </Label>

                            <Row style={(el.services[serviceIndex].checked ? { display: "block" } : { display: "none" })}>
                              {
                                service.sub_services.map((sub_service, subServiceIndex) => {
                                  return (<Col md="12" key={subServiceIndex}> <Label className="d-block" for="chk-ani">
                                    <Input
                                      className="checkbox_animated"
                                      id={`category-${index}-service-${serviceIndex}-sub_service-${subServiceIndex}`}
                                      value={`category-${index}-service-${serviceIndex}-sub_service-${subServiceIndex}`}
                                      type="checkbox" name={`category-${index}-service-${serviceIndex}-sub_service-${subServiceIndex}`}
                                      checked={el.services[serviceIndex].sub_services[subServiceIndex].checked || false}
                                      onChange={props.handleSubServiceChange}
                                    />
                                    {service.name}
                                  </Label>  </Col>)
                                })
                              }
                            </Row>
                          </Col>

                        </React.Fragment>

                      )
                    })}

                  </div>

                  </CardBody>

</Card>

                </div>
              )
            })
          }
       
      {/* <Button onClick={props.addCategory}>Add More</Button> */}


    </>
  );
};

export default ServiceStep;
