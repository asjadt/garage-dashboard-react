import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardHeader, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Pagination, Row, Table } from "reactstrap";

import DatePicker from "react-datepicker";
import { Edit, Eye } from 'react-feather';
import SweetAlert from 'sweetalert2';

import { Link } from 'react-router-dom';
import { EMAIL_TEMPLATE_UPDATE, EMAIL_TEMPLATE_VIEW } from '../../../constant/permissions';
import Error401Unauthorized from '../../../pages/errors/Error401Unauthorized';
import { apiClient } from '../../../utils/apiClient';
import { BACKEND_API } from '../../../utils/backend';
import { checkPermissions } from '../../../utils/helperFunctions';
import setLinksView from '../../../utils/pagination';
import TemplateView from './TemplateView';





const EmailTemplateList = () => {
    let permissions = JSON.parse(localStorage.getItem("permissions"));

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState(9)
    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)
    const [total, setTotal] = useState(null)
    const [lastPage, setLastPage] = useState(0)
    const [links, setLinks] = useState(null)
    const [current_page, set_current_page] = useState(0);
    const [userCreateModal, setUserCreateModal] = useState(false);
    const [startDate, setstartDate] = useState(new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1))
    const [endDate, setendDate] = useState(new Date())


    const setStartDate = date => {
        setstartDate(date);
        let startDataFinal = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
        let endDataFinal = new Date(endDate).toISOString().slice(0, 19).replace('T', ' ');
        fetchData(`${BACKEND_API}/v1.0/email-templates/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)
    };
    const setEndDate = date => {
        setendDate(date);
        let startDataFinal = new Date(startDate).toISOString().slice(0, 19).replace('T', ' ');
        let endDataFinal = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
        fetchData(`${BACKEND_API}/v1.0/email-templates/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)

    };
    // modal
    const [templateViewData, setTemplateViewData] = useState(null);
    const [userViewModal, setUserViewModal] = useState(false);
    const userViewModaltoggle = () => setUserViewModal(!userViewModal);

    const viewForm = (el) => {
        userViewModaltoggle()
        setTemplateViewData(el)
    }

    // end modal
    const deleteFunc = (id) => {
        SweetAlert.fire({
            title: 'Are you sure?',
            text: "Once deleted, you will not be able to recover this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                apiClient().delete(`${BACKEND_API}/v1.0/email-templates/${id}`).then(response => {
                    if (response.status == 200 && response.data.ok) {
                        fetchData(perPage);
                        SweetAlert.fire(
                            'Deleted!',
                            'Template has been deleted.',
                            'success'
                        )
                    }
                }).catch(error => {
                    console.log(error.response)
                    SweetAlert.fire({ title: error.response.data.message, text: "Please Try Again", icon: "warning" });
                })
            }
            else {
                SweetAlert.fire(
                    'Template is safe'
                )
            }
        })
    }


    const handlePerPage = (e) => {
        const newValue = parseInt(e.target.value);
        setPerPage(newValue)
        console.log(newValue)
        fetchData(newValue)
    }

    const fetchData = (urlOrPerPage, useLoading = true) => {
        if (useLoading) {
            setLoading(true)
        }
        let url;
        if (typeof urlOrPerPage === "string") {
            url = urlOrPerPage;
        } else {
            url = `${BACKEND_API}/v1.0/email-templates/${urlOrPerPage}`
        }
        apiClient().get(url).then(response => {
            setLoading(false)
            setData(response.data.data)
            setFrom(response.data.from)
            setTo(response.data.to)
            setTotal(response.data.total)
            setLastPage(response.data.last_page)
            setLinks(response.data.links)
            set_current_page(response.data.current_page)

        }).catch(error => {
            setLoading(false)
            console.log("error", error.response)
            if (error.response?.status === 422) {
              SweetAlert.fire({ title: error.response.data.message, text: "Please Try Again", icon: "warning" });
            }
            else if (error.response?.status === 401) {
              SweetAlert.fire({ title: error.response.data.message, text: "Hello!!! You do not have permission.", icon: "warning" });
            }
            else {
              SweetAlert.fire({ title: "something went wrong!!", text: "Please Try Again", icon: "warning" });
            }
        })
    }
    const [searchKey, setSearchKey] = useState("");
    const searchFunc = (e) => {
        setSearchKey(e.target.value);
        fetchData(`${BACKEND_API}/v1.0/email-templates/${perPage}?search_key=${e.target.value}`, false)
    }

    useEffect(() => {
        fetchData(perPage,);
    }, [])


    if (!permissions.includes(EMAIL_TEMPLATE_VIEW)) {
        return <><Error401Unauthorized></Error401Unauthorized></>
    }

    return (
        <Fragment>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h5>Email Templates</h5>
                                    <span> Manage your Templates </span>
                                </div>
                            </CardHeader>
                            <Row>
                                <Col sm="6">
                                    <CardHeader>
                                        <Form className="search-form">
                                            <FormGroup className="m-0">
                                                <Label className="sr-only">Search</Label>
                                                <Input className="form-control-plaintext" type="search" placeholder="Search.." onChange={searchFunc} value={searchKey} autoFocus />
                                            </FormGroup>
                                        </Form>
                                    </CardHeader>
                                </Col>
                                <Col sm={"4"}>
                                    <CardHeader>
                                        <Row className="date-range">
                                            <Col sm="6">
                                                <DatePicker className="form-control digits mx-2"
                                                    selected={startDate}
                                                    onChange={setStartDate}
                                                    selectsStart
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                />
                                            </Col>
                                            <Col sm="6">
                                                <DatePicker className="form-control digits mx-2"
                                                    selected={endDate}
                                                    onChange={setEndDate}
                                                    selectsEnd
                                                    endDate={endDate}
                                                    minDate={startDate}
                                                />
                                            </Col>
                                        </Row>
                                    </CardHeader>
                                </Col>
                            </Row>

                            <div className="table-responsive px-4">
                                <Table>
                                    <thead>
                                        <tr className="Dashed">
                                            <th className='col-1' scope="col">{"#"}</th>
                                            <th className='col-9' scope="col">{"Type"}</th>
                                            <th className='col-2' scope="col">{"Action"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((el, i) => {
                                            return (
                                                <tr className="Dashed" key={el.id}>
                                                    <th className='col-1' scope="row">{i + 1}</th>
                                                    <td className='col-9'>{el.type}</td>
                                                    <td className='col-2'>
                                                        {checkPermissions([EMAIL_TEMPLATE_VIEW], permissions) && (
                                                            <Eye
                                                                className='mr-1'
                                                                color="#51bb25" size={18} style={{ cursor: "pointer" }}
                                                                onClick={() => viewForm(el)}></Eye>
                                                        )}
                                                        {checkPermissions([EMAIL_TEMPLATE_UPDATE], permissions) && (
                                                            <Link to={`/email_template/update/${el.id}`}>
                                                                <Edit
                                                                    className='mr-1'
                                                                    color="#007bff" size={18} style={{ cursor: "pointer" }}
                                                                ></Edit>
                                                            </Link>
                                                        )}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </div>
                            <CardHeader>
                                <Row className=''>
                                    <Col sm="3" className='text-center my-1'>
                                        <div className="items">
                                            <label>Item per page</label> <select onChange={handlePerPage} value={perPage}>
                                                <option value={6}>6</option>
                                                <option value={9}>9</option>
                                                <option value={12}>12</option>
                                                <option value={15}>15</option>
                                            </select>
                                        </div>
                                    </Col>

                                    <Col sm="6" className='d-flex justify-content-center align-items-center'>
                                        <Pagination aria-label="Page navigation example" className="pagination-primary">
                                            {
                                                links && links.map((el, index, arr) => setLinksView(el, index, arr, fetchData, current_page, lastPage))
                                            }
                                        </Pagination>
                                    </Col>
                                    <Col sm="3 text-center my-1">
                                        <div className="number">{from} - {to} of {total}</div>
                                    </Col>
                                </Row>
                            </CardHeader>
                        </Card>
                    </Col>
                </Row>
            </Container>


            {/* =========================== ALL MODALS =============================  */}

            <Modal isOpen={userViewModal} toggle={userViewModaltoggle} size="lg">
                <ModalHeader toggle={userViewModaltoggle} className="text-center">
                    Email Template
                </ModalHeader>
                <ModalBody>
                    <TemplateView
                        toggle={userViewModaltoggle}
                        data={templateViewData}>
                    </TemplateView>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};

export default EmailTemplateList;