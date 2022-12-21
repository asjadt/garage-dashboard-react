import React, { Fragment,useState,useEffect } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import IconMarkUp from './Icon-markup';
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import {SimpleLineIcons} from "../../constant";
import axios from 'axios'
const Simplelineicon = (props) => {

    const [data,setData] = useState([])
    const [iTag, setiTag] = useState('');
    const [icon, setIcon] = useState('');
    
    useEffect(() => {
      axios.get(`${process.env.PUBLIC_URL}/api/simple-line-data.json`).then(res => setData(res.data))
    },[])

    const getItag = (tag) => {
        setiTag({
            iTag: '<i className= "' + tag + '"></i>',
        })
        setIcon({
            icon : '' + tag + ' fa-2x'
        })
    }
    return (
        <Fragment>
        <BreadCrumb parent="Home" subparent="Icons" title="Simple-Line-Icon"/>
         <Container fluid={true}>
            {
            data.map((icons, index) => {
            return (
            <Row key={index}>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5 className="m-b-0">{SimpleLineIcons}</h5>
                  </CardHeader>
                  <CardBody>
                    <Row className="icon-lists">
                    {icons.simple_line_icon.map((icon, i) => {
                            return (
                                <Col sm="6" lg="4" key={i}  onClick={(e) => getItag(icon)}>
                                    <i className={`${icon}`}></i> {icon}
                                </Col>
                            )
                        })
                        }
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
             )
            })
         }
        </Container> 
        <IconMarkUp itag={iTag} icons={icon} />   
        </Fragment>
    );
}

export default Simplelineicon;