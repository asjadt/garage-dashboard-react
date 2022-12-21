import React, {useState,Fragment } from 'react'
import BreadCrumb from '../../layout/Breadcrumb'
import ChartistGraph from 'react-chartist';
import Chart from 'react-apexcharts'
import { Container, Row, Col, Card, CardBody, CardHeader, Button, Table, CardFooter } from 'reactstrap'
import { operationSmallChart,visitorSmallChart,medicineSmallChart, hospitalSmallChartOptions, smallChartListener, hospitalCurveChart, hospitalCurveChartOptions } from './chartsData/chartist'
import { apexBarChart, apexSmallChart } from './chartsData/apexChart'
import {doctorList, bookedAppoinment, patients} from './data'
import Heart from  '../../assets/images/dashboard-hospital/heart.png'
import Brain from  '../../assets/images/dashboard-hospital/brain.png'
import Pill from '../../assets/images/dashboard-hospital/hospital-pill.png'
import p1 from '../../assets/images/dashboard-hospital/p1.jpg'
import hp1 from '../../assets/images/dashboard-hospital/hp1.jpg'
import hp2 from '../../assets/images/dashboard-hospital/hp2.jpg'
import { New,NewPatients,OPDPatients,Operations,Medicine,PatientIn,HospitalActivities,HospitalFinances,Profit,DoctorList,Visitors,Expensens,Details,SpecialistList,Message,BookedAppointment,Action,AdmitPatientList,Specialist} from "../../constant";

const Hospital = () => {

    // eslint-disable-next-line
    const [doctorListState, setDoctorList] = useState(doctorList);
    // eslint-disable-next-line
    const [bookedAppoinmentState, setbookedAppoinment] = useState(bookedAppoinment);
    // eslint-disable-next-line
    const [admitPatientState, setadmitPatientState] = useState(patients);
   
    return (
      <Fragment>
        <BreadCrumb parent="Home" subparent="Dashboard" title="Hospital"/>
        <Container fluid={true}>
            <Row>
              <Col xl="3" className="xl-50 col-6 hospital-patients box-col-6">
                <Card className="o-hidden">
                  <CardBody>
                    <div className="hospital-widgets media">
                      <div className="hospital-box light-bg-danger"><img src={Heart} alt=""/></div>
                      <div className="media-body">
                        <div className="hospital-content">
                          <h3 className="d-inline-block f-w-600">{"46"}</h3><span className="badge flat-badge-secondary m-l-10">{New}</span>
                          <h6 className="m-t-5 mb-0 f-w-600">{NewPatients}</h6>
                        </div>
                        <div className="flowers">
                          <div className="flower1"></div>
                          <div className="flower2"></div>
                          <div className="flower3"></div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="3" className="xl-50 col-6 hospital-patients box-col-6">
                <Card className="o-hidden">
                  <CardBody>
                    <div className="hospital-widgets media">
                      <div className="hospital-box light-bg-primary"><img src={Brain} alt=""/></div>
                      <div className="media-body">
                        <div className="hospital-content">
                          <h3 className="d-inline-block f-w-600">{"75"}</h3><span className="badge flat-badge-primary m-l-10">{"OPD"}</span>
                          <h6 className="m-t-5 mb-0 f-w-600">{OPDPatients}</h6>
                        </div>
                        <div className="flowers">
                          <div className="flower1 flower-primary"></div>
                          <div className="flower2 flower-primary"></div>
                          <div className="flower3 flower-primary"></div>
                        </div>
                      </div>
                    </div>
                </CardBody>
              </Card>
              </Col>
              <Col xl="6" className="xl-100 box-col-12">
                <Card>
                  <CardBody>
                    <Row className="r-hospital-chart">
                      <Col xl="4" md="4" sm="6">
                        <div className="media hospital-small-chart">
                          <div className="small-bar">
                            <div className="small-chart flot-chart-container">
                            <ChartistGraph data={operationSmallChart} listener={smallChartListener} options={hospitalSmallChartOptions} type={'Bar'} />
                            </div>
                          </div>
                          <div className="media-body">
                            <h3 className="d-inline-block f-w-600 m-l-10 mb-0">{"350"}</h3>
                            <h6 className="mb-0 f-w-600 m-l-10">{Operations}</h6>
                          </div>
                        </div>
                      </Col>
                      <Col xl="4" md="4" sm="6" className="b-l-light">
                        <div className="media hospital-small-chart">
                          <div className="small-bar">
                            <div className="small-chart1 flot-chart-container">
                            <ChartistGraph data={visitorSmallChart} listener={smallChartListener} options={hospitalSmallChartOptions} type={'Bar'} />
                            </div>
                          </div>
                          <div className="media-body">
                            <h3 className="d-inline-block f-w-600 m-l-10 mb-0">{"450"}</h3>
                            <h6 className="mb-0 f-w-600 m-l-10">{Visitors}</h6>
                          </div>
                        </div>
                      </Col>
                      <Col xl="4" md="4" sm="12" className="b-l-light last-card">
                        <div className="media hospital-small-chart">
                          <div className="small-bar">
                            <div className="small-chart2 flot-chart-container">
                            <ChartistGraph data={medicineSmallChart} listener={smallChartListener} options={hospitalSmallChartOptions} type={'Bar'} />
                            </div>
                          </div>
                          <div className="media-body">
                            <h3 className="d-inline-block f-w-600 m-l-10 mb-0">{"1021"}</h3>
                            <h6 className="mb-0 f-w-600 m-l-10">{Medicine}</h6>
                          </div>
                        </div>
                      </Col> 
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="8" className="xl-100 box-col-12">
                <Card>
                <CardHeader>
                    <h5>{PatientIn}</h5>
                </CardHeader>
                <CardBody>
                    <div className="apex-chart-container chart-data">
                    <div id="column-chart">
                    <Chart options={apexBarChart.options} series={apexBarChart.series} height="280" type="bar" />
                    </div>
                    </div>
                </CardBody>
                </Card>
                </Col>
              <Col xl="4" className="xl-100 box-col-6">
                <Card className="bg-gradient-primary hospital-bg">
                  <CardHeader>
                    <h5>{HospitalFinances}</h5>
                  </CardHeader>
                  <CardBody className="p-0">
                    <div className="hospital-chartist">
                      <div className="hospital-curve">
                      <ChartistGraph data={hospitalCurveChart} options={hospitalCurveChartOptions} type={'Line'} />
                      </div>
                      <div className="hospital-pin"><img src={Pill} alt=""/>
                        <div className="hospital-profit">
                          <i className="fa fa-circle-o p-r-10"></i>
                        <span className="pr-4">{Expensens}  </span>
                        <i className="fa fa-database p-r-10"></i><span className="p-r-10">{Profit}  </span></div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4" className="xl-50 box-col-6">
                <Card className="height-equal">
                  <CardHeader className="card-header">
                    <h5>{DoctorList}</h5>
                  </CardHeader>
                  <CardBody className="card-body p-0">
                    <div className="sales-product-table crypto-table-market sass-table table-responsive">
                      <Table borderless>
                        <tbody>
                          {doctorListState.map(data =>(
                                 <tr key={data.id}>
                                 <td>
                                   <div className="media"><img className="img-fluid rounded-circle img-40 mr-3" src={data.imagepath} alt=""/>
                                     <div className="media-body"><span className="f-w-600 d-block">{data.title}</span></div>
                                   </div>
                                 </td>
                                 <td className="text-center"><span className="f-w-600 d-block">{data.position}</span></td>
                                 <td>
                                 <Button color="light" outline className="txt-dark">{Details}</Button>
                                 </td>
                               </tr>
                          ))}
                        </tbody> 
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4" className="xl-50 box-col-6">
                <Card className="crm-user-card hospital-user height-equal">
                  <CardHeader>
                    <div className="crm-user-top-content text-center"><img className="img-fluid rounded-circle" src={p1} alt=""/>
                      <h4> <span className="mr-2"><i className="f-20 font-secondary mdi mdi-cards-heart"></i></span>{"Henry Ketrol"}</h4><span className="badge flat-badge-secondary">{Specialist}</span>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col xs="6">
                        <div className="apex-chart-small">
                          <div id="hospital-area-chart-small">
                          <Chart options={apexSmallChart.options} series={apexSmallChart.series} height="120" width="140" type="area" />
                          </div>
                        </div>
                      </Col>
                      <Col xs="6">
                        <h2 className="counter">{"414"}</h2>
                        <h4>{Operations}</h4>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="p-0">
                    <ul>
                      <li><span>{SpecialistList}</span></li>
                      <li><span>{Message} </span></li>
                    </ul>
                  </CardFooter>
                </Card>
              </Col>
              <Col xl="4" className="xl-50 box-col-6">
                <Card className="height-equal">
                  <CardHeader>
                    <h5>{HospitalActivities}</h5>
                  </CardHeader>
                  <CardBody className="pb-0">
                    <div className="timeline-circle hospital-timeline">
                      <div className="media mt-0">
                        <div className="timeline-background">
                          <div className="timeline-dot-primary"></div>
                          <div className="timeline-line"> </div>
                        </div>
                        <div className="media-body">
                          <p>{"20-4-2019 - Today"}</p>
                          <h6>{"Using Laser Treatment to Help"}</h6><small className="mb-2 d-block"> <span className="font-primary">{"Elisse Joson San"} </span>{"Francisco, CA"}</small>
                          <p className="paragraph-font f-12">{"web by far While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card."}</p>
                          <img className="p-r-10" src={hp1} alt=""/>
                          <img className="p-r-10" src={hp2} alt=""/>
                        </div>
                      </div>
                      <div className="media mt-0">
                        <div className="timeline-background">
                          <div className="timeline-dot-secondary"></div>
                        </div>
                        <div className="media-body">
                          <p>{"19-04-2019 - Yesterday"}</p>
                          <h6>{"A Brief History Of Anesthetics"}</h6><small className="mb-2 d-block"> <span className="font-secondary">{"Katherine Lumaad"}</span> {"Oakland, CA"}</small>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="7" className="xl-50 box-col-12">
                <Card>
                  <CardHeader>
                    <h5>{BookedAppointment}</h5>
                  </CardHeader>
                  <CardBody className="p-0">
                    <div className="sales-product-table table-responsive booked-table">
                      <Table borderless className="text-center">
                        <thead>
                          <tr>
                            <th scope="col">{"Number"}</th>
                            <th scope="col">{"Pateint Name"}</th>
                            <th scope="col">{"Assigned Doctor"}</th>
                            <th scope="col">{"Date"}</th>
                            <th scope="col">{"Time"}</th>
                            <th scope="col">{"Action"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bookedAppoinmentState.map(data => (
                            <tr key={data.id}>
                              <td>{data.id}</td>
                              <td>
                                <div className="d-inline-block align-middle">
                                  <div className="d-inline-block"><span className="f-w-600">{data.name}</span></div>
                                </div>
                              </td>
                              <td><span>{data.doctor}</span></td>
                              <td><span>{data.date}</span></td>
                              <td><span>{data.time}</span></td>
                              <td><span className={`badge badge-pill pill-badge-${data.className}`}>{Action}</span></td>
                          </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="5" className="xl-100 box-col-12">
                <Card>
                  <CardHeader>
                    <h5>{AdmitPatientList}</h5>
                  </CardHeader>
                  <CardBody className="p-0">
                    <div className="sales-product-table table-responsive hospital-table">
                      <Table borderless  className="text-center">
                        <thead>
                          <tr>
                            <th scope="col">{"Pateint Name"}</th>
                            <th scope="col">{"Diseases"}</th>
                            <th scope="col">{"Admit Date"}</th>
                            <th scope="col">{"Edit"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {admitPatientState.map(data => (
                               <tr key={data.id}>
                               <td>
                                <h6 className="f-w-600 mb-0">{data.name}</h6>
                               </td>
                               <td><span className="hospital-diseases"><span className={`circle-small-${data.className}`}> </span>{data.diseases}</span></td>
                               <td><span>{data.date}</span></td>
                               <td><span className="icofont icofont-ui-delete"></span></td>
                             </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            </Container>
            </Fragment>
    )
}

export default Hospital
