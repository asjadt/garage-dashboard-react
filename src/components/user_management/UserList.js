import { css } from "@emotion/react";
import React, { Fragment, useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import { Delete, Edit, Eye } from 'react-feather';
import { Button, Card, CardHeader, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Pagination, Row, Table } from "reactstrap";
import SweetAlert from 'sweetalert2';
import { USER_CREATE, USER_DELETE, USER_UPDATE, USER_VIEW } from '../../constant/permissions';
import BreadCrumb from '../../layout/Breadcrumb';
import Error401Unauthorized from '../../pages/errors/Error401Unauthorized';
import { apiClient } from '../../utils/apiClient';
import { BACKEND_API } from '../../utils/backend';
import { checkPermissions } from '../../utils/helperFunctions';
import setLinksView from '../../utils/pagination';
import UserForm from './forms/UserForm';
import UserView from './vews/UserView';




const UserList = () => {

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
        fetchData(`${BACKEND_API}/v1.0/users/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)
    };
    const setEndDate = date => {
        setendDate(date);
        let startDataFinal = new Date(startDate).toISOString().slice(0, 19).replace('T', ' ');
        let endDataFinal = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
        fetchData(`${BACKEND_API}/v1.0/users/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)

    };
    // modal
    const [userCreateModal, setUserCreateModal] = useState(false);
    const userCreateModaltoggle = () => setUserCreateModal(!userCreateModal);

    const [userUpdateData, setUserUpdateData] = useState(null);
    const [userUpdateModal, setUserUpdateModal] = useState(false);
    const userUpdateModaltoggle = () => setUserUpdateModal(!userUpdateModal);
    const editForm = (el) => {
        userUpdateModaltoggle()
        setUserUpdateData(el)
    }

    const [userViewData, setUserViewData] = useState(null);
    const [userViewModal, setUserViewModal] = useState(false);
    const userViewModaltoggle = () => setUserViewModal(!userViewModal);

    const viewForm = (el) => {
        userViewModaltoggle()
        setUserViewData(el)
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
                    apiClient().delete(`${BACKEND_API}/v1.0/users/${id}`)
                        .then(response => {
                            if (response.status == 200 && response.data.ok) {
                                fetchData(perPage);
                                SweetAlert.fire(
                                    'Deleted!',
                                    'User has been deleted.',
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
                        'User is safe'
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
            url = `${BACKEND_API}/v1.0/users/${urlOrPerPage}`
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
        fetchData(`${BACKEND_API}/v1.0/users/${perPage}?search_key=${e.target.value}`, false)
    }

    useEffect(() => {
        fetchData(perPage,);
    }, [])


    const override = css`
    border-color: black;
  `;


    if (!permissions.includes(USER_VIEW)) {
        return <><Error401Unauthorized></Error401Unauthorized></>
    }

    return (
        <Fragment>

            <BreadCrumb parent="Home" subparent="User Management / Users" title="Manage Users" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h5>User Management</h5>
                                    <span> Manage your Users </span>
                                </div>

                                {checkPermissions([USER_CREATE], permissions) ? (<Button color="primary" onClick={userCreateModaltoggle}>Create User</Button>) : (null)}

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
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"First Name"}</th>
                                            <th scope="col">{"Last Name"}</th>
                                            <th scope="col">{"email"}</th>
                                            <th scope="col">{"phone"}</th>
                                            <th scope="col">{"role"}</th>
                                            <th scope="col">{"actions"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((el, i) => {
                                            return (<tr className="Dashed" key={el.id}>
                                                <th scope="row">{i + 1}</th>
                                                <td>{el.first_Name}</td>
                                                <td>{el.last_Name}</td>
                                                <td>{el.email}</td>
                                                <td>{el.phone}</td>
                                                <td>{el.roles.map(el2 => {
                                                    return <span key={el2.id}>{el2.name} </span>
                                                })}</td>
                                                <td>
                                                    {checkPermissions([USER_VIEW], permissions) ? (<Eye
                                                        className='mr-1'
                                                        color="#51bb25" size={18} style={{ cursor: "pointer" }}
                                                        onClick={() => viewForm(el)}
                                                    ></Eye>) : (null)}
                                                    {checkPermissions([USER_UPDATE], permissions) ? (<Edit
                                                        className='mr-1'
                                                        color="#007bff" size={18} style={{ cursor: "pointer" }}
                                                        onClick={() => editForm(el)}
                                                    ></Edit>) : (null)}

                                                    {checkPermissions([USER_DELETE], permissions) ? (<Delete color="#ff3f70" size={18} style={{ cursor: "pointer" }}
                                                        onClick={() => deleteFunc(el.id)}></Delete>) : (null)}
                                                </td>
                                            </tr>)
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
            <Modal isOpen={userCreateModal} toggle={userCreateModaltoggle} size="lg">
                <ModalHeader toggle={userCreateModaltoggle} className="text-center">
                    User
                </ModalHeader>
                <ModalBody>
                    <UserForm toggleModal={userCreateModaltoggle} fetchData={fetchData} perPage={perPage} type="create"></UserForm>
                </ModalBody>
            </Modal>
            <Modal isOpen={userUpdateModal} toggle={userUpdateModaltoggle} size="lg">
                <ModalHeader toggle={userUpdateModaltoggle} className="text-center">
                    User
                </ModalHeader>
                <ModalBody>
                    <UserForm toggleModal={userUpdateModaltoggle} fetchData={fetchData} perPage={perPage} type="update" userUpdateData={userUpdateData}></UserForm>
                </ModalBody>
            </Modal>

            <Modal isOpen={userViewModal} toggle={userViewModaltoggle} size="lg">
                <ModalHeader toggle={userViewModaltoggle} className="text-center">
                    User
                </ModalHeader>
                <ModalBody>
                    <UserView
                        toggleModal={userViewModaltoggle}
                        userViewData={userViewData}>
                    </UserView>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};

export default UserList;