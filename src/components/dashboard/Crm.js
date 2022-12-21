import React,{Fragment,useState} from 'react'
import BreadCrumb from '../../layout/Breadcrumb'
import ChartistGraph from 'react-chartist';
import { Line } from 'react-chartjs-2';
import Chart from 'react-apexcharts'
import CKEditor from "react-ckeditor-component";
import { ArrowRight, Paperclip, DollarSign, MoreVertical, User, CreditCard, Settings, FileText, LogOut } from 'react-feather'
import { Container, Row, Col, Card, CardBody, CardHeader, Button, CardFooter, Table, Input, FormGroup } from 'reactstrap'
import { graphRounded, graphRoundedOptions, graphRoundedListener, lineAreaFullChart, lineAreaFullChartOptions, lineAreaFullChartListener } from './chartsData/chartist'
import {crmlineChartData, crmlineChartDataOption,newProjectLineChartData, newProjectLineChartOption} from './chartsData/chartJs'
import { category, clients, task } from './data'
import { apexTotalUsers, crmSmallChart, doneProjectChart } from './chartsData/apexChart'
import user from '../../assets/images/user/2.jpg'
import user1 from '../../assets/images/user/11.png'
import user2 from '../../assets/images/user/12.jpg'
import Slider from "react-slick";
import { TotalProject,SeptemberTotal,ViewFullChart,TotalUsers,Profile,Message,DoneProject,OurClient,Hours,Day,Week,Month,ProjectIncome,TotalIncome,NewProject,TotalNewProject,QuickMail,Send,Admin,YourAccount,InvoicesAndPayments,Setting,YourServices,MyTask,Chat,RecentActivities,LogOuts } from "../../constant";

const Crm = () => {

  const [content,setContent] = useState("Hello, <br/> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy")

  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent)
  }

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1660,
        settings: { slidesToShow: 8 }
      },
      {
        breakpoint: 1366,
        settings: { slidesToShow: 6 }
      },
      {
        breakpoint: 1199,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 360,
        settings: { slidesToShow: 1 }
      },
    ]
  };
  return (
    <Fragment>
    <BreadCrumb parent="Home" subparent="Dashboard" title="CRM"/>
    <Container fluid={true}>
      <Row>
        <Col xl="8" className="xl-60 box-col-12">
          <Card>
            <CardHeader>
              <h5>{TotalProject}</h5>
            </CardHeader>
            <CardBody className="chart-block">
              <div id="graph_rounded">
                <ChartistGraph data={graphRounded} options={graphRoundedOptions} listener={graphRoundedListener} type={'Bar'} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4" className="xl-40 box-col-12">
          <Card className="crm-chart-card">
            <CardHeader className="pb-0"><span className="mt-0">{SeptemberTotal}</span>
              <h3 className="mb-0"> <span> <DollarSign/>{"4,223,345"}</span></h3><span className="badge flat-badge-secondary d-inline-block">{"+ 5.5% (10.1)"}</span>
            </CardHeader>
            <CardBody>
              <div className="dashboard-chart-container">
                <div className="full-chart">
                  <ChartistGraph data={lineAreaFullChart} options={lineAreaFullChartOptions} listener={lineAreaFullChartListener} type={'Line'} />
                </div>
              </div>
              <div className="full-chart-bottom">
                <ul>
                  <li><a href="/#">
                    <h6 className="mb-0">{"1D"}</h6></a></li>
                  <li><a href="/#">
                    <h6 className="mb-0">{"2D"}</h6></a></li>
                  <li className="active"><a href="/#">
                    <h6 className="mb-0">{"3D"}</h6></a></li>
                  <li><a href="/#">
                    <h6 className="mb-0">{"4D"}</h6></a></li>
                  <li><a href="/#">
                    <h6 className="mb-0">{"5D"}</h6></a></li>
                </ul>
                <Button className="btn gradient-danger btn-pill btn-block"><span className="pull-left">{ViewFullChart}</span><span className="d-inline-block pull-right"><span className="round-icon"><ArrowRight /></span></span></Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" id="slick-carousel-14">
          <Slider {...settings}>
            {category.map(data => (
              <div className="item" key={data.title}>
                <div className={`card crm-icon-box text-center ${data.classHover}`}>
                  <div className="card-body">
                    <i className={`icofont ${data.className1}`}></i>
                    <i className={`icofont crm-overlay ${data.className2}`}></i>
                    <h6>{data.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Col>
        <Col xl="4" className="xl-100 box-col-6">
          <Card className="crm-total-user-card">
            <CardBody>
              <div className="user-circle"><i className="icofont icofont-ui-user"></i></div>
              <div className="total-user-title d-flex">
                <h2 className="f-w-600"> <span className="counter">{"85.3"}</span>{"k"}</h2>
                <div className="setting-dot">
                  <div className="setting-bg pull-right"><i className="fa fa-spin fa-cog"></i></div>
                </div>
              </div>
              <h4 className="mb-0">{TotalUsers}</h4>
            </CardBody>
            <div className="apex-chart-container">
              <div id="area-crm-chart">
                <Chart options={apexTotalUsers.options} series={apexTotalUsers.series} height="205" type="area" />
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="4" className="col-lg-6 xl-50 box-col-6">
          <Card className="crm-user-card">
            <CardHeader className="card-header">
              <div className="crm-user-top-content text-center"><img className="img-fluid rounded-circle" src={user} alt=""/>
                <h4>{"Alena Ketrol"}</h4><span className="badge flat-badge-secondary">{"Our Md"}</span>
              </div>
            </CardHeader>
            <CardBody>
              <Row>
                <Col sm="6">
                  <div className="apex-chart-small">
                    <div id="area-crm-chart-small">
                      <Chart options={crmSmallChart.options} series={crmSmallChart.series} height="120" width="140" type="area" />
                    </div>
                  </div>
                </Col>
                <Col sm="6">
                  <h2 className="counter">{"216"}</h2>
                  <h4>{"Deal Done"}</h4>
                </Col>
              </Row>
            </CardBody>
            <CardFooter className="p-0">
              <ul>
                <li><span>{Profile}</span></li>
                <li><span>{Message}</span></li>
              </ul>
            </CardFooter>
          </Card>
        </Col>
        <Col xl="4" lg="6" className="xl-50 box-col-12">
          <Card className="crm-total-user-card done-project-card">
            <CardBody>
              <div className="user-circle"><i className="icofont icofont-rocket-alt-2"></i></div>
              <div className="total-user-title d-flex">
                <h2 className="f-w-600"> <span className="counter">{"160"}</span>{"k"}</h2>
                <div className="setting-dot">
                  <div className="setting-bg pull-right"><i className="fa fa-spin fa-cog"></i></div>
                </div>
              </div>
              <h4 className="mb-0">{DoneProject}</h4>
            </CardBody>
            <div className="apex-chart-container">
              <div id="area-crm-chart-1">
                <Chart options={doneProjectChart.options} series={doneProjectChart.series}  height="205" type="area" />
              </div>
            </div>
          </Card>
        </Col>
        <Col sm="12">
          <Card className="our-client-table">
            <CardHeader>
              <h5>{OurClient}</h5>
              <div className="dashboard-btn-groups">
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button className="btn btn-outline-light" type="button">{Hours}</button>
                  <button className="btn btn-outline-light" type="button">{Day}</button>
                  <button className="btn btn-outline-light" type="button">{Week}</button>
                  <button className="btn btn-outline-light active" type="button">{Month}</button>
                </div>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <div className="sales-product-table table-responsive crm-client-table">
                <Table className="table table-bordernone">
                  <thead>
                    <tr>
                      <th scope="col">{"Number"}</th>
                      <th scope="col">{"Name"}</th>
                      <th scope="col">{"Country"}</th>
                      <th scope="col">{"Date"}</th>
                      <th scope="col">{"Payment"}</th>
                      <th scope="col">{"Total"}</th>
                      <th scope="col">{"Status"}</th>
                      <th colSpan="2">{"Project Progress"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map(data => (
                        <tr key={data.id}>
                      <td>{data.id}</td>
                        <td>
                          <div className="d-inline-block align-middle"><img className="img-radius img-30 m-r-15 rounded-circle" src={data.imagepath} alt=""/>
                            <div className="d-inline-block">
                              <h6 className="f-w-600">{data.title}</h6>
                            </div>
                          </div>
                        </td>
                        <td><i className={`flag-icon ${data.country}`}></i></td>
                        <td><span>{data.date}</span></td>
                        <td><img className="img-30" src={data.payment} alt=""/></td>
                        <td><span>{data.total}<DollarSign/></span></td>
                        <td><span className="status-position"><i className={`fa fa-circle ${data.statusClass}`}> </i>{data.status}</span></td>
                        <td className="project-progress">
                          <div className="progress sm-progress-bar progress-animate">
                            <div className={data.progressColor} role="progressbar" style={{'width': data.progress}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span className="animate-circle"></span></div>
                          </div>
                        </td>
                        <td><MoreVertical/></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <CardHeader className="card-header">
              <h5>{ProjectIncome}</h5>
              <div className="card-header-right">
              </div>
            </CardHeader>
            <CardBody className="crm-dashboard-chart">
              <div className="crm-top-chart">
                <h1 className="font-info mb-0 counter">{"32"}</h1><span>{TotalIncome}</span><span className="d-block f-12"><span className="d-inline-block up-icon-middle"><i className="fa fa-sort-up mr-1 font-info"> </i></span>{"100%"}</span>
              </div>
                <Line data={crmlineChartData} options={crmlineChartDataOption} height={80} />
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <CardHeader>
              <h5>{NewProject}</h5>
            </CardHeader>
            <CardBody className="crm-dashboard-chart">
              <div className="crm-top-chart">
                <h1 className="font-secondary mb-0 counter">{"26"}</h1><span>{TotalNewProject}</span><span className="d-block f-12"><span className="d-inline-block up-icon-middle"><i className="fa fa-sort-up mr-1 font-secondary"> </i></span>{"100%"}</span>
              </div>
              <Line data={newProjectLineChartData} options={newProjectLineChartOption} height={80} />
            </CardBody>
          </Card>
        </Col>
        <Col xl="8" className="xl-100 box-col-12">
          <Card>
            <CardHeader>
              <h5>{QuickMail}</h5>
              </CardHeader>
            <CardBody>
              <div className="quick-mail">
                <Row>
                  <Col>
                    <div className="form-group">
                      <Input className="form-control btn-pill" type="email" placeholder="To"/>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <div className="form-group mb-0">
                    <Input className="form-control btn-pill" type="email" placeholder="CC"/>
                    </div>
                  </Col>
                  <Col sm="6" className="xs-input-space">
                    <div className="form-group mb-0">
                    <Input className="form-control btn-pill" type="email" placeholder="Subject"/>
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
            <CKEditor 
                activeClassName="p10 crm-editor"
                content={content}
                events={{
                    "change": onChange
                }}
            /> 
            <CardFooter className="quick-mail-footer">
              <Button className="btn btn-secondary btn-pill">{Send}</Button>
              <Button className="btn btn-transparent btn-clip ml-1"><Paperclip/></Button>
            </CardFooter>
            </Card>
        </Col>
        <Col xl="4" className="xl-50 box-col-6">
          <Card className="crm-user-profile-card">
            <CardHeader className="p-0 profile-top-bg">
              <div className="profile-round profile-round-big animation-round-1"></div>
              <div className="profile-round profile-round-medium animation-round-2"> </div>
              <div className="profile-round profile-round-big animation-round-3"></div>
              <div className="profile-round profile-round-small animation-round-4"></div>
              <div className="profile-round profile-round-semi-small animation-round-5"></div>
              <div className="profile-round profile-round-small animation-round-6"></div>
              <div className="profile-details">
                <div className="media"><img className="img-90 rounded-circle" src={user1} alt=""/>
                  <div className="media-body">
                    <h5>{"Alex Goldmine"}</h5><span className="f-12 d-block">{"Alexgoldmine_98@gmail.com"}</span><span className="badge badge-pill bg-white font-info">{Admin}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <ul>
                <li>
                  <h6><User/>{YourAccount}</h6>
                </li>
                <li>
                  <h6> <CreditCard/>{InvoicesAndPayments}<span className="pull-right badge badge-pill pill-badge-secondary">{"2"}</span></h6>
                </li>
                <li>
                  <h6><Settings/>{Setting}</h6>
                </li>
                <li>
                  <h6> <FileText/>{YourServices}</h6>
                </li>
                <li>
                  <h6><LogOut/>{LogOuts}</h6>
                </li>
              </ul>
            </CardBody>
          </Card>
            </Col>
        <Col xl="4" className="xl-50 box-col-6">
            <Card>
              <CardHeader>
                <h5>{MyTask}</h5>
              </CardHeader>
              <CardBody className="p-0">
                <div className="my-tasks">
                {task.map(
                  (data) => (
                    <div className="media" key={data.id}>
                    <div className={`checkbox checkbox-square-${data.classname}`}>
                      <FormGroup check>
                        <Input type="checkbox" />{' '}
                        <label></label>
                      </FormGroup>
                    </div>
                    <div className="media-body">
                      <h6 className="mb-0 f-w-600">{data.name}</h6>
                     <p>{data.task}</p><span className={`badge badge-pill badge-${data.classname}`}>{data.status}</span>
                    </div>
                  </div>
                  )
                )}
                </div>
              </CardBody>
            </Card>
          </Col>
        <Col xl="4" className="xl-50 box-col-6">
          <Card>
            <CardHeader>
              <h5>{Chat}</h5>
              <div className="crm-chat-status">
                <div className="circle-dashed-box">
                  <div className="circle-dashed"><i className="fa fa-plus"></i></div>
                </div><img className="img-30 rounded-circle" src={user} alt=""/><img className="img-30 rounded-circle mr-0" src={user2} alt=""/>
              </div>
            </CardHeader>
            <CardBody className="chat-box crm-chat">
              <div className="chat">
                <div className="media left-side-chat"><img className="rounded-circle chat-user-img img-60 m-r-20" src={user2} alt=""/>
                  <div className="media-body"><span className="f-12">{"Message seen 4:07 PM"}</span>
                    <div className="message-main">
                      <p className="mb-0 f-12">{"Lorem  Ipsum is  simply  dummy text  of the printing and typesetting."}</p>
                    </div>
                  </div>
                </div>
                <div className="media right-side-chat">
                  <div className="media-body text-right"><span className="f-12 d-block">{"Message seen 4:10 PM"}</span>
                    <div className="message-main pull-right">
                      <p className="mb-0 text-left">{"Lorem  Ipsum is  simply  dummy text  of the printing."}</p>
                      <div className="clearfix"></div>
                    </div>
                  </div><img className="rounded-circle chat-user-img img-60 m-l-20" src={user} alt=""/>
                </div>
                <div className="media left-side-chat"><img className="rounded-circle chat-user-img img-60 m-r-20" src={user2} alt=""/>
                  <div className="media-body"><span className="f-12">{"Message seen 4:15 PM"}</span>
                    <div className="message-main">
                      <p>{"Lorem  Ipsum is  simply  dummy."}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4" className="xl-50 box-col-6">
                <Card>
                  <CardHeader className="card-header">
                    <h5>{RecentActivities}</h5>
                  </CardHeader>
                  <CardBody>
                    <div className="timeline-circle">
                      <div className="media"><span className="f-12">{"11:20"}</span>
                        <div className="timeline-background">
                          <div className="timeline-dot-success"></div>
                          <div className="timeline-line"> </div>
                        </div>
                        <div className="media-body">
                          <h6 className="mb-0">{"Updated Product"}</h6>
                          <p className="f-12">{"Quisque a consequat ante, at volutpat enim."}</p>
                        </div>
                      </div>
                      <div className="media"><span className="f-12">{"Today"}</span>
                        <div className="timeline-background">
                          <div className="timeline-dot-primary"></div>
                          <div className="timeline-line"> </div>
                        </div>
                        <div className="media-body">
                          <h6 className="mb-0">{"You liked James products"}</h6>
                          <p className="f-12">{"Aenean sit amet magna vel magna fringilla ferme."}</p>
                        </div>
                      </div>
                      <div className="media"><span className="f-12">{"05:04"}</span>
                        <div className="timeline-background">
                          <div className="timeline-dot-warning"></div>
                          <div className="timeline-line"></div>
                        </div>
                        <div className="media-body">
                          <h6 className="mb-0">{"James just like your product"}</h6>
                          <p className="f-12">{"Nam posuere accumsan porta."}</p>
                        </div>
                      </div>
                      <div className="media"><span className="f-12">{"08:20"}</span>
                        <div className="timeline-background">
                          <div className="timeline-dot-secondary"></div>
                          <div className="timeline-line"></div>
                        </div>
                        <div className="media-body">
                          <h6 className="mb-0">{"Jenna commented on your product"}</h6>
                          <p className="f-12">{"Curabitur egestas consequat lorem."}</p>
                        </div>
                      </div>
                      <div className="media"><span className="f-12">{"Last Week"}</span>
                        <div className="timeline-background">
                          <div className="timeline-dot-info"></div>
                          <div className="timeline-line"></div>
                        </div>
                        <div className="media-body">
                          <h6 className="mb-0">{"Jihan Doe just like your product"}</h6>
                          <p className="f-12">{"Vestibulum nec mi suscipit, dapibus purus a "}   </p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
        </Row>
    </Container>
    </Fragment>
  )
}

export default Crm
