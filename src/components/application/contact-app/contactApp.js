import React, { useEffect, Fragment, useState } from 'react';
import BreadCrumb from '../../../layout/Breadcrumb'
import {Container,Row,Col,Card,CardBody,Button,Form,FormGroup,Input,Table} from 'reactstrap'
import search from '../../../assets/images/search-not-found.png';
import userDemoPic from '../../../assets/images/user/user.png';
import {firebase_app} from '../../../data/config';
import { deletedUser } from '../../../services/contact.service';
import {useHistory} from 'react-router-dom'
import {Add,Edit,Delete} from '../../../constant'

const ContactApp = (props) => {
    const history = useHistory();
    const [searchValue, setsearchValue] = useState("");
    const [users, setUsers] = useState([]);
    const db = firebase_app.firestore();

    useEffect(() => {
        const unsubscribe = db.collection('contactApp').onSnapshot((snapshot) => {
            const getUser = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setUsers(getUser)
        })
        return () => unsubscribe();
    }, [db]);

    const deleteUser = (userId) => {
        deletedUser(userId);
    }

    const handleSearchKeyword = (keyword) => {
        setsearchValue(keyword)
        db.collection("contactApp").where('nameToSearch', '>=', keyword).where('nameToSearch', '<=', keyword + '\uf8ff')
            .onSnapshot((snapshot) => {
                const getUser = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setUsers(getUser)
            })
    }

    const redirectUrl = () => {
        history.push(`${process.env.PUBLIC_URL}/contact-app/new-user`);
    }

    const editContact = (user) => {
        history.push(`${process.env.PUBLIC_URL}/contact-app/edit-user/${user.id}`);
    }

    return (
        <Fragment>
            <BreadCrumb parent="Home" subparent="Contact App" title="Contact App"/>
            <Container fluid={true} className="product-wrapper">
                <div className="product-grid">
                    <Card>
                        <CardBody>
                            <Row>
                                <Col xl="6">
                                    <Form>
                                        <FormGroup className="mb-0">
                                            <Input
                                                className="form-control"
                                                type="text"
                                                placeholder="search"
                                                defaultValue={searchValue}
                                                onChange={(e) => handleSearchKeyword(e.target.value)}
                                            />
                                        </FormGroup>
                                    </Form>
                                </Col>
                                <Col xl="6">
                                    <div className="contact-filter pull-right">
                                        <Button color="primary ml-4" onClick={redirectUrl}>
                                            {Add}
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <div className="product-wrapper-grid">
                        <Row>
                            {users.length > 0 ?
                                <Col sm="12">
                                    <Card>
                                    <div className="product-box table-responsive contact-table">
                                        <Table>
                                            <thead>
                                                <tr>
                                                <th>
                                                    <h5 className="mb-0">{"Profile"}</h5>
                                                </th>
                                                <th>
                                                    <h5 className="mb-0">{"Name"}</h5>
                                                </th>
                                                <th>
                                                    <h5 className="mb-0">{"Surname"}</h5>
                                                </th>
                                                <th>
                                                    <h5 className="mb-0">{"Mobile"}</h5>
                                                </th>
                                                <th colSpan="2">
                                                    <h5 className="mb-0">{"Age"}</h5>
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                {users.map((user, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <img className="img-60 rounded-circle" src={user.avatar ? user.avatar : userDemoPic} alt="#" />
                                                            </td>
                                                            <td>
                                                                <h6>{user.name}</h6>
                                                            </td>
                                                            <td>
                                                                <h6>{user.surname}</h6>
                                                            </td>
                                                            <td>
                                                                <h6>{user.mobile}</h6>
                                                            </td>
                                                            <td>
                                                                <h6>{user.age}</h6>
                                                            </td>
                                                            <td>
                                                                <Button color="primary mr-2" onClick={() => editContact(user)} >{Edit}</Button>
                                                                <Button color="secondary" onClick={() => deleteUser(user.id)}>{Delete}</Button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                         </Table>
                                         </div>
                                    </Card>
                                </Col>
                                :
                                <Col sm="12">
                                    <div>
                                        <div className="search-not-found text-center">
                                            <div>
                                                <img src={search} alt="" className="second-search" />
                                                <p className="mb-0">{"Sorry, We didn't find any results matching this search"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            }
                        </Row>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
};

export default ContactApp;