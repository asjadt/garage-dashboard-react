import React,{useState, Fragment,useEffect} from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import Lightbox from "react-image-lightbox";
import {Container,Row,Col,Card,CardHeader,CardBody,Form,FormGroup,Label,Input,Media,Dropdown,DropdownMenu,DropdownToggle,DropdownItem,TabContent, TabPane, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {Email,All,Images,Videos,Settings,SearchSetting,Language,Shopping,Flights,Finance,Previous,Next,MarkJecno,PortfolioTitle} from '../../constant'
import axios from 'axios'

const Search = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [images,setImage] = useState([]) 
    const [smallImages,setsmallImages] = useState([])

    useEffect(() => {
      axios.get(`${process.env.PUBLIC_URL}/api/image-light.json`).then((response) => {
          setImage(response.data.src);
      })
      axios.get(`${process.env.PUBLIC_URL}/api/image-big-light.json`).then((response) => {
          setsmallImages(response.data.src);
      })
    },[])
  
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const initilindex = {index:0,isOpen:false}
        const[photoIndex,setPhotoIndex] = useState(initilindex)
        const onMovePrev = () => {
           const prev = (photoIndex.index + images.length - 1) % images.length
           setPhotoIndex({...photoIndex,index:prev})
        }
        const  onMoveNext = () => {
            const next = (photoIndex.index + 1) % images.length
            setPhotoIndex({...photoIndex,index:next})
        }
   
    return (
        <Fragment>
        <BreadCrumb parent="Home" subparent="Search Page" title="Search Page"/>
        <Container fluid={true} className="search-page">
        <Row>
          {smallImages.length > 0 ?
          <Col sm="12">
            <Card>
              <CardHeader>
                <Form className="search-form">
                  <FormGroup className="m-0">
                    <Label className="sr-only">{Email}</Label>
                    <Input className="form-control-plaintext" type="search" placeholder="Search.."/>
                  </FormGroup>
                </Form>
              </CardHeader>
              <CardBody>
                <Nav tabs className="borderb-tab-primary mb-2">
                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                        <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                            <i className="icon-target"></i>{All}
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                        <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                            <i className="icon-image"></i>{Images}
                                </NavLink>
                    </NavItem>
                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                        <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                            <i className="icon-video-clapper"></i>{Videos}
                                </NavLink>
                    </NavItem>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret tag="button" className="nav-link active btn-primary">
                        <i className="icon-settings"></i>{Settings}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="#javascript">{SearchSetting}</DropdownItem>
                            <DropdownItem href="#javascript">{Language}</DropdownItem>
                            <DropdownItem href="#javascript">{Shopping}</DropdownItem>
                            <DropdownItem href="#javascript">{Flights}</DropdownItem>
                            <DropdownItem href="#javascript">{Finance}</DropdownItem>
                        </DropdownMenu>
                        <div className="material-border"></div>
                    </Dropdown>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col xl="6">
                        <p className="pb-4">{"About 6,000 results (0.60 seconds)"}</p>
                        <div className="info-block">
                          <h6>{"Endless - Bootstrap 4 Admin Template by PixelStrap ..."}</h6><a href="https://themeforest.net/user/pixelstrap">{"endless-bootstrap-4-admin-template"}</a>
                          <p>{"Endless admin theme. Endless Admin is a full featured, multipurpose, premium bootstrap admin template built with Bootstrap 4 Framework, ..."}</p>
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li>{"5 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"themes"}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="info-block">
                          <h6>{"Endless - Angular 8 Admin Template by PixelStrap ..."}</h6><a href="https://themeforest.net/user/pixelstrap">{"https://themeforest.net › item › endless-angular-admin-template"}</a>
                          <p>{"Endless Angular Theme is pure angular theme, Yes! you read correct, it's No Jquery angular admin theme including all feature and functionality ..."}</p>
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li>{"4.5 stars"}</li>
                              <li>{"500 votes"}</li>
                              <li>{"themes"}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="info-block">
                          <h6>{"Multikart - eCommerce HTML Template by PixelStrap ..."}</h6><a href="https://themeforest.net/user/pixelstrap">{"https://themeforest.net › item › multikart-responsive-ecommerce-html-tem.."}</a>
                          <p>{"Buy Multikart - eCommerce HTML Template by PixelStrap on ThemeForest. Multikart – Multi-Purpose Responsive Ecommerce HTML Theme ..."}</p>
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i></li>
                              <li>{"5 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"themes"}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="info-block">
                          <h6>{"Multikart - Multipurpose Shopify Theme by PixelStrap ..."}</h6><a href="https://themeforest.net/user/pixelstrap">{"angular.pixelstrap.com › multikart"}</a>
                          <p>{"Reasones to Buy Multikart. Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business."}</p>
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i></li>
                              <li>{"5 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"themes"}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="info-block">
                          <h6>{"MultiKart Ecommerce Angular 8 | Angular Shopping Theme"}</h6><a href="https://themeforest.net/user/pixelstrap">{"angular.pixelstrap.com › multikart"}</a>
                          <p>{"Multikart - Responsive React eCommerce Template #Responsive, #Multikart, #React, #Template."}</p>
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rate-blank"></i></li>
                              <li>{"5 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"themes"}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="info-block">
                            <Pagination>
                            <PaginationItem disabled>
                                <PaginationLink href="#javascript">{Previous}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#javascript">{"1"}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink href="#javascript">{"2"}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#javascript">{"3"}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#javascript">{Next}</PaginationLink>
                            </PaginationItem>
                            </Pagination>
                        </div>
                      </Col>
                      <Col xl="6">
                        <Card className="lg-mt mb-0">
                          <div className="blog-box blog-shadow"><Media className="img-fluid" src={require("../../assets/images/blog/blog.jpg")} alt=""/>
                            <div className="blog-details">
                              <p className="digits">{"25 July 2019"}</p>
                              <h4>{"Accusamus et iusto odio dignissimos ducimus qui blanditiis."}</h4>
                              <ul className="blog-social digits">
                                <li><i className="icofont icofont-user"></i>{MarkJecno}</li>
                                <li><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                              </ul>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <div className="info-block">
                      <p className="pb-4 digits">{"About 12,120 results (0.50 seconds)"}</p>
                      <div className="my-gallery row gallery-with-description" id="aniimated-thumbnials">
                        <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia"><a href="#javascript"  data-size="1600x950">
                            <Media
                                src={require(`../../assets/images/${smallImages[0]}`)}
                                alt="Gallery"
                                className="img-thumbnail"
                                onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:0, isOpen:true})
                                }
                            />
                            <div className="caption">
                              <h4>{PortfolioTitle}</h4>
                              <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </div></a>
                            <figcaption itemProp="caption description">
                                <h4>{PortfolioTitle}</h4>
                                <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </figcaption>
                        </figure>
                        <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                             <Media
                                src={require(`../../assets/images/${smallImages[1]}`)}
                                alt="Gallery"
                                className="img-thumbnail"
                                onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:1, isOpen:true})
                                }
                            />
                            <div className="caption">
                              <h4>{PortfolioTitle}</h4>
                              <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </div></a>
                            <figcaption itemProp="caption description">
                                <h4>{PortfolioTitle}</h4>
                                <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </figcaption>
                        </figure>
                        <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                             <Media
                                src={require(`../../assets/images/${smallImages[2]}`)}
                                alt="Gallery"
                                className="img-thumbnail"
                                onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:2, isOpen:true})
                                }
                            />
                            <div className="caption">
                              <h4>{PortfolioTitle}</h4>
                              <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </div></a>
                            <figcaption itemProp="caption description">
                                <h4>{PortfolioTitle}</h4>
                                <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </figcaption>
                        </figure>
                        <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                             <Media
                                src={require(`../../assets/images/${smallImages[3]}`)}
                                alt="Gallery"
                                className="img-thumbnail"
                                onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:3, isOpen:true})
                                }
                            />
                            <div className="caption">
                              <h4>{PortfolioTitle}</h4>
                              <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </div></a>
                            <figcaption itemProp="caption description">
                                <h4>{PortfolioTitle}</h4>
                                <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </figcaption>
                        </figure>
                        <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                            <Media
                                src={require(`../../assets/images/${smallImages[4]}`)}
                                alt="Gallery"
                                className="img-thumbnail"
                                onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:4, isOpen:true})
                                }
                            />
                            <div className="caption">
                              <h4>{PortfolioTitle}</h4>
                              <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </div></a>
                            <figcaption itemProp="caption description">
                                <h4>{PortfolioTitle}</h4>
                                <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </figcaption>
                        </figure>
                        <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                            <Media
                                src={require(`../../assets/images/${smallImages[5]}`)}
                                alt="Gallery"
                                className="img-thumbnail"
                                onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:5, isOpen:true})
                                }
                            />
                            <div className="caption">
                              <h4>{PortfolioTitle}</h4>
                              <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </div></a>
                            <figcaption itemProp="caption description">
                                <h4>{PortfolioTitle}</h4>
                                <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </figcaption>
                        </figure>
                        <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                            <Media
                                src={require(`../../assets/images/${smallImages[6]}`)}
                                alt="Gallery"
                                className="img-thumbnail"
                                onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:6, isOpen:true})
                                }
                            />
                            <div className="caption">
                              <h4>{PortfolioTitle}</h4>
                              <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </div></a>
                            <figcaption itemProp="caption description">
                                <h4>{PortfolioTitle}</h4>
                                <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </figcaption>
                        </figure>
                        <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                            <Media
                                    src={require(`../../assets/images/${smallImages[7]}`)}
                                    alt="Gallery"
                                    className="img-thumbnail"
                                    onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:7, isOpen:true})
                                }
                                />
                            <div className="caption">
                              <h4>{PortfolioTitle}</h4>
                              <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </div></a>
                            <figcaption itemProp="caption description">
                                <h4>{PortfolioTitle}</h4>
                                <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                            </figcaption>
                        </figure>
                      </div>
                     
                    </div>
                    <div className="info-block">
                        <Pagination>
                        <PaginationItem disabled>
                            <PaginationLink href="#javascript">{Previous}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#javascript">{"1"}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem active>
                            <PaginationLink href="#javascript">{"2"}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#javascript">{"3"}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#javascript">{Next}</PaginationLink>
                        </PaginationItem>
                        </Pagination>
                    </div>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      <Col xl="6">
                        <p className="pb-4">{"About 6,000 results (0.60 seconds)"}</p>
                        <Media className="info-block">
                          <iframe className="mr-3 mb-3" width="200" height="100" src="https://www.youtube.com/embed/AVFqh3SkA4Q" title="myFrame"></iframe>
                          <Media body>
                            <h6>{"Endless - Bootstrap 4 Admin Template by PixelStrap ..."}</h6><a href="https://themeforest.net/user/pixelstrap/portfolio">{"endless-bootstrap-4-admin-template"}</a>
                            <p>{"endless admin theme. endless admin is a full featured, multipurpose, premium bootstrap admin template built with bootstrap 4 framework, ..."}</p>
                            <div className="star-ratings">
                              <ul className="search-info">
                                <li>{"5 stars"}</li>
                                <li>{"590 votes"}</li>
                                <li>{"themes"}</li>
                              </ul>
                            </div>
                          </Media>
                        </Media>
                        <Media className="info-block">
                          <iframe className="mr-3 mb-3" width="200" height="100" src="https://www.youtube.com/embed/sjN0xhBT2AE" title="myFrame"></iframe>
                          <Media body>
                            <h6>{"Endless - Angular 8 Admin Template by PixelStrap ..."}</h6><a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net › item › endless-angular-admin-template"}</a>
                            <p>{"endless angular theme is pure angular theme, yes! you read correct, it's no jquery angular admin theme including all feature and functionality ..."}</p>
                            <div className="star-ratings">
                              <ul className="search-info">
                                <li>{"5 stars"}</li>
                                <li>{"590 votes"}</li>
                                <li>{"themes"}</li>
                              </ul>
                            </div>
                          </Media>
                        </Media>
                        <Media className="info-block">
                          <iframe className="mr-3 mb-3" width="200" height="100" src="https://www.youtube.com/embed/4iWtjctwAI0" title="myFrame"></iframe>
                          <Media body>
                            <h6>{"Multikart - eCommerce HTML Template by PixelStrap ..."}</h6><a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net › item › multikart-responsive-ecommerce-html-tem.."}</a>
                            <p>{"buy multikart - ecommerce html template by pixelstrap on themeforest. multikart – multi-purpose responsive ecommerce html theme ..."}</p>
                            <div className="star-ratings">
                              <ul className="search-info">
                                <li>{"5 stars"}</li>
                                <li>{"590 votes"}</li>
                                <li>{"themes"}</li>
                              </ul>
                            </div>
                          </Media>
                        </Media>
                        <Media className="info-block">
                          <iframe className="mr-3 mb-3" width="200" height="100" src="https://www.youtube.com/embed/GwNzqHQdEjE" title="myFrame"></iframe>
                          <Media body>
                            <h6>{"Multikart - Multipurpose Shopify Theme by PixelStrap ..."}</h6><a href="https://themeforest.net/user/pixelstrap/portfolio">{"angular.pixelstrap.com › multikart"}</a>
                            <p>{"multikart - responsive react ecommerce template #responsive, #multikart, #react, #template."}</p>
                            <div className="star-ratings">
                              <ul className="search-info">
                                <li>{"5 stars"}</li>
                                <li>{"590 votes"}</li>
                                <li>{"themes"}</li>
                              </ul>
                            </div>
                          </Media>
                        </Media>
                        <div className="info-block">
                                <Pagination>
                                <PaginationItem disabled>
                                    <PaginationLink href="#javascript">{Previous}</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#javascript">{"1"}</PaginationLink>
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink href="#javascript">{"2"}</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#javascript">{"3"}</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#javascript">{Next}</PaginationLink>
                                </PaginationItem>
                                </Pagination>
                        </div>
                      </Col>
                      <Col xl="6">
                        <div>
                          <div className="embed-responsive embed-responsive-21by9 lg-mt">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/AVFqh3SkA4Q" allowFullScreen="" title="myFrame"></iframe>
                          </div>
                          <div className="embed-responsive embed-responsive-21by9 m-t-30">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4iWtjctwAI0" allowFullScreen="" title="myFrame"></iframe>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        :""}
       </Row>
        </Container>
        {photoIndex.isOpen && (
            <Lightbox
                mainSrc={require(`../../assets/images/${images[photoIndex.index]}`)}
                nextSrc={require(`../../assets/images/${images[(photoIndex.index + 1) % images.length]}`)}
                prevSrc={require(`../../assets/images/${images[(photoIndex.index + images.length - 1) % images.length]}`)}
                imageTitle={photoIndex.index + 1 + "/" + images.length}
                onCloseRequest={() => setPhotoIndex({ ...photoIndex,isOpen:false})}
                onMovePrevRequest={onMovePrev}
                onMoveNextRequest={onMoveNext}
            />
        )}
      </Fragment>
    );
}

export default Search;