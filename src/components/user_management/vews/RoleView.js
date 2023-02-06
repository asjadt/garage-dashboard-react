
import React from 'react';

import { Card, CardBody, CardHeader, Col, Input, Label, Row } from 'reactstrap';

const RoleView = ({roleViewData,initialRolePermissions}) => {
    const tempPermissions = [];
    roleViewData.permissions.map(el => {
      tempPermissions.push(el.name)
    })


  return (
    <>
    <Row>
        <Col sm="12">
        <Card>
              <CardHeader>
                <h5><span style={{textTransform:"capitalize"}}>View</span> Role</h5>
              </CardHeader>
              <CardBody>
             
                  <div className="form-row mb-2">
                    <Col md="6 mb-3">
                      <Label className={"text-uppercase"} htmlFor="first_Name"> Name</Label>
                      <p>{roleViewData.name}</p>
                     
                     
                    
                    </Col>
                   
                  </div>
                 
                  {initialRolePermissions.map((el,index) => {
 return (<div className="form-row mb-2" key={index}>

<Col md="12 mb-3">
<Label className='text-uppercase'> {el.role}</Label>
</Col>

 

{
  el.permissions.map((el2,index2) => {
    return ( <Col md="3 mb-3" key={index2}> <Label className="d-block" for="chk-ani">
    <Input className="checkbox_animated" id={'permissions'} value={el2}    type="checkbox" name='permissions' checked={tempPermissions.includes(el2)} readOnly /> {el2} 
  </Label>  </Col>)
  })
}
                 
              
         

 







</div>)
                  })}
                 
                
                
         
          
              </CardBody>
            </Card>
        </Col>
    </Row>
 


    
    </>
  )
}

export default RoleView