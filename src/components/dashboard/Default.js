import React, { Fragment, useEffect, useState } from 'react';
import ChartistGraph from 'react-chartist';
import { Line } from 'react-chartjs-2';
import { Calendar, Clock, Coffee, DollarSign, Droplet, Pause, Phone, TrendingUp, Users, Volume2 } from 'react-feather';
import { GeoJSON, Map as LeafletMap, Marker, Popup } from 'react-leaflet';
import { toast } from 'react-toastify';
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Col, Container, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import WorldData from 'world-map-geojson';
import u1 from '../../assets/images/dashboard/call-chat-1.png';
import u2 from '../../assets/images/dashboard/call-chat-2.png';
import tc1 from '../../assets/images/dashboard/sale-product-1.png';
import tc2 from '../../assets/images/dashboard/sale-product-2.png';
import tc3 from '../../assets/images/dashboard/sale-product-3.png';
import tc4 from '../../assets/images/dashboard/sale-product-4.png';
import wp from '../../assets/images/dashboard/work-plan.png';
import tc5 from '../../assets/images/user/2.png';
import tc6 from '../../assets/images/user/3.jpg';
import tc7 from '../../assets/images/user/4.jpg';
import tc8 from '../../assets/images/user/5.jpg';
import { BounceDate, Day, Edit, FromDate, GetStarted, Hours, Live, Loading, Location, Month, OurBestSeller, OurGrowth, Profit, SalesByCategory, SalesOverview, Session, SessionDuartion, ToDate, TotalInvest, TotalNewUser, ViewMoreReports, Week, WorkPlan } from '../../constant';
import BreadCrumb from '../../layout/Breadcrumb';
import { callChart, callChartListener, callChartOptions, roundedChart, roundedChartListener, roundedChartOptions, smallChart, smallChartListener, smallChartOptions } from './chartsData/chartist';
import { lineChartData, lineChartOptions } from './chartsData/chartJs';
import { topCardState } from './data';

var Knob = require('knob')

const Default = () => {

  // eslint-disable-next-line 
  const [stateOptions, setStateValues] = useState(topCardState);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal)
    localStorage.setItem("isUser", null)
  }

  useEffect(() => {

    const LoadingMsg = () => (
      <div>
        <i className="fa fa-bell-o" ></i><strong className="ml-2">{Loading}</strong>    {"page Do not close this page..."}
      </div>
    )
    if (localStorage.getItem("isUser") === "true") {
      setModal(true)
      toast(<LoadingMsg />, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } else {
      setModal(false)
    }

    var profit = Knob({
      width: 230,
      height: 230,
      thickness: .060,
      angleOffset: 90,
      fgColor: '#fb2e63',
      bgColor: '#f2f4ff',
      lineCap: 'round'
    })
    document.getElementById('profit').appendChild(profit);

  }, []);

  return (
    <Fragment>

      <BreadCrumb parent="Home" subparent="Dashboard" title="Default" />

      <Container fluid={true}>
        <Row>
          <Col lg="12" className="xl-100">
            <Row>
              {stateOptions.map(data => (
                <Col xl="3" md="6" className="xl-50 box-col-6" key={data.id}>
                  <Card className={data.cardBg}>
                    <CardBody className="tag-card">
                      <div className="progressbar-widgets">
                        <div className="media media-widgets">
                          <div className="media-body">
                            <p className={`mb-0 ${data.color === 'light' ? 'font-light' : ''}`}>{data.title}</p>
                            <h3 className="mt-0 mb-0 f-w-600"><DollarSign /><span className="counter">{data.scorr}</span><span><TrendingUp /></span></h3>
                          </div>
                          <span className={`badge flat-badge-${data.color} ${data.bdgeFont}`}>
                            {data.bdgeValue}
                            <i className="fa fa-caret-up"></i>
                          </span>
                        </div>
                        <div className="progress sm-progress-bar progress-animate">
                          <div className={`progress-gradient-${data.color}`} role="progressbar" style={{ 'width': data.progress }} aria-valuenow="75"
                            aria-valuemin="0" aria-valuemax="100">
                            <span className={`font-${data.color}`}>
                              {data.progress}
                            </span>
                            <span className="animate-circle"></span>
                          </div>
                        </div>
                        <span className={`tag-content-${data.color} tag-hover-effect ${data.color === 'light' ? 'tag-light' : ''}`}>
                          <TrendingUp />
                        </span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
              <Col xl="8" className="xl-100 box-col-12">
                <Card className="sales-overview">
                  <CardHeader>
                    <h5>{SalesOverview}</h5>
                  </CardHeader>
                  <CardBody className="p-0">
                    <Row className="m-0 dashboard-btn-groups">
                      <Col lg="6">
                        <ButtonGroup>
                          <Button color="light" outline className="btn-js">{Hours}</Button>
                          <Button color="light" outline className="btn-js">{Day}</Button>
                          <Button color="light" outline className="btn-js">{Week}</Button>
                          <Button color="light" outline className="btn-js active">{Month}</Button>
                        </ButtonGroup>
                      </Col>
                      <Col lg="6">
                        <ButtonGroup className="pull-right">
                          <Button color="light" outline className="btn-js1">{FromDate}</Button>
                          <Button color="light" outline className="btn-js1">{ToDate}</Button>
                          <Button color="light" outline className="btn-js1 active"><Calendar /></Button>
                        </ButtonGroup>
                      </Col>
                    </Row>
                    <CardBody>
                      <div className="chart-value-box pull-right">
                        <div className="value-square-box-primary"></div><span>{Profit}</span>
                      </div>
                      <div className="dashboard-rounded-chart flot-chart-container">
                        <ChartistGraph data={roundedChart} listener={roundedChartListener} options={roundedChartOptions} type={'Bar'} />
                      </div>
                    </CardBody>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4" className="xl-100 box-col-12">
                <Card>
                  <CardHeader>
                    <h5>{SalesByCategory}</h5>
                  </CardHeader>
                  <CardBody className="p-0">
                    <div className="sales-product-table table-responsive">
                      <Table borderless>
                        <tbody>
                          <tr>
                            <td><img className="img-fluid" src={tc1} alt="" /></td>
                            <td><span>{"Latest"} </span><span className="d-block">{"Niky Black shoes"}</span></td>
                            <td><span className="badge badge-pill pill-badge-secondary">{"21,562"}</span></td>
                            <td><span>{"28.21%"}</span></td>
                          </tr>
                          <tr>
                            <td><img className="img-fluid" src={tc2} alt="" /></td>
                            <td><span>{"Latest Men"} </span><span className="d-block">{"Shirt"}</span></td>
                            <td><span>{"15,102"}</span></td>
                            <td><span>{"18.00%"}</span></td>
                          </tr>
                          <tr>
                            <td><img className="img-fluid" src={tc3} alt="" /></td>
                            <td><span>{"Latest Women "}</span><span className="d-block">{"Purse"}</span></td>
                            <td><span>{"9562"}</span></td>
                            <td><span>{"08.54%"}</span></td>
                          </tr>
                          <tr>
                            <td><img className="img-fluid" src={tc4} alt="" /></td>
                            <td><span>{"Latest"} </span><span className="d-block">{"Women Sandals"}</span></td>
                            <td><span>{"1002"}</span></td>
                            <td><span>{"01.33%"}</span></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                  <CardFooter className="sales-product-table-footer">
                    <div className="media"><a href="#!" className="btn btn-outline-light">{"Last Week"}<i className="fa fa-angle-double-right ml-2"></i></a>
                      <div className="media-body"><a href="#!" className="pull-right">{ViewMoreReports} </a></div>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col xl="5" className="xl-100 box-col-12">
                <Card className="knob-widgets">
                  <CardBody>
                    <Row>
                      <Col md="6">
                        <div className="knob-block text-center profit-default" id="profit">
                          <div className="knob"></div>
                          <div className="knob-content-center">
                            <div>
                              <h6 className="f-w-600">{"March. 2019"}</h6><span className="f-w-600">{TotalInvest}</span>
                            </div>
                          </div>

                        </div>
                      </Col>
                      <Col md="6">
                        <div className="knob-live-content text-center">
                          <div className="setting-dot">
                            <div className="setting-bg pull-right"><i className="fa fa-spin fa-cog"></i></div>
                          </div>
                          <div className="small-bar">
                            <div className="ct-small-left flot-chart-container">
                              <ChartistGraph data={smallChart} listener={smallChartListener} options={smallChartOptions} type={'Bar'} />
                            </div>
                          </div>
                          <div className="span badge badge-pill pill-badge-secondary"> <i className="fa fa-circle"></i>{Live}</div>
                        </div>
                        <div className="knob-bottom-widgets text-center">
                          <h6 className="f-w-600">{"This Invest Cycle"}</h6>
                          <h5 className="f-w-600"><i data-feather="dollar-sign"></i>{"785,000"}</h5>
                          <h6 className="f-w-600 mb-0">{"Current Balance This Invest Cycle"}</h6>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="7" className="xl-100 box-col-12">
                <Card className="sales-overview">
                  <CardHeader className="card-header">
                    <h5>{OurGrowth}</h5>
                  </CardHeader>
                  <CardBody className="chart-block">
                    <Line data={lineChartData} options={lineChartOptions} height={46} />
                    <div className="chart-value-box pull-right">
                      <div className="value-square-box-warning"></div><span>{Profit}</span>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="8" className="xl-50 box-col-12">
                <Card>
                  <CardHeader>
                    <h5>{OurBestSeller}</h5>
                  </CardHeader>
                  <CardBody className="p-0">
                    <div className="sales-product-table table-responsive">
                      <Table borderless>
                        <thead>
                          <tr>
                            <th scope="col">{"Number"}</th>
                            <th scope="col">{"Name"}</th>
                            <th scope="col">{"Account"}</th>
                            <th scope="col">{"Sealing"}</th>
                            <th scope="col">{"Percentage"}</th>
                            <th scope="col">{"Custmoize"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{"01"}</td>
                            <td>
                              <div className="d-inline-block align-middle"><img className="img-radius img-30 align-top m-r-15 rounded-circle" src={tc5} alt="" />
                                <div className="d-inline-block">
                                  <h6 className="f-w-600">{"Nick Stone"}</h6>
                                </div>
                              </div>
                            </td>
                            <td><span>{"NikyBlack87@gmail.com"}</span></td>
                            <td><span>{"21,562"}</span></td>
                            <td><span>{"28.21%"}</span></td>
                            <td><span className="badge badge-pill pill-badge-secondary">{Edit}</span></td>
                          </tr>
                          <tr>
                            <td>{"02"}</td>
                            <td>
                              <div className="d-inline-block align-middle"><img className="img-radius img-30 align-top m-r-15 rounded-circle" src={tc6} alt="" />
                                <div className="d-inline-block">
                                  <h6 className="f-w-600">{"Milano Esco"}</h6>
                                </div>
                              </div>
                            </td>
                            <td><span>{"Milanoesco56@gmal.com"}</span></td>
                            <td><span>{"15,102"}</span></td>
                            <td><span>{"18.00%"}</span></td>
                            <td><span className="badge badge-pill pill-badge-success">{Edit}</span></td>
                          </tr>
                          <tr>
                            <td>{"03"}</td>
                            <td>
                              <div className="d-inline-block align-middle"><img className="img-radius img-30 align-top m-r-15 rounded-circle" src={tc7} alt="" />
                                <div className="d-inline-block">
                                  <h6 className="f-w-600">{"Wiltor Noice"}</h6>
                                </div>
                              </div>
                            </td>
                            <td><span>{"Wiltornoice34@gmail.com"}</span></td>
                            <td><span>{"9562"}</span></td>
                            <td><span>{"08.54%"}</span></td>
                            <td><span className="badge badge-pill pill-badge-warning">{Edit}</span></td>
                          </tr>
                          <tr>
                            <td>{"04"}</td>
                            <td>
                              <div className="d-inline-block align-middle"><img className="img-radius img-30 align-top m-r-15 rounded-circle" src={tc8} alt="" />
                                <div className="d-inline-block">
                                  <h6 className="f-w-600">{"Anna Strong"}</h6>
                                </div>
                              </div>
                            </td>
                            <td><span>{"Annastrong67@gmail.com"}</span></td>
                            <td><span>{"1002"}</span></td>
                            <td><span>{"01.33%"}</span></td>
                            <td><span className="badge badge-pill pill-badge-primary">{Edit}</span></td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4" className="xl-50 box-col-12">
                <Card>
                  <CardBody>
                    <div className="call-chat-card text-center">
                      <div className="setting-dot">
                        <div className="setting-bg pull-right"><i className="fa fa-spin fa-cog"></i></div>
                      </div>
                      <div className="call-images">
                        <img className="img-fluid" src={u1} alt="" />
                        <img className="img-fluid" src={u2} alt="" /></div>
                      <h5 className="f-w-600">{"11:36"}</h5>
                      <div className="call-chart-height">
                        <div className="call-chart">
                          <ChartistGraph data={callChart} listener={callChartListener} options={callChartOptions} type={'Bar'} />
                        </div>
                      </div>
                      <div className="call-chat-bottom">
                        <div className="text-center">
                          <div className="d-inline-block"><Pause /></div>
                          <div className="d-inline-block"><a href="#!" className="bg-secondary call-receive"><Phone /></a></div>
                          <div className="d-inline-block"><Volume2 /></div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="5" className="xl-100 box-col-12">
                <Card>
                  <CardHeader>
                    <h5>{WorkPlan}</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="work-plan text-center"><img className="img-fluid" src={wp} alt="" />
                      <h6>{"10:00 AM"}</h6>
                      <h5 className="f-w-600">{"5 Year Celebration"}</h5>
                      <p>{"Discussion About our new project and etc...."}</p>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination pagination-lg theme-pagination">
                        <li className="page-item"><a className="page-link" href="#!">{"21"}</a></li>
                        <li className="page-item"><a className="page-link" href="#!">{"22"}</a></li>
                        <li className="page-item"><a className="page-link" href="#!">{"23"}</a></li>
                        <li className="page-item active"><a className="page-link" href="#!">{"24"}</a></li>
                        <li className="page-item"><a className="page-link" href="#!">{"25"}</a></li>
                        <li className="page-item"><a className="page-link" href="#!">{"26"}</a></li>
                        <li className="page-item"><a className="page-link" href="#!">{"27"}</a></li>
                      </ul>
                    </nav>
                  </CardFooter>
                </Card>
              </Col>
              <Col xl="7" className="xl-100 box-col-12">
                <Card>
                  <CardHeader>
                    <h5>{Location} </h5>
                  </CardHeader>
                  <CardBody>
                    <Row className="dashboard-map">
                      <Col md="8">
                        <div id="gmap-simple" >
                          <LeafletMap
                            center={[50, 10]}
                            zoom={1}
                            maxZoom={1}
                            attributionControl={true}
                            zoomControl={true}
                            doubleClickZoom={true}
                            scrollWheelZoom={true}
                            dragging={true}
                            animate={true}
                            easeLinearity={0.35}
                          >
                            <GeoJSON
                              data={WorldData}
                              style={() => ({
                                color: '#4a83ec',
                                weight: 0.5,
                                fillColor: "#1a1d62",
                                fillOpacity: 1,
                              })}
                            />
                            <Marker position={[50, 10]}>
                              <Popup>
                                {"Popup for any custom information."}
                              </Popup>
                            </Marker>
                          </LeafletMap>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="map-right-box">
                          <div className="media">
                            <div className="map-box bg-warning box-color-warning"><Users /></div>
                            <div className="media-body"><span>{TotalNewUser}</span>
                              <h5>{"53,952,718"}</h5>
                            </div>
                          </div>
                          <div className="media">
                            <div className="map-box bg-primary box-color-primary"><Droplet /></div>
                            <div className="media-body"><span>{BounceDate}</span>
                              <h5>{"96%"}</h5>
                            </div>
                          </div>
                          <div className="media">
                            <div className="map-box bg-secondary box-color-secondary"><Clock /></div>
                            <div className="media-body"><span>{SessionDuartion}</span>
                              <h5>{"06:12:56"}</h5>
                            </div>
                          </div>
                          <div className="media">
                            <div className="map-box bg-success box-color-success"><Coffee /></div>
                            <div className="media-body"><span>{Session}</span>
                              <h5>{"06:12:56"}</h5>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Modal isOpen={modal} className="welcome-popup modal-dialog-centered ">
          <button onClick={toggle} className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <ModalBody>
            <ModalHeader></ModalHeader>
            <div className="contain p-50">
              <div className="text-center">
                <h3>{"Welcome to creative admin"}</h3>
                <p>{"start your project with developer friendly admin"} </p>
                <button
                  onClick={toggle}
                  className="btn btn-primary btn-lg txt-white"
                  type="button" data-dismiss="modal"
                  aria-label="Close">{GetStarted}</button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Container>

    </Fragment>

  )
}

export default Default
