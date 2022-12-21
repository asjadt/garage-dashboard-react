import React,{Fragment,useState,useEffect} from 'react';
import BreadCrumb from '../../../layout/Breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Table,Media} from 'reactstrap'
import {MoreVertical} from 'react-feather'
import {NewOrder,ShippedOrders,CancelledOrders,OrderHistoryTable,OrdersHistory} from '../../../constant'
import axios from "axios";
const OrderHistory = (props) =>  {

    const [orders,setOrders] = useState([])

   useEffect(() => {
      axios.get(`${process.env.PUBLIC_URL}/api/orederhistory.json`).then(res => setOrders(res.data))
    },[])

    return (
        <Fragment>
        <BreadCrumb parent="Home" subparent="Ecommerce" title="Order History"/>
        <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
              <h5>{OrdersHistory}</h5>
              </CardHeader>
              <CardBody>
                <div className="order-history table-responsive">
                  <Table borderless>
                    <thead>
                        <tr>
                          {OrderHistoryTable.map((table,i) =>
                          <th scope="col" key={i}>{table}</th>
                          )}
                          <th scope="col"><i className="fa fa-angle-down"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                      
                      <tr className="title-orders">
                        <td>{NewOrder}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>

                      {orders.slice(0,3).map((items,i) => 
                        <tr key={i}>
                          <td><Media className="img-fluid img-60" src={require(`../../../assets/images/${items.img}`)} alt="#"/></td>
                          <td>
                            <div className="product-name"><a href="#javascript">{items.product}</a>
                              <div className="order-process"><span className="order-process-circle"></span>{items.prdouctstatus}</div>
                            </div>
                          </td>
                          <td>{items.size}</td>
                          <td>{items.color}</td>
                          <td>{items.articlenumber}</td>
                          <td>{items.units}</td>
                          <td>{items.price}</td>
                          <td><MoreVertical/></td>
                        </tr>
                      )}
             
                     
                     <tr className="title-orders">
                      <td>{ShippedOrders}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>

                      {orders.slice(3,7).map((items,i) => 
                        <tr key={i}>
                        <td><Media className="img-fluid img-60" src={require(`../../../assets/images/${items.img}`)} alt="#"/></td>
                        <td>
                          <div className="product-name"><a href="#javascript">{items.product}</a>
                            <div className="order-process"><span className="order-process-circle shipped-order"></span>{items.prdouctstatus}</div>
                          </div>
                        </td>
                        <td>{items.size}</td>
                        <td>{items.color}</td>
                        <td>{items.articlenumber}</td>
                        <td>{items.units}</td>
                        <td>{items.price}</td>
                        <td><MoreVertical/></td>
                      </tr>
                      )}
                     
                      <tr className="title-orders">
                        <td>{CancelledOrders}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>

                     {orders.slice(7,10).map((items,i) => 
                        <tr key={i}>
                        <td><Media className="img-fluid img-60" src={require(`../../../assets/images/${items.img}`)} alt="#"/></td>
                        <td>
                          <div className="product-name"><a href="#javascript">{items.product}</a>
                          <div className="order-process"><span className="order-process-circle cancel-order"></span>{items.prdouctstatus}</div>
                          </div>
                        </td>
                        <td>{items.size}</td>
                        <td>{items.color}</td>
                        <td>{items.articlenumber}</td>
                        <td>{items.units}</td>
                        <td>{items.price}</td>
                        <td><MoreVertical/></td>
                      </tr>
                      )}

                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </Container> 
        </Fragment>
    );
}
export default OrderHistory;