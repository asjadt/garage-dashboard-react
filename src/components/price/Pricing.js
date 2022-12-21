import React, { Fragment } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Button} from 'reactstrap'
import { SimplePricingCard, Standard, LorumIpsum, Purchase, Business,Premium,Subscribe,PricingTableWithBorder,PricingTableWithRibbons,Popular,Extra,Pricings,StandardArray,Business_Premium_Array,ColorHighlight } from '../../constant';
const Pricing = (props) => {
    return (
        <Fragment>
        <BreadCrumb parent="Home" subparent="Price" title="Pricing"/>
        <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader> 
                <h5>{SimplePricingCard}</h5>
              </CardHeader>
              <CardBody className="row pricing-content">
                <Col xl="3 xl-50" sm="6">
                  <Card className="text-center pricing-simple">
                    <CardBody>
                      <h3>{Standard}</h3>
                      <h1>{"$15"}</h1>
                      <h6 className="mb-0">{LorumIpsum}</h6>
                    </CardBody>
                    <Button color="primary" className="btn-block" size="lg">
                      <h5 className="mb-0">{Purchase}</h5>
                    </Button>
                  </Card>
                </Col>
                <Col xl="3 xl-50" sm="6">
                  <Card className="text-center pricing-simple">
                    <CardBody>
                      <h3>{Business}</h3>
                      <h1>{"$25"}</h1>
                      <h6 className="mb-0">{LorumIpsum}</h6>
                    </CardBody>
                    <Button color="primary" className="btn-block" size="lg">
                      <h5 className="mb-0">{Purchase}</h5>
                    </Button>
                  </Card>
                </Col>
                <Col xl="3 xl-50" sm="6">
                  <Card className="text-center pricing-simple">
                    <CardBody>
                      <h3>{Premium}</h3>
                      <h1>{"$35"}</h1>
                      <h6 className="mb-0">{LorumIpsum}</h6>
                    </CardBody>
                    <Button color="primary" className="btn-block" size="lg">
                      <h5 className="mb-0">{Purchase}</h5>
                    </Button>
                  </Card>
                </Col>
                <Col xl="3 xl-50" sm="6">
                  <Card className="text-center pricing-simple">
                    <CardBody>
                      <h3>{Extra}</h3>
                      <h1>{"$45"}</h1>
                      <h6 className="mb-0">{LorumIpsum}</h6>
                    </CardBody>
                    <Button color="primary" className="btn-block" size="lg">
                      <h5 className="mb-0">{Purchase}</h5>
                    </Button>
                  </Card>
                </Col>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader> 
                <h5>{Pricings}</h5>
              </CardHeader>
              <CardBody className="row pricing-content">
                <Col md="4">
                  <Card className="pricing-block text-center">
                    <svg x="0" y="0" viewBox="0 0 360 220">
                      <g>
                        <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z"></path>
                      </g>
                      <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$10"}</text>
                      <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                      <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                    </svg>
                    <div className="pricing-inner">
                      <h3 className="font-primary">{Standard}</h3>
                      <ul className="pricing-inner">
                        {StandardArray.map((items,i) => 
                        <li key={i}>
                          <h6><b>{items.content1}</b> {items.content2}</h6>
                        </li>
                        )}
                      </ul>
                      <Button color="primary" size="lg">{Subscribe}</Button>
                    </div>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="pricing-block text-center">
                    <svg x="0" y="0" viewBox="0 0 360 220">
                      <g>
                        <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z"></path>
                      </g>
                      <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$20"}</text>
                      <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                      <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                    </svg>
                    <div className="pricing-inner">
                      <h3 className="font-primary">{Business}</h3>
                      <ul className="pricing-inner">
                        {Business_Premium_Array.map((items,i) => 
                          <li key={i}>
                            <h6><b>{items.content1}</b> {items.content2}</h6>
                          </li>
                        )}
                      </ul>
                      <Button color="primary" size="lg">{Subscribe}</Button>
                    </div>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="pricing-block text-center">
                    <svg x="0" y="0" viewBox="0 0 360 220">
                      <g>
                        <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z"></path>
                      </g>
                      <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$30"}</text>
                      <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                      <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                    </svg>
                    <div className="pricing-inner">
                      <h3 className="font-primary">{Premium}</h3>
                      <ul className="pricing-inner">
                        {Business_Premium_Array.map((items,i) => 
                          <li key={i}>
                            <h6><b>{items.content1}</b> {items.content2}</h6>
                          </li>
                        )}
                      </ul>
                      <Button color="primary" size="lg">{Subscribe}</Button>
                    </div>
                  </Card>
                </Col>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader> 
                <h5>{PricingTableWithBorder}</h5>
              </CardHeader>
              <CardBody className="row pricing-card-design-2 pricing-content">
                <Col md="4">
                  <Card className="pricing-block text-center">
                    <svg x="0" y="0" viewBox="0 0 360 220">
                      <g>
                        <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z"></path>
                      </g>
                      <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$10"}</text>
                      <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                      <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                    </svg>
                    <div className="pricing-inner">
                      <h3 className="font-primary">{Standard}</h3>
                      <ul className="pricing-inner">
                        {StandardArray.map((items,i) => 
                        <li key={i}>
                          <h6><b>{items.content1}</b> {items.content2}</h6>
                        </li>
                        )}
                      </ul>
                      <Button color="primary" size="lg">{Subscribe}</Button>
                    </div>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="pricing-block text-center">
                    <svg x="0" y="0" viewBox="0 0 360 220">
                      <g>
                        <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z"></path>
                      </g>
                      <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$20"}</text>
                      <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                      <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                    </svg>
                    <div className="pricing-inner">
                      <h3 className="font-primary">{Business}</h3>
                      <ul className="pricing-inner">
                        {Business_Premium_Array.map((items,i) => 
                          <li key={i}>
                            <h6><b>{items.content1}</b> {items.content2}</h6>
                          </li>
                        )}
                      </ul>
                      <Button color="primary" size="lg">{Subscribe}</Button>
                    </div>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="pricing-block text-center">
                    <svg x="0" y="0" viewBox="0 0 360 220">
                      <g>
                        <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z"></path>
                      </g>
                      <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$30"}</text>
                      <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                      <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                    </svg>
                    <div className="pricing-inner">
                      <h3 className="font-primary">{Premium}</h3>
                      <ul className="pricing-inner">
                        {Business_Premium_Array.map((items,i) => 
                          <li key={i}>
                            <h6><b>{items.content1}</b> {items.content2}</h6>
                          </li>
                        )}
                      </ul>
                      <Button color="primary" size="lg">{Subscribe}</Button>
                    </div>
                  </Card>
                </Col>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader> 
                <h5>{ColorHighlight}</h5>
              </CardHeader>
              <CardBody className="pricing-card-design-1">
                <Row className="pricing-content">
                  <Col md="4">
                    <Card className="pricing-block text-center">
                      <svg x="0" y="0" viewBox="0 0 360 220">
                        <g>
                          <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                        </g>
                        <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$10"}</text>
                        <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                        <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                      </svg>
                      <div className="pricing-inner">
                        <h3 className="font-primary">{Standard}</h3>
                        <ul className="pricing-inner">
                          {StandardArray.map((items,i) => 
                          <li key={i}>
                            <h6><b>{items.content1}</b> {items.content2}</h6>
                          </li>
                          )}
                        </ul>
                        <Button color="primary" size="lg">{Subscribe}</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="pricing-block text-center bg-primary">
                      <svg x="0" y="0" viewBox="0 0 360 220">
                        <g>
                          <path fill="#007eec" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                        </g>
                        <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$20"}</text>
                        <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                        <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                      </svg>
                      <div className="pricing-inner">
                        <h3>{Business}</h3>
                        <ul className="pricing-inner">
                          {Business_Premium_Array.map((items,i) => 
                            <li key={i}>
                              <h6><b>{items.content1}</b> {items.content2}</h6>
                            </li>
                          )}
                        </ul>
                        <Button color="primary" size="lg">{Subscribe}</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="pricing-block text-center">
                      <svg x="0" y="0" viewBox="0 0 360 220">
                        <g>
                          <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                        </g>
                        <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$30"}</text>
                        <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                        <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                      </svg>
                      <div className="pricing-inner">
                        <h3 className="font-primary">{Premium}</h3>
                        <ul className="pricing-inner">
                          {Business_Premium_Array.map((items,i) => 
                            <li key={i}>
                              <h6><b>{items.content1}</b> {items.content2}</h6>
                            </li>
                          )}
                        </ul>
                        <Button color="primary" size="lg">{Subscribe}</Button>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader> 
                <h5>{PricingTableWithRibbons}</h5>
              </CardHeader>
              <CardBody className="pricing-card-design-3">
                <Row className="pricing-content-ribbons">
                  <Col md="4">
                    <Card className="pricing-block text-center">
                      <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-danger"><i className="icofont icofont-love"></i></div>
                      <svg x="0" y="0" viewBox="0 0 360 220">
                        <g>
                          <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                        </g>
                        <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$10"}</text>
                        <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                        <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                      </svg>
                      <div className="pricing-inner">
                        <h3 className="font-primary">{Standard}</h3>
                        <ul className="pricing-inner">
                          {StandardArray.map((items,i) => 
                          <li key={i}>
                            <h6><b>{items.content1}</b> {items.content2}</h6>
                          </li>
                          )}
                        </ul>
                        <Button color="primary" size="lg">{Subscribe}</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="pricing-block text-center">
                      <svg x="0" y="0" viewBox="0 0 360 220">
                        <g>
                          <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                        </g>
                        <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$20"}</text>
                        <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                        <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                      </svg>
                      <div className="pricing-inner">
                        <h3 className="font-primary">{Business}</h3>
                        <ul className="pricing-inner">
                          {Business_Premium_Array.map((items,i) => 
                            <li key={i}>
                              <h6><b>{items.content1}</b> {items.content2}</h6>
                            </li>
                          )}
                        </ul>
                        <Button color="primary" size="lg">{Subscribe}</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="pricing-block text-center">
                      <svg x="0" y="0" viewBox="0 0 360 220">
                        <g>
                          <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                        </g>
                        <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$30"}</text>
                        <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                        <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                      </svg>
                      <div className="pricing-inner">
                        <h3 className="font-primary">{Premium}</h3>
                        <ul className="pricing-inner">
                          {Business_Premium_Array.map((items,i) => 
                            <li key={i}>
                              <h6><b>{items.content1}</b> {items.content2}</h6>
                            </li>
                          )}
                        </ul>
                        <Button color="primary" size="lg">{Subscribe}</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="pricing-block text-center">
                      <svg x="0" y="0" viewBox="0 0 360 220">
                        <g>
                          <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                        </g>
                        <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$10"}</text>
                        <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                        <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                      </svg>
                      <div className="pricing-inner">
                        <h3 className="font-primary">{Standard}</h3>
                        <ul className="pricing-inner">
                          {StandardArray.map((items,i) => 
                          <li key={i}>
                            <h6><b>{items.content1}</b> {items.content2}</h6>
                          </li>
                          )}
                        </ul>
                        <Button color="primary" size="lg">{Subscribe}</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="pricing-block text-center">
                      <div className="ribbon ribbon-bookmark ribbon-danger">{Popular}</div>
                      <svg x="0" y="0" viewBox="0 0 360 220">
                        <g>
                          <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                        </g>
                        <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$20"}</text>
                        <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                        <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                      </svg>
                      <div className="pricing-inner">
                        <h3 className="font-primary">{Business}</h3>
                        <ul className="pricing-inner">
                          {Business_Premium_Array.map((items,i) => 
                            <li key={i}>
                              <h6><b>{items.content1}</b> {items.content2}</h6>
                            </li>
                          )}
                        </ul>
                        <Button color="primary" size="lg">{Subscribe}</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="pricing-block text-center">
                      <svg x="0" y="0" viewBox="0 0 360 220">
                        <g>
                          <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                        </g>
                        <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$30"}</text>
                        <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                        <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                      </svg>
                      <div className="pricing-inner">
                        <h3 className="font-primary">{Premium}</h3>
                        <ul className="pricing-inner">
                          {Business_Premium_Array.map((items,i) => 
                            <li key={i}>
                              <h6><b>{items.content1}</b> {items.content2}</h6>
                            </li>
                          )}
                        </ul>
                        <Button color="primary" size="lg">{Subscribe}</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="pricing-block text-center">
                      <svg x="0" y="0" viewBox="0 0 360 220">
                        <g>
                          <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                        </g>
                        <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$10"}</text>
                        <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                        <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                      </svg>
                      <div className="pricing-inner">
                        <h3 className="font-primary">{Standard}</h3>
                        <ul className="pricing-inner">
                          {StandardArray.map((items,i) => 
                          <li key={i}>
                            <h6><b>{items.content1}</b> {items.content2}</h6>
                          </li>
                          )}
                        </ul>
                        <Button color="primary" size="lg">{Subscribe}</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="pricing-block text-center">
                      <svg x="0" y="0" viewBox="0 0 360 220">
                        <g>
                          <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                        </g>
                        <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$20"}</text>
                        <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                        <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                      </svg>
                      <div className="pricing-inner">
                        <h3 className="font-primary">{Business}</h3>
                        <ul className="pricing-inner">
                          {Business_Premium_Array.map((items,i) => 
                            <li key={i}>
                              <h6><b>{items.content1}</b> {items.content2}</h6>
                            </li>
                          )}
                        </ul>
                        <Button color="primary" size="lg">{Subscribe}</Button>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="pricing-block text-center">
                      <div className="ribbon ribbon-clip-right ribbon-right ribbon-danger">{Popular}</div>
                      <svg x="0" y="0" viewBox="0 0 360 220">
                        <g>
                          <path fill="#158df7" d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                        </g>
                        <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$30"}</text>
                        <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                        <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                      </svg>
                      <div className="pricing-inner">
                        <h3 className="font-primary">{Premium}</h3>
                        <ul className="pricing-inner">
                          {Business_Premium_Array.map((items,i) => 
                            <li key={i}>
                              <h6><b>{items.content1}</b> {items.content2}</h6>
                            </li>
                          )}
                        </ul>
                        <Button color="primary" size="lg">{Subscribe}</Button>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </Fragment>
    );
}

export default Pricing;