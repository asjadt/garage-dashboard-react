import React, { Fragment, useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import { Delete, Edit, Eye } from 'react-feather';
import { Link } from 'react-router-dom';
import { Button, Card, CardHeader, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Pagination, Row, Table } from "reactstrap";
import SweetAlert from 'sweetalert2';
import { AUTOMOBILE_CREATE, AUTOMOBILE_DELETE, AUTOMOBILE_UPDATE, AUTOMOBILE_VIEW } from '../../constant/permissions';
import Error401Unauthorized from '../../pages/errors/Error401Unauthorized';
import { apiClient } from '../../utils/apiClient';
import { BACKEND_API } from '../../utils/backend';
import { checkPermissions } from '../../utils/helperFunctions';
import setLinksView from '../../utils/pagination';
import AutomobileCategoryForm from './forms/AutomobileCategoryForm';
import AutomobileCategoryView from './vews/AutomobileCategoryView';




const AutomobileCategoryList = () => {
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
    const [startDate, setstartDate] = useState(new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1))
    const [endDate, setendDate] = useState(new Date())

    const setStartDate = date => {
        setstartDate(date);
        let startDataFinal = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
        let endDataFinal = new Date(endDate).toISOString().slice(0, 19).replace('T', ' ');
        fetchData(`${BACKEND_API}/v1.0/automobile-categories/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)
    };
    const setEndDate = date => {
        setendDate(date);
        let startDataFinal = new Date(startDate).toISOString().slice(0, 19).replace('T', ' ');
        let endDataFinal = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
        fetchData(`${BACKEND_API}/v1.0/automobile-categories/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)

    };
    // modal
    const [automobileCategoryCreateModal, setAutomobileCategoryCreateModal] = useState(false);
    const automobileCategoryCreateModaltoggle = () => setAutomobileCategoryCreateModal(!automobileCategoryCreateModal);

    const [automobileCategoryUpdateData, setAutomobileCategoryUpdateData] = useState(null);
    const [automobileCategoryUpdateModal, setAutomobileCategoryUpdateModal] = useState(false);
    const automobileCategoryUpdateModaltoggle = () => setAutomobileCategoryUpdateModal(!automobileCategoryUpdateModal);
    const editForm = (el) => {
        automobileCategoryUpdateModaltoggle()
        setAutomobileCategoryUpdateData(el)
    }

    const [automobileCategoryViewData, setAutomobileCategoryViewData] = useState(null);
    const [automobileCategoryViewModal, setAutomobileCategoryViewModal] = useState(false);
    const automobileCategoryViewModaltoggle = () => setAutomobileCategoryViewModal(!automobileCategoryViewModal);

    const viewForm = (el) => {
        automobileCategoryViewModaltoggle()
        setAutomobileCategoryViewData(el)
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
        })
            .then((result) => {
                if (result.value) {
                    apiClient().delete(`${BACKEND_API}/v1.0/automobile-categories/${id}`)
                        .then(response => {
                            if (response.status === 200 && response.data.ok) {
                                fetchData(perPage);
                                SweetAlert.fire(
                                    'Deleted!',
                                    'Automobile Category has been deleted.',
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
                        'Automobile Category is safe'
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

        //  setData(null)
        let url;
        if (typeof urlOrPerPage === "string") {
            url = urlOrPerPage;
            // url = urlOrPerPage.replace("http", http);

        } else {
            url = `${BACKEND_API}/v1.0/automobile-categories/${urlOrPerPage}`
        }
        apiClient().get(url)
            .then(response => {
                setLoading(false)
                console.log(response.data)
                setData(response.data.data)
                setFrom(response.data.from)
                setTo(response.data.to)
                setTotal(response.data.total)
                setLastPage(response.data.last_page)
                setLinks(response.data.links)
                set_current_page(response.data.current_page)

            })
            .catch(err => {
                setLoading(false)
                console.log(err.response)
            })
    }
    const [searchKey, setSearchKey] = useState("");
    const searchFunc = (e) => {
        setSearchKey(e.target.value);
        fetchData(`${BACKEND_API}/v1.0/automobile-categories/${perPage}?search_key=${e.target.value}`, false)
    }

    useEffect(() => {
        fetchData(perPage,);
    }, [])


    if (!permissions.includes(AUTOMOBILE_VIEW)) {
        return <><Error401Unauthorized></Error401Unauthorized></>
    }

    return (
        <Fragment>
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <dir>
                                        <h5>Automobile Category Management</h5><span> Manage your Automobile Category </span>
                                    </dir>

                                    {checkPermissions([AUTOMOBILE_CREATE], permissions) ? (<Button color="primary" onClick={automobileCategoryCreateModaltoggle}>Create Automobile Category</Button>) : (null)}
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

                            <div className="table-responsive">
                                <Table>
                                    <thead>
                                        <tr className="Dashed">
                                            <th scope="col" className="col-1">{"#"}</th>
                                            <th scope="col" className="col-md-9 col-8">{"name"}</th>
                                            <th scope="col" className="col-md-2 col-3">{"actions"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((el,i) => {
                                            return (<tr className="Dashed" key={el.id}>
                                                <th scope="row">{i+1}</th>
                                                <td>{el.name}</td>
                                                <td>
                                                    {checkPermissions([AUTOMOBILE_VIEW], permissions) ? (
                                                        <Link to={`${process.env.PUBLIC_URL}/automobile-category/single/${el.id}`}>
                                                            <Eye
                                                                className='mr-1'
                                                                color="#51bb25" size={18} style={{ cursor: "pointer" }}
                                                            >

                                                            </Eye>
                                                        </Link>
                                                    ) : (null)}
                                                    {checkPermissions([AUTOMOBILE_UPDATE], permissions) ? (<Edit
                                                        className='mr-1'
                                                        color="#007bff" size={18} style={{ cursor: "pointer" }}
                                                        onClick={() => editForm(el)}
                                                    ></Edit>) : (null)}

                                                    {checkPermissions([AUTOMOBILE_DELETE], permissions) ? (<Delete color="#ff3f70" size={18} style={{ cursor: "pointer" }}
                                                        onClick={() => deleteFunc(el.id)}></Delete>) : (null)}
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
                                            links ? links.map((el, index, arr) => setLinksView(el, index, arr, fetchData, current_page, lastPage)) : null
                                        }
                                    </Pagination>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Modal isOpen={automobileCategoryCreateModal} toggle={automobileCategoryCreateModaltoggle} size="lg">
                <ModalHeader toggle={automobileCategoryCreateModaltoggle} className="text-center">
                    Automobile Category
                </ModalHeader>
                <ModalBody>
                    <AutomobileCategoryForm toggleModal={automobileCategoryCreateModaltoggle} fetchData={fetchData} perPage={perPage} type="create"></AutomobileCategoryForm>
                </ModalBody>
            </Modal>
            <Modal isOpen={automobileCategoryUpdateModal} toggle={automobileCategoryUpdateModaltoggle} size="lg">
                <ModalHeader toggle={automobileCategoryUpdateModaltoggle} className="text-center">
                    Automobile Category
                </ModalHeader>
                <ModalBody>
                    <AutomobileCategoryForm toggleModal={automobileCategoryUpdateModaltoggle} fetchData={fetchData} perPage={perPage} type="update" automobileCategoryUpdateData={automobileCategoryUpdateData}></AutomobileCategoryForm>
                </ModalBody>
            </Modal>

            <Modal isOpen={automobileCategoryViewModal} toggle={automobileCategoryViewModaltoggle} size="lg">
                <ModalHeader toggle={automobileCategoryViewModaltoggle} className="text-center">
                    Automobile Category
                </ModalHeader>
                <ModalBody>
                    <AutomobileCategoryView
                        toggleModal={automobileCategoryViewModaltoggle}
                        automobileViewData={automobileCategoryViewData}>
                    </AutomobileCategoryView>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};

export default AutomobileCategoryList;