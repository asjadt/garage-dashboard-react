import React, { Fragment } from 'react';
import BreadCrumb from '../../../layout/Breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Table,Button,Media} from 'reactstrap'
import { XCircle } from 'react-feather';
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeFromWishlist} from '../../../redux/ecommerce/Wishlist/action'
import { WishlistTitle,WishlistTableHeader,NewOrders,ContinueShopping } from '../../../constant';

const Wishlist = () => {
  
    const dispatch = useDispatch()
    const list = useSelector(content => content.Wishlistdata.list);
    const symbol = useSelector(content => content.data.symbol);
   
    const removefromwishlist = (item) => {
      dispatch(removeFromWishlist(item))
    }
    
    return (
        <Fragment>
        <BreadCrumb parent="Home" subparent="Ecommerce" title="Wishlist"/>
        {
        list ?
        <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{WishlistTitle}</h5>
              </CardHeader>
              <CardBody>
                <div className="order-history table-responsive wishlist">
                  <Table borderless>
                    <thead>
                      <tr>
                        {WishlistTableHeader.map((items,i)  => 
                            <th key={i}>{items}</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="title-orders">
                        <td colSpan={12}>{NewOrders}</td>
                      </tr>
                      {list.map((item, index) => {
                      return (
                      <tr key={index}>
                        <td><Media  className="img-fluid img-60" src={require("../../../assets/images/" + item.img)} alt="#"/></td>
                        <td>
                          <div className="product-name"><a href="#javascript">{item.name}</a></div>
                        </td>
                        <td>{symbol}{item.price}</td>
                        <td>{item.stock}</td>
                        <td>
                        <a href="#javascript" onClick={() => removefromwishlist(item)}><XCircle /></a>
                        </td>
                      </tr>
                      )
                        })}
                      <tr>
                        <td colSpan={5}>
                          <Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}><Button color="primary">{ContinueShopping}</Button></Link></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      : "" }
      </Fragment>
    );
}
export default Wishlist