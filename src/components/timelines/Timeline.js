import React, { Fragment } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import Timeline1 from './Timeline1';
import VerticalTimelineComp from './VerticalTimelineComp';
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import {Examples} from "../../constant";
const Timeline = () => {
    return (
        <Fragment>
            <BreadCrumb parent="Home" subparent="Timeline" title="Timeline 1"/>
            <Container fluid={true}>
                <Row>
                    <Col  sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{Examples} {"1"}</h5>
                            </CardHeader>
                            <CardBody>
                                <Timeline1 />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col  sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{Examples} {"2"}</h5>
                            </CardHeader>
                            <CardBody>
                                <VerticalTimelineComp />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Timeline;