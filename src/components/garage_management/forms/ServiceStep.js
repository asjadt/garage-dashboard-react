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
      <Card>
                        <CardBody>
      
     {
      props.data.map((el,index) => {
     
return (<>
  <div className="form-row mb-2">
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


        

               
                  </div>
</>)
      })
     }
        </CardBody>

</Card>
       {/* <Button onClick={props.addCategory}>Add More</Button> */}

    
    </>
  );
};

export default ServiceStep;
