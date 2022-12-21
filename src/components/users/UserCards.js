import React,{Fragment} from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import { Container,Row,Col,Card,CardHeader,CardFooter,Media} from 'reactstrap'
const UserCards = (props) =>  {
    return (
        <Fragment>
        <BreadCrumb parent="Home" subparent="Users" title="User Cards"/>
        <Container fluid={true}>
            <Row>
              <Col md="6" lg="6" xl="4 box-col-6" >
                <Card className="custom-card">
                    <CardHeader>
                      <Media body className="img-fluid" src={require("../../assets/images/user-card/1.jpg")} alt=""/>
                    </CardHeader>
                    <div className="card-profile">
                      <Media body className="rounded-circle" src={require("../../assets/images/avtar/3.jpg")} alt=""/>
                    </div>
                  <ul className="card-social">
                    <li><a href="#javascript"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-rss"></i></a></li>
                  </ul>
                  <div className="text-center profile-details">
                    <h4>Mark Jecno</h4>
                    <h6>Manager</h6>
                  </div>
                  <CardFooter className="row">
                    <Col sm="4 col-4">
                      <h6>Follower</h6>
                      <h3 className="counter">9564</h3>
                    </Col>
                    <Col sm="4 col-4">
                      <h6>Following</h6>
                      <h3><span className="counter">49</span>K</h3>
                    </Col>
                    <Col sm="4 col-4">
                      <h6>Total Post</h6>
                      <h3><span className="counter">96</span>M</h3>
                    </Col>
                  </CardFooter>
                </Card>
              </Col>
              <div className="col-md-6 col-lg-6 col-xl-4 box-col-6">
                <div className="card custom-card">
                    <CardHeader>
                      <Media body className="img-fluid" src={require("../../assets/images/user-card/2.jpg")} alt=""/>
                    </CardHeader>
                    <div className="card-profile">
                      <Media body className="rounded-circle" src={require("../../assets/images/avtar/16.jpg")} alt=""/>
                    </div>
                  <ul className="card-social">
                    <li><a href="#javascript"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-rss"></i></a></li>
                  </ul>
                  <div className="text-center profile-details">
                    <h4>Johan Deo</h4>
                    <h6>Designer</h6>
                  </div>
                  <CardFooter className="row">
                    <Col sm="4 col-4">
                      <h6>Follower</h6>
                      <h3 className="counter">2578</h3>
                    </Col>
                    <Col sm="4 col-4">
                      <h6>Following</h6>
                      <h3><span className="counter">26</span>K</h3>
                    </Col>
                    <Col sm="4 col-4">
                      <h6>Total Post</h6>
                      <h3><span className="counter">96</span>M</h3>
                    </Col>
                  </CardFooter>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-4 box-col-6">
                <div className="card custom-card">
                    <CardHeader>
                      <Media body className="img-fluid" src={require("../../assets/images/user-card/3.jpg")} alt=""/>
                    </CardHeader>
                    <div className="card-profile">
                      <Media body className="rounded-circle" src={require("../../assets/images/avtar/11.jpg")} alt=""/>
                    </div>
                  <ul className="card-social">
                    <li><a href="#javascript"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-rss"></i></a></li>
                  </ul>
                  <div className="text-center profile-details">
                    <h4>Dev John</h4>
                    <h6>Devloper</h6>
                  </div>
                  <CardFooter className="row">
                    <Col sm="4 col-4">
                      <h6>Follower</h6>
                      <h3 className="counter">6545</h3>
                    </Col>
                    <Col sm="4 col-4">
                      <h6>Following</h6>
                      <h3><span className="counter">91</span>K</h3>
                    </Col>
                    <Col sm="4 col-4">
                      <h6>Total Post</h6>
                      <h3><span className="counter">21</span>M</h3>
                    </Col>
                  </CardFooter>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-4 box-col-6">
                <div className="card custom-card">
                    <CardHeader>
                      <Media body className="img-fluid" src={require("../../assets/images/user-card/7.jpg")} alt=""/>
                    </CardHeader>
                    <div className="card-profile">
                      <Media body className="rounded-circle" src={require("../../assets/images/avtar/16.jpg")} alt=""/>
                    </div>
                  <ul className="card-social">
                    <li><a href="#javascript"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-rss"></i></a></li>
                  </ul>
                  <div className="text-center profile-details">
                    <h4>Johan Deo</h4>
                    <h6>Designer</h6>
                  </div>
                  <CardFooter className="row">
                    <Col sm="4 col-4">
                      <h6>Follower</h6>
                      <h3 className="counter">2578</h3>
                    </Col>
                    <Col sm="4 col-4">
                      <h6>Following</h6>
                      <h3><span className="counter">26</span>K</h3>
                    </Col>
                    <Col sm="4 col-4">
                      <h6>Total Post</h6>
                      <h3><span className="counter">96</span>M</h3>
                    </Col>
                  </CardFooter>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-4 box-col-6">
                <div className="card custom-card">
                    <CardHeader>
                      <Media body className="img-fluid" src={require("../../assets/images/user-card/5.jpg")} alt=""/>                        
                    </CardHeader>
                    <div className="card-profile">
                      <Media body className="rounded-circle" src={require("../../assets/images/avtar/11.jpg")} alt=""/>
                    </div>
                  <ul className="card-social">
                    <li><a href="#javascript"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-rss"></i></a></li>
                  </ul>
                  <div className="text-center profile-details">
                    <h4>Dev John</h4>
                    <h6>Devloper</h6>
                  </div>
                  <CardFooter className="row">
                    <Col sm="4 col-4">
                      <h6>Follower</h6>
                      <h3 className="counter">6545</h3>
                    </Col>
                    <Col sm="4 col-4">
                      <h6>Following</h6>
                      <h3><span className="counter">91</span>K</h3>
                    </Col>
                    <Col sm="4 col-4">
                      <h6>Total Post</h6>
                      <h3><span className="counter">21</span>M</h3>
                    </Col>
                  </CardFooter>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-4 box-col-6">
                <div className="card custom-card">
                    <CardHeader>
                      <Media body className="img-fluid" src={require("../../assets/images/user-card/6.jpg")} alt=""/>
                    </CardHeader>
                    <div className="card-profile">
                      <Media body className="rounded-circle" src={require("../../assets/images/avtar/3.jpg")} alt=""/>
                    </div>
                  <ul className="card-social">
                    <li><a href="#javascript"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#javascript"><i className="fa fa-rss"></i></a></li>
                  </ul>
                  <div className="text-center profile-details">
                    <h4>Mark Jecno</h4>
                    <h6>Manager</h6>
                  </div>
                  <CardFooter className="row">
                    <Col sm="4 col-4">
                      <h6>Follower</h6>
                      <h3 className="counter">9564</h3>
                    </Col>
                    <Col sm="4 col-4">
                      <h6>Following</h6>
                      <h3><span className="counter">49</span>K</h3>
                    </Col>
                    <Col sm="4 col-4">
                      <h6>Total Post</h6>
                      <h3><span className="counter">96</span>M</h3>
                    </Col>
                  </CardFooter>
                </div>
              </div>
            </Row>
          </Container>
          </Fragment>
    );
}

export default UserCards;