import React from 'react';
import {Container,Row,Col,Card,Form,FormGroup,Label,Input,Button} from 'reactstrap' 
import { CREATEPASSWORD,NewPassword,RetypePassword,Done} from "../../constant";

const Resetpwd = (props) => {
    return (
    <div className="page-wrapper">
      <Container fluid={true}>
        <div className="authentication-main mt-0">
          <Row>
            <Col md="12" className="p-0">
              <div className="auth-innerright auth-minibox">
                <div className="authentication-box auth-minibox1">
                  <div className="text-center"><img src={require("../../assets/images/other-images/creative-logo1.png")} alt=""/></div>
                  <Card className="mt-4 p-4">
                    <Form className="theme-form">
                      <h5 className="f-16 mb-3 f-w-600">{CREATEPASSWORD}</h5>
                      <FormGroup>
                        <Label className="col-form-label">{NewPassword}</Label>
                        <Input className="form-control" type="password" placeholder="*****"/>
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">{RetypePassword}</Label>
                        <Input className="form-control" type="password" placeholder="*****"/>
                      </FormGroup>
                      <FormGroup className="form-row mb-0">
                        <Col md="2">
                          <Button color="primary">{Done}</Button>
                        </Col>
                      </FormGroup>
                    </Form>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    );
}

export default Resetpwd;