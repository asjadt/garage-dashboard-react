import React, { Fragment }  from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Button,ListGroup,ListGroupItem} from 'reactstrap'
import {DefaultColor,Primary,Secondary,Warning,Danger,Grey,Info,Success,Pink} from "../../constant"
const  Statecolor = (props) => {

    let color =  [1,2,3,4,5,6,7,8,9,10,11,12,13]
    let listcolor = color.map((key) => <ListGroupItem key={key} as="li"><span></span></ListGroupItem>)
    
    return (
      <Fragment>
        <BreadCrumb parent="Home" subparent="Base" title="State Color"/>
        <Container fluid={true}>
            <Row>
                <Col className="col-sm-12">
                    <Card>
                    <CardHeader>
                    <h5>{DefaultColor}</h5>
                    </CardHeader>
                    <CardBody className="card-body">
                    <div className="color-box">
                      <Button color="btn btn-primary btn-square digits">{"#158df7"}</Button>
                      <Button color="btn btn-square digits btn-secondary">{"#fb2e63"}</Button>
                      <Button color="btn btn-square digits btn-success">{"#51bb25"}</Button>
                      <Button color="btn btn-square digits btn-info">{"#544fff"}</Button>
                      <Button color="btn btn-square digits btn-warning">{"#fb740d"}</Button>
                      <Button color="btn btn-square digits btn-danger">{"#ff3f70"}</Button>
                      <Button color="btn btn-square digits btn-light">{"#e8f4fe"}</Button>
                      <Button color="btn btn-square digits btn-dark">{"#2c323f"}</Button>
                    </div>
                    </CardBody>
                    </Card>
                    <Card>
                    <CardHeader>
                    <h5>Color</h5>
                    </CardHeader>
                    <CardBody className="card-body list-colors">
                    <Row>
                      <Col lg="3" sm="6">
                        <h6 className="sub-title text-uppercase">{Primary}</h6>
                        <div className="primary-color">
                          <ListGroup as="ul" className="m-b-30">
                            {listcolor}
                          </ListGroup>
                        </div>
                      </Col>
                      <Col lg="3" sm="6">
                        <h6 className="sub-title text-uppercase">{Secondary}</h6>
                        <div className="secondary-color">
                        <ListGroup as="ul" className="m-b-30">
                          {listcolor}
                        </ListGroup>
                        </div>
                      </Col>
                      <Col lg="3" sm="6">
                        <h6 className="sub-title text-uppercase">{Success}</h6>
                        <div className="success-color">
                        <ListGroup as="ul" className="m-b-30">
                          {listcolor}
                        </ListGroup>
                        </div>
                      </Col>
                      <Col lg="3" sm="6">
                        <h6 className="sub-title text-uppercase">{Info}</h6>
                        <div className="info-color">
                        <ListGroup as="ul" className="m-b-30">
                          {listcolor}
                        </ListGroup>
                        </div>
                      </Col>
                      <Col lg="3" sm="6">
                        <h6 className="sub-title text-uppercase">{Warning}</h6>
                        <div className="yellow-color">
                        <ListGroup as="ul" className="m-b-30">
                          {listcolor}
                        </ListGroup>
                        </div>
                      </Col>
                      <Col lg="3" sm="6">
                        <h6 className="sub-title text-uppercase">{Danger}</h6>
                        <div className="red-color">
                        <ListGroup as="ul" className="m-b-30">
                          {listcolor}
                        </ListGroup>
                        </div>
                      </Col>
                      <Col lg="3" sm="6">
                        <h6 className="sub-title text-uppercase">{Pink}</h6>
                        <div className="pink-color">
                        <ListGroup as="ul" className="m-b-30">
                          {listcolor}
                        </ListGroup>
                        </div>
                      </Col>
                      <Col lg="3" sm="6">
                        <h6 className="sub-title text-uppercase">{Grey}</h6>
                        <div className="gray-color">
                        <ListGroup as="ul" className="m-b-30">
                          {listcolor}
                        </ListGroup>
                        </div>
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

export default Statecolor;