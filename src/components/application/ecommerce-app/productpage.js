import React,{Fragment, useState,useEffect,useRef} from 'react';
import BreadCrumb from '../../../layout/Breadcrumb'
import {Container,Row,Col,Card,Table,Button,Media} from 'reactstrap'
import Tablet from './tabsets';
import Slider from 'react-slick';
import {Link,useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { addToCart,watchfetchSingleProducts } from '../../../redux/ecommerce/Product/action';
import Ratings from 'react-ratings-declarative'
import { ProductReview, Fusion, ProductPageDetails, Brand, Availability, AddToCart, BuyNow, ContinueShopping,OutOfStock } from "../../../constant";

const  Productpage = (props)  => {
    const history = useHistory()
    const [state, setState] = useState({ nav1: null, nav2: null });
    const [rating,setRating] = useState(0)
    // eslint-disable-next-line
    const [quantity,Setquantity] = useState(1)
    
    const slider1 = useRef();
    const slider2 = useRef();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(watchfetchSingleProducts())
        setState({
            nav1: slider1.current,
            nav2: slider2.current
          });
      } ,[dispatch]);
    const { nav1, nav2 } = state;
    const singleItem = useSelector(content => content.data.singleItem)
    const symbol = useSelector(content => content.data.symbol)

    const  addcart = (product, qty) => 
    {
        dispatch(addToCart(product, qty));
        history.push(`${process.env.PUBLIC_URL}/ecommerce/cart`)
    }
    const buyProduct = (product, qty) => 
    {
        dispatch(addToCart(product, qty)); 
        history.push(`${process.env.PUBLIC_URL}/ecommerce/checkout`)
    }

    const changeRating =  (newRating) => {
        setRating(newRating)
    }
    
    return (
        <Fragment>
                <BreadCrumb parent="Home" subparent="Ecommerce" title="Product Page"/>
                <Container fluid={true}>
                   <Row>
                       <Col>
                       <Card>
                        <Row className="product-page-main">
                            <Col xl="4">
                            <Slider  asNavFor={nav2} 
                                         arrows= {false}
                                     ref={slider => (slider1.current = slider)} className="product-slider">
                                    {singleItem.variants ? singleItem.variants.map((item, i) => {
                                        return (
                                            <div className="item" key={i}>
                                                <Media src={require("../../../assets/images/" + item.images)} alt="" className="img-fluid" />
                                            </div>
                                        )
                                    }) :
                                        <Media src={singleItem.img} alt="" className="img-fluid" />
                                    }   
                                </Slider>

                                <Slider asNavFor={nav1}
                                    ref={slider => (slider2.current= slider)}
                                    slidesToShow={4}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                    infinite={true}
                                    className="small-slick">
                                    {singleItem.variants ? singleItem.variants.map((item, i) => {
                                        return (
                                            <div className="item" key={i}>
                                                <Media src={require("../../../assets/images/" + item.images)} alt="" className="img-fluid" />
                                            </div>
                                        )
                                    }) : ''}
                                </Slider>
                            </Col>
                            <Col xl="8">
                                <div className="product-page-details">
                                    <h5>{Fusion}</h5>
                                    <div className="d-flex">
                                    <Ratings
                                        rating={rating}
                                        widgetRatedColors="blue"
                                        changeRating={changeRating}
                                    >
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                    </Ratings>
                                    <span>{ProductReview}</span>
                                </div>
                                </div>
                                <hr />
                                <p>{ProductPageDetails}</p>
                                <div className="product-price digits">
                                    <del>{symbol}{singleItem.discountPrice}
                                    </del>{symbol}{singleItem.price}
                                </div>
                                <hr />
                                <div>
                                    <Table className="product-page-width" borderless>
                                        <tbody>
                                            <tr>
                                                <td>{Brand} :</td>
                                                <td>{singleItem.tags}</td>
                                            </tr>
                                            <tr>
                                                <td>{Availability} :</td>
                                                <td className="in-stock">{singleItem.stock}</td>
                                                <td className="out-of-stock" style={{ display: "none" }}>{OutOfStock}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <hr />
                                <ul className="product-color m-t-15">
                                    <li className="bg-primary"></li>
                                    <li className="bg-secondary"></li>
                                    <li className="bg-success"></li>
                                    <li className="bg-info"></li>
                                    <li className="bg-warning"></li>
                                </ul>
                                <div className="m-t-15">
                                    <Button  color="primary-gradien" className="m-r-10" onClick={() => addcart(singleItem, quantity)} >
                                        {AddToCart}
                                    </Button>
                                    <Button  color="success-gradien" className="m-r-10" onClick={() => buyProduct(singleItem, quantity)}>
                                        {BuyNow}
                                    </Button>
                                    <Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}>
                                    <Button color="secondary-gradien">{ContinueShopping}</Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                    <Tablet /></Col>
                   </Row>
                </Container>
            </Fragment>
    );
}

export default Productpage
