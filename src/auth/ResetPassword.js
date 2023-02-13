import React, { useState } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import SweetAlert from 'sweetalert2';
import { apiClient } from '../utils/apiClient';
import { BACKEND_API } from "../utils/backend";


const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true)
        apiClient().post(`${BACKEND_API}/forgetpassword`, {
            email
        }).then(res => {
            SweetAlert.fire({ title: res.data.message, text: `We already send a reset link to : ${email}`, icon: `${res.data.message === 'please check email' ? "success" : "warning"}` });
            setIsLoading(false)
        })

    };

    return (
        <Container style={{
            height:'100vh'
        }} className=" d-flex justify-content-center align-items-center">
            <Row className='w-75'>
                <Col lg={{ size: 6, offset: 3 }}>
                    <h4 className="text-center">Recover Your Password</h4>
                    <br />
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                         <Button disabled={isLoading} color="primary" block>
                            {`${isLoading?"Loading..":"Submit"}`}
                        </Button>
                        <Link  className='d-flex justify-content-end align-items-center h-5' to={'/'}><IoArrowBackSharp className='mr-2' /> go back</Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ResetPassword;