import React, { Fragment, useState,useEffect } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import { Codepen, FileText, Youtube, BookOpen, Aperture, Archive,ArrowRight } from 'react-feather';
import two from '../../assets/images/faq/2.jpg';
import one from '../../assets/images/faq/1.jpg';
import three from '../../assets/images/faq/3.jpg';
import four from '../../assets/images/faq/4.jpg';
import errorImg from '../../assets/images/search-not-found.png';
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter,Media,Form,FormGroup,Input} from "reactstrap"
import { Articles,Knowledgebase,Support,BrowseArticles,FeaturedTutorials,WebDesign,WebDevelopment,UIDesign,UXDesign } from "../../constant";
import axios from 'axios'

const KnowledgebaseComponent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [search, setsearch] = useState([]);
    const [Data,setData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/knowledgebaseDB.json`).then(res => setsearch(res.data))
    },[])

    const handleChange = event => {
        const searchByTitle = [];
        setSearchTerm(event.target.value);
        axios.get(`${process.env.PUBLIC_URL}/api/knowledgebaseDB.json`).then(res => setData(res.data))
        Data.filter(data => {
            if (data.title.toLowerCase().indexOf(event.target.value) > -1) {
                searchByTitle.push(data);
               
            }
            return data
        })
        setsearch(searchByTitle)
    };

    return (
        <Fragment>
            <BreadCrumb parent="Home" subparent="Knowledgebase" title="Knowledgebase"/>
            <Container fluid={true}>
                <Row>
                    <Col xl="4 xl-50" sm="6">
                        <Card className="bg-primary">
                            <CardBody>
                                <Media className="faq-widgets">
                                    <Media body>
                                        <h5>{Articles}</h5>
                                        <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                    </Media><FileText />
                                </Media>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="4 xl-50" sm="6">
                        <Card className="bg-primary">
                            <CardBody>
                                <Media className="faq-widgets">
                                    <Media body>
                                        <h5>{Knowledgebase}</h5>
                                        <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                    </Media><BookOpen />
                                </Media>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="4 xl-100">
                        <Card className="bg-primary">
                            <CardBody>
                                <Media className="faq-widgets">
                                    <Media body>
                                        <h5>{Support}</h5>
                                        <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p> 
                                    </Media><Aperture />
                                    </Media>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Row>
                            <Col sm="6">
                                <div className="header-faq">
                                    <h5 className="mb-0">{"Browse articles by category"}</h5>
                                </div>
                            </Col>
                            <Col sm="6">
                                <Form className="form-inline search-form pull-right search-knowledge">
                                    <FormGroup>
                                        <Input className="form-control-plaintext" name="search" type="text"
                                            value={searchTerm}
                                            onChange={handleChange} placeholder="Search.." />
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col sm="12">
                                <Card>
                                    <CardHeader>
                                        <h5>{BrowseArticles}</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <Row className="browse">
                                            {search.length > 0 ? search.map((data, i) => {
                                                return (
                                                    <Col xl="4 xl-50" md="6" key={i}>
                                                        <div className="browse-articles browse-bottom">
                                                            <h6>
                                                            <span><Archive />{data.inspantitle}</span>{data.title}
                                                            
                                                            </h6>
                                                            <ul>
                                                                <li><a  href='#javascript'><span><FileText/></span><span>{data.text1}</span><span className='badge badge-primary pull-right'>{data.text1_badge}</span></a></li>
                                                                <li><a  href='#javascript'><span><FileText/></span>{data.text2}<span className='badge badge-primary pull-right'>{data.text2_badge}</span></a></li>
                                                                <li><a  href='#javascript'><span><FileText/></span>{data.text3}<span className='badge badge-primary pull-right'>{data.text3_badge}</span></a></li>
                                                                <li><a  href='#javascript'><span><FileText/></span>{data.text4}<span className='badge badge-primary pull-right'>{data.text4_badge}</span></a></li>
                                                                <li><a  href='#javascript'><span><ArrowRight/></span>{data.text5}</a></li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                    
                                                )
                                                  
                                            }) :
                                                <Media  className="img-fluid" src={errorImg} alt="" />
                                            }
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="12">
                        <div className="header-faq">
                            <h5 className="mb-0">{FeaturedTutorials}</h5>
                        </div>
                        <Row>
                            <Col xl="3 xl-50 box-col-6" md="6">
                                <Card className="features-faq product-box">
                                    <div className="faq-image product-img">
                                        <img className="img-fluid" src={one} alt="" />
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-link"></i></li>
                                                <li><i className="icon-import"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <CardBody>
                                        <h6> {WebDesign}</h6>
                                        <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                    </CardBody>
                                    <CardFooter><span>{"Dec 15, 2019"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i></span></CardFooter>
                                </Card>
                            </Col>
                            <Col xl="3 xl-50 box-col-6" md="6">
                                <Card className="features-faq product-box">
                                    <div className="faq-image product-img">
                                        <img className="img-fluid" src={two} alt="" />
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-link"></i></li>
                                                <li><i className="icon-import"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <CardBody>
                                        <h6>{WebDevelopment}</h6>
                                        <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                    </CardBody>
                                    <CardFooter><span>{"Dec 15, 2019"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star-o font-primary"></i></span></CardFooter>
                                </Card>
                            </Col>
                            <Col xl="3 xl-50 box-col-6" md="6">
                                <Card className="features-faq product-box">
                                    <div className="faq-image product-img">
                                        <Media className="img-fluid" src={three} alt="" />
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-link"></i></li>
                                                <li><i className="icon-import"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <CardBody>
                                        <h6>{UIDesign}</h6>
                                        <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                    </CardBody>
                                    <CardFooter><span>{"Dec 15, 2019"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i></span></CardFooter>
                                </Card>
                            </Col>
                            <Col xl="3 xl-50 box-col-6" md="6">
                                <Card className="features-faq product-box">
                                    <div className="faq-image product-img">
                                        <Media className="img-fluid" src={four} alt="" />
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-link"></i></li>
                                                <li><i className="icon-import"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <CardBody>
                                        <h6> {UXDesign}</h6>
                                        <p>{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}</p>
                                    </CardBody>
                                    <CardFooter><span>{"Dec 15, 2019"}</span><span className="pull-right"><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star font-primary"></i><i className="fa fa-star-half-o font-primary"></i></span></CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="12">
                        <div className="header-faq">
                            <h5 className="mb-0">{"Latest articles and videos"}</h5>
                        </div>
                        <Row>
                            <Col xl="4" md="6">
                                <Row>
                                    <Col sm="12">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><Codepen className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600">{"Using Video"}</h6>
                                                        <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm="12">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><Codepen className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600">{"Vel illum qu"}</h6>
                                                        <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm="12">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><Codepen className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600"> {"Cum sociis natoqu"}</h6>
                                                        <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."} </p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl="4" md="6">
                                <Row>
                                    <Col sm="12">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><FileText className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600"> {"Donec pede justo"}</h6>
                                                        <p> {"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."} </p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm="12">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><FileText className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600"> {"Nam quam nunc"}</h6>
                                                        <p> {"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm="12">
                                        <Card>
                                            <CardBody>
                                                <div className="media">
                                                    <FileText className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600">{"Using Video"} </h6>
                                                        <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl="4">
                                <Row>
                                    <Col xl="12" md="6">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><Youtube className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600"> {"Vel illum qu"}</h6>
                                                        <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl="12" md="6">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><Youtube className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600"> {"Cum sociis natoqu"}</h6>
                                                        <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xl="12">
                                        <Card>
                                            <CardBody>
                                                <div className="media"><Youtube className="m-r-30" />
                                                    <Media body>
                                                        <h6 className="f-w-600">{"Donec pede justo"}</h6>
                                                        <p>{"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."}</p>
                                                    </Media>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default KnowledgebaseComponent;