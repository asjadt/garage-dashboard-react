import React, { Fragment,useState,useEffect } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import Masonry from 'react-masonry-css';
import {Container,Row,Col,Card,CardHeader,CardBody,Media} from 'reactstrap'
import { PortfolioTitle,MasonryGalleryWithDescription } from '../../constant';
import axios from 'axios'
const MesonryDesc = () => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    const [masonryImg,setMasonryImg] = useState([])
    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/masonry.json`).then((response) => {
            setMasonryImg(response.data);
        })
    },[])
    return (
        <Fragment>
            <BreadCrumb parent="Home" subparent="Gallery" title="Masonry Gallery With Description"/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{MasonryGalleryWithDescription}</h5>
                            </CardHeader>
                            <CardBody className="photoswipe-pb-responsive">
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid masonry-with-dec my-gallery gallery-with-description row grid"
                                    columnClassName="col-md-3 col-6 grid-item"
                                >
                                    {masonryImg.map((element, index) =>
                                        <li style={{listStyle:"none"}} key={index} >
                                            <a href="#javascript"  data-size="1600x950">
                                            <Media src={require(`../../assets/images/${element.src}`)} style={{ width: '100%' }} alt="" />
                                            <div className="caption">
                                                <h4>{PortfolioTitle}</h4>
                                                <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                            </div>
                                            </a>
                                        </li>
                                    )}
                                </Masonry>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default MesonryDesc;