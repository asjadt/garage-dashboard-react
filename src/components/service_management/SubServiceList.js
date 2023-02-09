import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, CardHeader, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Pagination, Row, Table } from "reactstrap";
import BreadCrumb from '../../layout/Breadcrumb';

import { apiClient } from '../../utils/apiClient';
import { BACKEND_API } from '../../utils/backend';
import setLinksView from '../../utils/pagination';

import DatePicker from "react-datepicker";
import { Delete, Edit, Eye } from 'react-feather';
import { useParams } from 'react-router';
import SweetAlert from 'sweetalert2';
import {
    SERVICE_CREATE, SERVICE_DELETE, SERVICE_UPDATE, SERVICE_VIEW
} from '../../constant/permissions';
import Error401Unauthorized from '../../pages/errors/Error401Unauthorized';
import { checkPermissions } from '../../utils/helperFunctions';
import SubServiceForm from './forms/SubServiceForm';
import SubServiceView from './vews/SubServiceView';



const SubServiceList = () => {
    let { id } = useParams();

    let permissions = JSON.parse(localStorage.getItem("permissions"));

    const [service, setService] = useState(null);

    // get single data
    useEffect(() => {
        apiClient().get(`${BACKEND_API}/v1.0/services/single/get/${id}`).then(response => {
            setService(response.data)
        })
            .catch(error => {

            })
    }, [])

    // end get single data
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState(9)
    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)
    const [total, setTotal] = useState(null)
    const [lastPage, setLastPage] = useState(0)
    const [links, setLinks] = useState(null)
    const [current_page, set_current_page] = useState(0);
    const [startDate, setstartDate] = useState(new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1))
    const [endDate, setendDate] = useState(new Date())

    const setStartDate = date => {
        setstartDate(date);
        let startDataFinal = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
        let endDataFinal = new Date(endDate).toISOString().slice(0, 19).replace('T', ' ');
        fetchData(`${BACKEND_API}/v1.0/sub-services/${id}/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)
    };
    const setEndDate = date => {
        setendDate(date);
        let startDataFinal = new Date(startDate).toISOString().slice(0, 19).replace('T', ' ');
        let endDataFinal = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
        fetchData(`${BACKEND_API}/v1.0/sub-services/${id}/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)

    };

    // modal
    const [subServiceCreateModal, setSubServiceCreateModal] = useState(false);
    const subServiceCreateModaltoggle = () => setSubServiceCreateModal(!subServiceCreateModal);
    const [subServiceUpdateData, setSubServiceUpdateData] = useState(null);
    const [subServiceUpdateModal, setSubServiceUpdateModal] = useState(false);
    const subServiceUpdateModaltoggle = () => setSubServiceUpdateModal(!subServiceUpdateModal);
    const editForm = (el) => {
        subServiceUpdateModaltoggle()
        setSubServiceUpdateData(el)
    }
    const [subServiceViewData, setSubServiceViewData] = useState(null);
    const [subServiceViewModal, setSubServiceViewModal] = useState(false);
    const subServiceViewModaltoggle = () => setSubServiceViewModal(!subServiceViewModal);

    const viewForm = (el) => {
        subServiceViewModaltoggle()
        setSubServiceViewData(el)
    }

    const deleteFunc = (id) => {
        SweetAlert.fire({
            title: 'Are you sure?',
            text: "Once deleted, you will not be able to recover this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'cancel',
            reverseButtons: true
        })
            .then((result) => {
                if (result.value) {
                    apiClient().delete(`${BACKEND_API}/v1.0/sub-services/${id}`)
                        .then(response => {
                            if (response.status == 200 && response.data.ok) {
                                fetchData(perPage);
                                SweetAlert.fire(
                                    'Deleted!',
                                    'Automobile Sub Service has been deleted.',
                                    'success'
                                )
                            }
                        })
                        .catch(error => {
                            console.log(error.response)
                            SweetAlert.fire({ title: error.response.data.message, text: "Please Try Again", icon: "warning" });
                        })

                }
                else {
                    SweetAlert.fire(
                        'Automobile Sub Service is safe'
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
            url = `${BACKEND_API}/v1.0/sub-services/${id}/${urlOrPerPage}`
        }
        apiClient().get(url).then(response => {
            setLoading(false)
            console.log(response.data)
            setData(response.data.data)
            setFrom(response.data.from)
            setTo(response.data.to)
            setTotal(response.data.total)
            setLastPage(response.data.last_page)
            setLinks(response.data.links)
            set_current_page(response.data.current_page)

        }).catch(err => {
            setLoading(false)
            console.log(err.response)
        })
    }

    const [searchKey, setSearchKey] = useState("");

    const searchFunc = (e) => {
        setSearchKey(e.target.value);
        fetchData(`${BACKEND_API}/v1.0/sub-services/${id}/${perPage}?search_key=${e.target.value}`, false)
    }

    useEffect(() => {
        fetchData(perPage);
    }, [])




    if (!permissions.includes(SERVICE_VIEW)) {
        return <><Error401Unauthorized></Error401Unauthorized></>
    }

    return (
        <Fragment>

            <BreadCrumb parent="Home" subparent="Service / Sub Service" title="Manage Sub Service" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h5>Automobile Sub Service</h5><span>Manage your Sub Service </span>
                                        <br />
                                        <br />
                                        <span className='text-capitalize'>
                                            <small>
                                                {`${service?.category?.name} > ${service?.name}`}
                                            </small>
                                        </span>
                                    </div>
                                    <div>
                                        {checkPermissions([SERVICE_CREATE], permissions) && (
                                            <Button color="primary" onClick={subServiceCreateModaltoggle}>
                                                Create  Sub Service
                                            </Button>
                                        )}
                                    </div>
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
                                <Col sm={4}>
                                    <CardHeader>
                                        <Row className="date-range">
                                            <Col sm="6">
                                                <DatePicker className="form-control digits"
                                                    selected={startDate}
                                                    onChange={setStartDate}
                                                    selectsStart
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                />
                                            </Col>
                                            <Col sm="6">
                                                <DatePicker className="form-control digits ml-2"
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
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"name"}</th>
                                            <th scope="col">{"description"}</th>
                                            <th scope="col">{"service"}</th>
                                            <th scope="col">{"category"}</th>
                                            <th scope="col">{"actions"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((el, i) => {
                                            return (<tr className="Dashed" key={el.id}>
                                                <th scope="row">{i + 1}</th>
                                                <td>{el.name}</td>
                                                <td>{el.description}</td>
                                                <td>{el.service?.name}</td>
                                                <td>{el.service?.category?.name}</td>
                                                <td>
                                                    {checkPermissions([SERVICE_VIEW], permissions) && (
                                                        <Eye
                                                            className='mr-1'
                                                            color="#51bb25" size={18} style={{ cursor: "pointer" }}
                                                            onClick={() => viewForm(el)}
                                                        ></Eye>
                                                    )}

                                                    {checkPermissions([SERVICE_UPDATE], permissions) && (
                                                        <Edit className='mr-1' color="#007bff" size={18} style={{ cursor: "pointer" }} onClick={() => editForm(el)} ></Edit>
                                                    )}

                                                    {checkPermissions([SERVICE_DELETE], permissions) && (
                                                        <Delete color="#ff3f70" size={18} style={{ cursor: "pointer" }}
                                                            onClick={() => deleteFunc(el.id)}></Delete>
                                                    )}
                                                </td>
                                            </tr>)
                                        })}
                                    </tbody>
                                </Table>
                            </div>
                            <Row className='mt-5'>
                                <Col sm="2" className='text-center'>
                                    <div className="items">
                                        <label>Item per page</label> <select onChange={handlePerPage} value={perPage}>
                                            <option value={6}>6</option>
                                            <option value={9}>9</option>
                                            <option value={12}>12</option>
                                            <option value={15}>15</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col sm="2">   <div className="number">{from} - {to} of {total}</div></Col>
                                <Col sm="8" className='text-center'>
                                    <Pagination aria-label="Page navigation example" className="pagination-primary">
                                        {
                                            links && links.map((el, index, arr) => setLinksView(el, index, arr, fetchData, current_page, lastPage))
                                        }
                                    </Pagination>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>




            <Modal isOpen={subServiceCreateModal} toggle={subServiceCreateModaltoggle} size="lg">
                <ModalHeader toggle={subServiceCreateModaltoggle} className="text-center">
                    Sub Service
                </ModalHeader>
                <ModalBody>
                    <SubServiceForm toggleModal={subServiceCreateModaltoggle} fetchData={fetchData} perPage={perPage} service={service} type="create"></SubServiceForm>
                </ModalBody>
            </Modal>
            <Modal isOpen={subServiceUpdateModal} toggle={subServiceUpdateModaltoggle} size="lg">
                <ModalHeader toggle={subServiceUpdateModaltoggle} className="text-center">
                    Sub Service
                </ModalHeader>
                <ModalBody>
                    <SubServiceForm toggleModal={subServiceUpdateModaltoggle} fetchData={fetchData} perPage={perPage} type="update"
                        service={service}
                        subServiceUpdateData={subServiceUpdateData}></SubServiceForm>
                </ModalBody>
            </Modal>

            <Modal isOpen={subServiceViewModal} toggle={subServiceViewModaltoggle} size="lg">
                <ModalHeader toggle={subServiceViewModaltoggle} className="text-center">
                    Sub Service
                </ModalHeader>
                <ModalBody>
                    <SubServiceView
                        toggleModal={subServiceViewModaltoggle}
                        subServiceViewData={subServiceViewData}>
                    </SubServiceView>
                </ModalBody>
            </Modal>

        </Fragment>
    );
};

export default SubServiceList;