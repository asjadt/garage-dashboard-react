import React from 'react';
import {Row,Col} from 'reactstrap'

export const  DefaultStep = (props) =>  {
    return (
            <Row className="u-steps row">
              <Col sm="4" className="u-step"><span className="u-step-number">1</span>
                <div className="u-step-desc"><span className="u-step-title">Shopping</span>
                  <p>Choose what you want</p>
                </div>
              </Col>
              <Col sm="4" className="u-step current"><span className="u-step-number">2</span>
                <div className="u-step-desc"><span className="u-step-title">Billing</span>
                  <p>Pay for the bill</p>
                </div>
              </Col>
              <Col sm="4" className="u-step"><span className="u-step-number">3</span>
                <div className="u-step-desc"><span className="u-step-title">Getting</span>
                  <p>Waiting for the goods</p>
                </div>
              </Col>
            </Row>
    );
}

export const StepWithIcon = (props) =>  {
  return (
            <Row className="u-steps">
            <Col md="4" className="u-step"><span className="u-step-icon icon-shopping-cart-full" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Shopping</span></div>
            </Col>
            <Col md="4" className="u-step current"><span className="u-step-icon icon-notepad" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Billing</span></div>
            </Col>
            <Col md="4" className="u-step"><span className="u-step-icon icon-time" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Getting</span></div>
            </Col>
          </Row>
  );  
}

export const StepStates = (props) =>  {
  return (
          <Row className="row-lg">
              <Col xl="3" lg="6">
                <div className="u-step done bg-primary"><span className="u-step-number txt-primary">1</span>
                  <div className="u-step-desc"><span className="u-step-title">Getting</span>
                    <p>Waiting for the goods</p>
                  </div>
                </div>
              </Col>
              <Col xl="3"  lg="6" className="steps-md-mt">
                <div className="u-step error bg-secondary"><span className="u-step-number txt-secondary">2</span>
                  <div className="u-step-desc"><span className="u-step-title">Getting</span>
                    <p>Waiting for the goods</p>
                  </div>
                </div>
              </Col>
              <Col xl="3"  lg="6" className="lg-mt">
                <div className="u-step current bg-success"><span className="u-step-number txt-success">3</span>
                  <div className="u-step-desc"><span className="u-step-title">Getting</span>
                    <p>Waiting for the goods</p>
                  </div>
                </div>
              </Col>
              <Col xl="3"  lg="6" className="lg-mt">
                <div className="u-step disabled"><span className="u-step-number">4</span>
                  <div className="u-step-desc"><span className="u-step-title">Getting</span>
                    <p>Waiting for the goods</p>
                  </div>
                </div>
            </Col>
          </Row>
  );  
}

export const StepSizing = (props) =>  {
  return (
          <>
          <Row className="u-steps  u-steps-xs steps-sizing-sm-mb">
            <Col md="4"  className="u-step"><span className="u-step-icon icon wb-shopping-cart" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Shopping</span></div>
            </Col>
            <Col md="4"  className="u-step current"><span className="u-step-icon icon wb-pluse" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Billing</span></div>
            </Col>
            <Col md="4"  className="u-step"><span className="u-step-icon icon wb-time" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Getting</span></div>
            </Col>
          </Row>
          <Row className="u-steps u-steps-sm steps-sizing-sm-mb">
            <Col md="4"  className="u-step"><span className="u-step-icon icon wb-shopping-cart" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Shopping</span></div>
            </Col>
            <Col md="4"  className="u-step current"><span className="u-step-icon icon wb-pluse" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Billing</span></div>
            </Col>
            <Col md="4"  className="u-step"><span className="u-step-icon icon wb-time" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Getting</span></div>
            </Col>
          </Row>
          <Row className="u-steps  steps-sizing-sm-mb">
            <Col md="4"  className="u-step"><span className="u-step-icon icon wb-shopping-cart" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Shopping</span></div>
            </Col>
            <Col md="4"  className="u-step current"><span className="u-step-icon icon wb-pluse" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Billing</span></div>
            </Col>
            <Col md="4"  className="u-step"><span className="u-step-icon icon wb-time" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Getting</span></div>
            </Col>
          </Row>
          <Row className="u-steps  u-steps-lg">
            <Col md="4"  className="u-step"><span className="u-step-icon icon wb-shopping-cart" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Shopping</span></div>
            </Col>
            <Col md="4"  className="u-step current"><span className="u-step-icon icon wb-pluse" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Billing</span></div>
            </Col>
            <Col md="4"  className="u-step"><span className="u-step-icon icon wb-time" aria-hidden="true"></span>
              <div className="u-step-desc"><span className="u-step-title">Getting</span></div>
            </Col>
          </Row>
        </>
  );  
}

export const VerticalStep = (props) =>  {
  return (
          <Row>
              <Col lg="4">
                <div className="u-steps u-steps-vertical">
                    <div className="u-step"><span className="u-step-number">1</span>
                      <div className="u-step-desc"><span className="u-step-title">Shopping</span>
                        <p>Choose what you want</p>
                      </div>
                    </div>
                    <div className="u-step current"><span className="u-step-number">2</span>
                      <div className="u-step-desc"><span className="u-step-title">Billing</span>
                        <p>Pay for the bill</p>
                      </div>
                    </div>
                    <div className="u-step"><span className="u-step-number">3</span>
                      <div className="u-step-desc"><span className="u-step-title">Getting</span>
                        <p>Waiting for the goods</p>
                      </div>
                    </div>
                </div>
              </Col>
          </Row>
  );  
}

export const DefaultPearlsSteps = (props) =>  {
  return (
          <Row>
            <Col className="u-pearl done col-4"><span className="u-pearl-number">1</span><span className="u-pearl-title">Account Info</span></Col> 
            <Col className="u-pearl current col-4"><span className="u-pearl-number">2</span><span className="u-pearl-title">Billing Info</span></Col> 
            <Col className="u-pearl col-4"><span className="u-pearl-number">3</span><span className="u-pearl-title">Confirmation</span></Col>
          </Row>
  );  
}

export const PearlsStepsWithIcon = (props) =>  {
  return (
          <Row>
              <Col className="u-pearl done col-4">
                <div className="u-pearl-icon"><i className="icon-shopping-cart" aria-hidden="true"></i></div><span className="u-pearl-title">Account Info</span>
              </Col>
              <Col className="u-pearl current col-4">
                <div className="u-pearl-icon"><i className="icon-write" aria-hidden="true"></i></div><span className="u-pearl-title">Billing Info</span>
              </Col>
              <Col className="u-pearl col-4">
                <div className="u-pearl-icon"><i className="icon-check" aria-hidden="true"></i></div><span className="u-pearl-title">Confirmation</span>
              </Col>
          </Row>
  );  
}

export const PearlsStepSizing = (props) =>  {
  return (
          <>
            <Row className="u-pearls-xs mb-5">
              <Col className="u-pearl done col-4"><span className="u-pearl-number">1</span><span className="u-pearl-title">Account Info</span></Col>
              <Col className="u-pearl current col-4"><span className="u-pearl-number">2</span><span className="u-pearl-title">Billing Info</span></Col>
              <Col className="u-pearl col-4"><span className="u-pearl-number">3</span><span className="u-pearl-title">Confirmation</span></Col>
            </Row>
            <Row className="u-pearls-sm mb-5">
              <Col className="u-pearl done col-4"><span className="u-pearl-number">1</span><span className="u-pearl-title">Account Info</span></Col>
              <Col className="u-pearl current col-4"><span className="u-pearl-number">2</span><span className="u-pearl-title">Billing Info</span></Col>
              <Col className="u-pearl col-4"><span className="u-pearl-number">3</span><span className="u-pearl-title">Confirmation</span></Col>
            </Row>
            <Row className="mb-5">
              <Col className="u-pearl done col-4"><span className="u-pearl-number">1</span><span className="u-pearl-title">Account Info</span></Col>
              <Col className="u-pearl current col-4"><span className="u-pearl-number">2</span><span className="u-pearl-title">Billing Info</span></Col>
              <Col className="u-pearl col-4"><span className="u-pearl-number">3</span><span className="u-pearl-title">Confirmation</span></Col>
            </Row>
            <Row className="u-pearls-lg">
              <Col className="u-pearl done col-4"><span className="u-pearl-number">1</span><span className="u-pearl-title">Account Info</span></Col>
              <Col className="u-pearl current col-4"><span className="u-pearl-number">2</span><span className="u-pearl-title">Billing Info</span></Col>
              <Col className="u-pearl col-4"><span className="u-pearl-number">3</span><span className="u-pearl-title">Confirmation</span></Col>
            </Row>
          </>
  );  
}

export const PearlsStepStates = (props) =>  {
  return (
            <>
            <Row className="mb-5">
              <Col className="u-pearl current col-4">
                <div className="u-pearl-icon">1</div><span className="u-pearl-title">Account Info</span>
              </Col>
              <Col className="u-pearl disabled col-4">
                <div className="u-pearl-icon">2</div><span className="u-pearl-title">Billing Info</span>
              </Col>
              <Col className="u-pearl disabled col-4">
                <div className="u-pearl-icon">3</div><span className="u-pearl-title">Confirmation</span>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="u-pearl done col-4">
                <div className="u-pearl-icon">1</div><span className="u-pearl-title">Account Info</span>
              </Col>
              <Col className="u-pearl current col-4">
                <div className="u-pearl-icon">2</div><span className="u-pearl-title">Billing Info</span>
              </Col>
              <Col className="u-pearl disabled col-4">
                <div className="u-pearl-icon">3</div><span className="u-pearl-title">Confirmation</span>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col className="u-pearl done col-4">
                <div className="u-pearl-icon">1</div><span className="u-pearl-title">Account Info</span>
              </Col>
              <Col className="u-pearl current error col-4">
                <div className="u-pearl-icon">2</div><span className="u-pearl-title">Billing Info</span>
              </Col>
              <Col className="u-pearl disabled col-4">
                <div className="u-pearl-icon">3</div><span className="u-pearl-title">Confirmation</span>
              </Col>
            </Row>
            <Row>
              <Col className="u-pearl done col-4">
                <div className="u-pearl-icon">1</div><span className="u-pearl-title">Account Info</span>
              </Col>
              <Col className="u-pearl done col-4">
                <div className="u-pearl-icon">2</div><span className="u-pearl-title">Billing Info</span>
              </Col>
              <Col className="u-pearl current col-4">
                <div className="u-pearl-icon">3</div><span className="u-pearl-title">Confirmation</span>
              </Col>
            </Row>
            </>
  );  
}



