import React from 'react';
import {Container,Row,Col,Card,Form,FormGroup,Button,Input,Label} from 'reactstrap'
import { EnterPassword,Unlock} from "../../constant";
const UnlockUser = (props) => {
    return (
        <div className="page-wrapper">
        <Container fluid={true}>
          <div className="authentication-main mt-0">
            <Row>
              <Col md="12"  className="p-0">
                <div className="auth-innerright auth-minibox">
                  <div className="authentication-box auth-minibox1">
                    <div className="text-center">
                        <img src={require("../../assets/images/other-images/creative-logo1.png")} alt=""/></div>
                    <Card className="mt-4 p-4 mb-0">
                      <Form className="theme-form">
                        <FormGroup>
                          <Label className="col-form-label">{EnterPassword}</Label>
                          <Input className="form-control" type="password" placeholder="*******"/>
                        </FormGroup>
                        <FormGroup className="form-row mb-2">
                          <Col md="3">
                            <Button color="primary">{Unlock}</Button>
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

export default UnlockUser;