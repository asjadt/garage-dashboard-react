import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, CardHeader, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Pagination, Row, Table } from "reactstrap";
import BreadCrumb from '../../layout/Breadcrumb';

import { css } from "@emotion/react";
import { apiClient } from '../../utils/apiClient';
import { BACKEND_API } from '../../utils/backend';

import setLinksView from '../../utils/pagination';

import DatePicker from "react-datepicker";
import { Delete, Edit, Eye } from 'react-feather';
import { Link } from 'react-router-dom';
import SweetAlert from 'sweetalert2';
import { GARAGE_CREATE, GARAGE_DELETE, GARAGE_UPDATE, GARAGE_VIEW } from '../../constant/permissions';
import Error401Unauthorized from '../../pages/errors/Error401Unauthorized';
import { checkPermissions } from '../../utils/helperFunctions';
import GarageView from './vews/GarageView';




const GarageList = () => {

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
        fetchData(`${BACKEND_API}/v1.0/garages/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)
    };
    const setEndDate = date => {
        setendDate(date);
        let startDataFinal = new Date(startDate).toISOString().slice(0, 19).replace('T', ' ');
        let endDataFinal = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
        fetchData(`${BACKEND_API}/v1.0/garages/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)

    };
    // modal




    const [garageViewData, setGarageViewData] = useState(null);
    const [garageViewModal, setGarageViewModal] = useState(false);
    const garageViewModaltoggle = () => setGarageViewModal(!garageViewModal);

    const viewForm = (el) => {
        garageViewModaltoggle()
        setGarageViewData(el)
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
                    apiClient().delete(`${BACKEND_API}/v1.0/garages/${id}`)
                        .then(response => {
                            if (response.status == 200 && response.data.ok) {
                                fetchData(perPage);
                                SweetAlert.fire(
                                    'Deleted!',
                                    'Garage has been deleted.',
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
                        'Garage is safe'
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
            url = `${BACKEND_API}/v1.0/garages/${urlOrPerPage}`
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
        fetchData(`${BACKEND_API}/v1.0/garages/${perPage}?search_key=${e.target.value}`, false)
    }

    useEffect(() => {
        fetchData(perPage,);
    }, [])


    const override = css`
    border-color: black;
  `;


    if (!permissions.includes(GARAGE_VIEW)) {
        return <><Error401Unauthorized></Error401Unauthorized></>
    }

    return (
        <Fragment>

            <BreadCrumb parent="Home" subparent="Garage Management / Garages" title="Manage Garages" />
            <Container fluid={true}>

                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <div  className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h5>Garage Management</h5><span> Manage your Garages </span>
                                    </div>
                                    {checkPermissions([GARAGE_CREATE], permissions) && (
                                        <Link to={`${process.env.PUBLIC_URL}/garages/create`}>
                                            <Button color="primary" >Create Garage</Button>
                                        </Link>
                                    )}
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
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"Name"}</th>
                                            <th scope="col">{"Email"}</th>
                                            <th scope="col">{"Phone"}</th>
                                            <th scope="col">{"Owner"}</th>
                                            <th scope="col">{"Owner Email"}</th>
                                            <th scope="col">{"Actions"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((el, index) => {
                                            return (<tr className="Dashed" key={el.id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{el.name}</td>
                                                <td>{el.email}</td>
                                                <td>{el.phone}</td>
                                                <td>{`${el.owner.first_Name} ${el.owner.last_Name}`}</td>
                                                <td>{el.owner.email}</td>
                                                <td>
                                                    {checkPermissions([GARAGE_VIEW], permissions) ? (<Eye
                                                        className='mr-1'
                                                        color="#51bb25" size={18} style={{ cursor: "pointer" }}
                                                        onClick={() => viewForm(el)}
                                                    ></Eye>) : (null)}
                                                    {checkPermissions([GARAGE_UPDATE], permissions) ? (<Link to={`${process.env.PUBLIC_URL}/garages/update/${el.id}`}>
                                                        <Edit
                                                            className='mr-1'
                                                            color="#007bff" size={18} style={{ cursor: "pointer" }}

                                                        ></Edit>
                                                    </Link>) : (null)}

                                                    {checkPermissions([GARAGE_DELETE], permissions) ? (<Delete color="#ff3f70" size={18} style={{ cursor: "pointer" }}
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




            <Modal isOpen={garageViewModal} toggle={garageViewModaltoggle} size="lg">
                <ModalHeader toggle={garageViewModaltoggle} className="text-center">
                    Garage
                </ModalHeader>
                <ModalBody>
                    <GarageView
                        toggleModal={garageViewModaltoggle}
                        garageViewData={garageViewData}>
                    </GarageView>
                </ModalBody>
            </Modal>

        </Fragment>
    );
};

export default GarageList;