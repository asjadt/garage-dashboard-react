import React, { Fragment } from 'react';
import { Accordion } from 'react-bootstrap';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { AccordionOpenCloseIcon, AccordionWithIconOnTitle, Add, AllCloseAccordion, BasicAccordion, CollapsibleGroupItem, ColorAccordion } from '../../../constant';
import BreadCrumb from '../../../layout/Breadcrumb';
import { AccordionWithIcon, AccordionWithOpenandCloseIcon, AllCloseAccordian, PrimaryColorAccordian, SecondaryColorAccordian } from './AccordianComponent';

const Accordian = (props) => {
  return (
    <Fragment>
      <BreadCrumb parent="Home" subparent="Base" title="Accordion" />
      <Container fluid={true}>
        <Row>
          <Col sm="12" xl="6">
            <Accordion defaultActiveKey="0">
              <Card>
                <CardHeader>
                  <h5>{BasicAccordion}</h5><span>{"Using the"} <a href="#javascript">{"card"}</a> {"component, you can extend the default collapse behavior to create an accordion."}</span>
                </CardHeader>
                <CardBody>
                  <div className="default-according" id="accordion">
                    <Card>
                      <CardHeader>
                        <h5 className="mb-0">
                          <Accordion.Toggle as={Card.Header} className="btn btn-link" color="default" eventKey="0">
                            {CollapsibleGroupItem}<span className="digits">{"1"}</span>
                          </Accordion.Toggle>
                        </h5>
                      </CardHeader>
                      <Accordion.Collapse eventKey="0">
                        <CardBody>
                          {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."}
                        </CardBody>
                      </Accordion.Collapse>
                    </Card>

                    <Card>
                      <CardHeader>
                        <h5 className="mb-0">
                          <Accordion.Toggle as={Card.Header} className="btn btn-link" color="default" eventKey="1">
                            {CollapsibleGroupItem}<span className="digits">{"2"}</span>
                          </Accordion.Toggle>
                        </h5>
                      </CardHeader>
                      <Accordion.Collapse eventKey="1">
                        <CardBody>
                          {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."}
                        </CardBody>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h5 className="mb-0">
                          <Accordion.Toggle as={Card.Header} className="btn btn-link" color="default" eventKey="2">
                            {CollapsibleGroupItem}<span className="digits">{"3"}</span>
                          </Accordion.Toggle>
                        </h5>
                      </CardHeader>
                      <Accordion.Collapse eventKey="2">
                        <CardBody>
                          {"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."}
                        </CardBody>
                      </Accordion.Collapse>
                    </Card>
                  </div>
                </CardBody>
              </Card>
            </Accordion>
          </Col>
          <Col sm="12" xl="6">
            <Accordion>
              <Card>
                <CardHeader>
                  <h5>{AllCloseAccordion}</h5><span>{"Using the"} <a href="#javascript">{"card"}</a> {"component, you can extend the default collapse behavior to create an accordion."}</span>
                </CardHeader>
                <CardBody>
                  <div className="default-according" id="accordionclose">
                    <AllCloseAccordian />
                  </div>
                </CardBody>
              </Card>
            </Accordion>
          </Col>
          <Col sm="12" xl="6">
            <Accordion defaultActiveKey="0">
              <Card>
                <CardHeader>
                  <h5>{ColorAccordion}</h5><span>{Add} <code>{".bg-*"}</code> {"class to add background color with card-header."}</span>
                </CardHeader>
                <CardBody>
                  <div className="default-according" id="accordion1">
                    <PrimaryColorAccordian />
                  </div>
                </CardBody>
              </Card>
            </Accordion>
          </Col>
          <Col sm="12" xl="6">
            <Accordion defaultActiveKey="0">
              <Card>
                <CardHeader>
                  <h5>{ColorAccordion}</h5><span>{Add} <code>{".bg-*"}</code> {"class to add background color with card-header."}</span>
                </CardHeader>
                <CardBody>
                  <div className="default-according" id="accordion2">
                    <SecondaryColorAccordian />
                  </div>
                </CardBody>
              </Card>
            </Accordion>
          </Col>
          <Col sm="12" xl="6">
            <Accordion defaultActiveKey="0">
              <Card>
                <CardHeader>
                  <h5>{AccordionWithIconOnTitle}</h5><span>{Add} <code>&lt;{"i"}&gt;&lt;{"/i"}&gt;</code> {"tag Along with icon class before title text."}</span>
                </CardHeader>
                <CardBody>
                  <div className="default-according">
                    <AccordionWithIcon />
                  </div>
                </CardBody>
              </Card>
            </Accordion>
          </Col>
          <Col sm="12" xl="6">
            <Accordion defaultActiveKey="0">
              <Card>
                <CardHeader>
                  <h5>{AccordionOpenCloseIcon}</h5><span>{Add} <code>&lt;{"i"}&gt;&lt;{"/i"}&gt;</code> {"tag Along with icon class before title text."}</span>
                </CardHeader>
                <CardBody>
                  <div className="default-according style-1" id="accordionoc">
                    <AccordionWithOpenandCloseIcon />
                  </div>
                </CardBody>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Accordian;