import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form, Input, Label, Row } from 'reactstrap';
import { FirstName, LastName } from "../../../../constant";
const Registration = () => {
    const { register, handleSubmit, errors,setError } = useForm(); 
    setError('firstName', { type: 'custom', message: 'custom message' });
    const onSubmit = data => {
        alert('You submitted the form and stuff!');
        return isValidated()
        if (data !== '') {
            alert('You submitted the form and stuff!');
        } else {
            errors.showMessages();
        }
    };
    const isValidated = () => { 
        return false;
    }
    return (
        <Fragment>
            <Row>
                <Col sm="12">
                    <Form className="needs-validation" onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-row">
                            <Col md="12 mb-3">
                                <Label>{FirstName}</Label>
                                <Input className="form-control" name="firstName" type="text" placeholder="First name" innerRef={register({ required: true })} />
                                {errors.firstName && 'First name is required'}
                                <div className="valid-feedback">{"Looks good!"}</div>
                            </Col>
                            <Col md="12 mb-3">
                                <Label>{LastName}</Label>
                                <Input className="form-control"  name="lastName" type="text" placeholder="Last name" innerRef={register({ required: true })} />
                                {errors.lastName && 'First name is required'}
                                <div className="valid-feedback">{"Looks good!"}</div>
                            </Col>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Registration;