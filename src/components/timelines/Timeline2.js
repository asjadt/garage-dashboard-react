import React, {Fragment} from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import {ShoppingBag,MessageCircle,MinusCircle,Tag} from 'react-feather'
import {Container,Row,Col,Card,CardHeader,CardBody,Media} from 'reactstrap'
import { TimelinePrimaryColor,TimelineInfoColor,TimelineDangerColor,TimelineSecondaryColor,TimelineWarningColor,TimelineSuccessColor,New, NewMessage,NewSale,NewReport,NewVisits } from "../../constant";

const Timeline2 = () => {
    return (
        <Fragment>
            <BreadCrumb parent="Home" subparent="Timeline" title="Timeline 2"/>
            <Container fluid={true}>
            <Row className="timeline-custom">
              <Col xl="4 xl-50 box-col-6">
                <Card>
                  <CardHeader>
                    <h5>{TimelinePrimaryColor}</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="timeline-small">
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-primary">
                            <ShoppingBag/>
                        </div>
                        <Media body>
                          <h6>{NewSale} <span className="pull-right f-14">{New}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-primary">
                            <MessageCircle/>
                        </div>
                        <Media body>
                          <h6>{NewMessage} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 small-line bg-primary">
                            <MinusCircle/>
                        </div>
                        <Media body>
                          <h6>{NewReport} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-primary">
                            <ShoppingBag/>
                        </div>
                        <Media body>
                          <h6>{NewSale} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 medium-line bg-primary">
                            <Tag/>
                        </div>
                        <Media body>
                          <h6>{NewVisits} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4 xl-50 box-col-6">
                <Card>
                  <CardHeader>
                    <h5>{TimelineSecondaryColor}</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="timeline-small">
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-secondary">
                            <ShoppingBag/>
                        </div>
                        <Media body>
                          <h6>{NewSale} <span className="pull-right f-14">{New}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-secondary">
                            <MessageCircle/>
                        </div>
                        <Media body>
                          <h6>{NewMessage} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 small-line bg-secondary">
                            <MessageCircle/>
                        </div>
                        <Media body>
                          <h6>{NewReport} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-secondary">
                            <ShoppingBag />
                        </div>
                        <Media body>
                          <h6>{NewSale} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 medium-line bg-secondary">
                            <Tag />
                        </div>
                        <Media body>
                          <h6>{NewVisits} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4 xl-50 box-col-6">
                <Card>
                  <CardHeader>
                    <h5>{TimelineSuccessColor}</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="timeline-small">
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-success">
                            <ShoppingBag />
                        </div>
                        <Media body>
                          <h6>{NewSale} <span className="pull-right f-14">{New}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-success">
                            <MessageCircle />
                        </div>
                        <Media body>
                          <h6>{NewMessage} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 small-line bg-success">
                            <MessageCircle />
                        </div>
                        <Media body>
                          <h6>{NewReport} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-success">
                            <ShoppingBag />
                        </div>
                        <Media body>
                          <h6>{NewSale} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 medium-line bg-success">
                            <Tag />
                        </div>
                        <Media body>
                          <h6>{NewVisits} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4 xl-50 box-col-6">
                <Card>
                  <CardHeader>
                    <h5>{TimelineInfoColor}</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="timeline-small">
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-info">
                            <ShoppingBag />
                        </div>
                        <Media body>
                          <h6>{NewSale} <span className="pull-right f-14">{New}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-info">
                            <MessageCircle />
                        </div>
                        <Media body>
                          <h6>{NewMessage} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 small-line bg-info">
                            <MessageCircle />
                        </div>
                        <Media body>
                          <h6>{NewReport} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-info">
                            <ShoppingBag />
                        </div>
                        <Media body>
                          <h6>{NewSale} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 medium-line bg-info">
                            <Tag />
                        </div>
                        <Media body>
                          <h6>{NewVisits} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4 xl-50 box-col-6">
                <Card>
                  <CardHeader>
                    <h5>{TimelineWarningColor}</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="timeline-small">
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-warning">
                            <ShoppingBag />
                        </div>
                        <Media body>
                          <h6>{NewSale} <span className="pull-right f-14">{New}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-warning">
                            <MessageCircle />
                        </div>
                        <Media body>
                          <h6>{NewMessage} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 small-line bg-warning">
                            <MinusCircle />
                        </div>
                        <Media body>
                          <h6>{NewReport} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-warning">
                            <ShoppingBag />
                    </div>
                        <Media body>
                          <h6>{NewSale} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 medium-line bg-warning">
                            <Tag />
                        </div>
                        <Media body>
                          <h6>{NewVisits} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4 xl-50 box-col-6">
                <Card>
                  <CardHeader>
                    <h5>{TimelineDangerColor}</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="timeline-small">
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-danger">
                            <ShoppingBag  />
                        </div>
                        <Media body>
                          <h6>{NewSale} <span className="pull-right f-14">{New}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-danger">
                            <MinusCircle  />
                        </div>
                        <Media body>
                          <h6>{NewMessage} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 small-line bg-danger">
                        <MinusCircle  />
                        </div>
                        <Media body>
                          <h6>{NewReport} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 timeline-line-1 bg-danger">
                            <ShoppingBag  />
                        </div>
                        <Media body>
                          <h6>{NewSale} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                      <Media>
                        <div className="timeline-round m-r-30 medium-line bg-danger">
                            <Tag  />
                        </div>
                        <Media body>
                          <h6>{NewVisits} <span className="pull-right f-14">{"14m Ago"}</span></h6>
                          <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry."}</p>
                        </Media>
                      </Media>
                    </div>
                  </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
        </Fragment>
    );
};

export default Timeline2;