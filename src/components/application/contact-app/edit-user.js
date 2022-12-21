import React, { Fragment, useState ,useEffect} from 'react';
import BreadCrumb from '../../../layout/Breadcrumb'
import {Container,Col,Card,CardBody,Button,Form,FormGroup,Input,Label} from 'reactstrap'
import userDemoPic from '../../../assets/images/user/user.png';
import {useForm} from 'react-hook-form';
import { editUser } from '../../../services/contact.service';
import {firebase_app} from '../../../data/config';
import {useParams,useHistory} from 'react-router-dom'

const NewUser = (props) => {
    let params = useParams();
    const history = useHistory();
    const [url, setUrl] = useState();
    const { register, handleSubmit, errors } = useForm();
    const db = firebase_app.firestore();
    const [data, setData] = useState();
    const [userId, setUserId] = useState();

    useEffect(() => {
        const id = params.id;
        setUserId(id);  
        const isSubscribed = db.collection("contactApp").doc(id)
                .onSnapshot(function(doc) {
                    const user = doc.data();
                    setData(user);
                    setUrl(user.avatar)
                });
        return () => isSubscribed();
        // eslint-disable-next-line 
    },[]);

    const onSubmit = data => {
        if (data !== '') {
            editUser(data, url ,userId);
            history.push(`${process.env.PUBLIC_URL}/contact-app/contact`);
        } else {
            errors.showMessages();
        }
    };

    const renderContact = () => {
        history.push(`${process.env.PUBLIC_URL}/contact-app/contact`);
    }

    const readUrl = (event) => {
        if (event.target.files.length === 0)
            return;
        var mimeType = event.target.files[0].type;

        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            setUrl(reader.result)
        }   
    }
    return (
        data?
        <Fragment>
            <BreadCrumb parent="Home" subparent="Contact App" title="Edit User"/>
            <Container fluid={true}>
                <Col md="6" sm="8" style={{margin: "0 auto"}}>
                    <div className="authentication-box contact-profile-form">
                        <Card className="mt-4">
                            <CardBody>
                                <div className="text-center user-profile">
                                    <div className="hovercard">
                                        <div className="contact-profile">
                                            <img className="rounded-circle img-100" src={url ? url : userDemoPic} alt="" />
                                            <div className="icon-wrapper">
                                                <i className="icofont icofont-pencil-alt-5">
                                                    <input className="upload" type="file" onChange={(e) => readUrl(e)} />
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
                                    <FormGroup>
                                        <Label className="col-form-label pt-0">{"Name"}</Label>
                                        <Input className="form-control" type="text" name="name" defaultValue={data.name} innerRef={register({ required: true })} />
                                        <span style={{color:"red"}}>{errors.name && 'First name is required'}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="col-form-label">{"Surname"}</Label>
                                        <Input className="form-control" type="text" name="surname" defaultValue={data.surname} innerRef={register({ required: true })} />
                                        <span style={{color:"red"}}>{errors.surname && 'Last name is required'}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="col-form-label">{"Mobile"}</Label>
                                        <Input className="form-control" type="number" name="mobile" defaultValue={data.mobile} innerRef={register({ pattern: /\d+/, minlength: 0, maxlength: 9 })} />
                                        <span style={{color:"red"}}>{errors.mobile && 'Please enter number max 9 digit'}</span>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="col-form-label">{"Age"}</Label>
                                        <Input className="form-control" type="number" name="age" defaultValue={data.age} innerRef={register({ required: true, pattern: /\d+/, min: 18, max: 70 })} />
                                        <span style={{color:"red"}}>{errors.age && 'Please enter age between 18 to 70 year.'}</span>
                                    </FormGroup>
                                    <FormGroup className="form-row mt-3 mb-0">
                                        <Button color="primary mr-2" type="submit">{"Submit"}</Button>
                                        <Button color="primary"  data-original-title="btn btn-info-gradien" title="" onClick={renderContact}>
                                            {"Cancel"}
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Container>
        </Fragment>
    :''
    );
};

export default NewUser;