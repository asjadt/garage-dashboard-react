import React, { Fragment, useEffect, useState } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import { Container, Row, Col, Card, CardHeader, Table, Pagination, PaginationItem, Button, CardBody, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap"
import { HorizontalBorders, VerticalBorders, BothBordeds, BorderlessTable, DefaultTableBorder, DoubleBorder, BorderBottomColor, DottedBorder, DashedBorder, SolidBorder } from "../../constant";
import { BACKEND_API, http } from '../../utils/backend';
import { apiClient } from '../../utils/apiClient';
import { css } from "@emotion/react";
import { ClipLoader } from 'react-spinners';
import setLinksView from '../../utils/pagination';

import SweetAlert from 'sweetalert2'
import {
    Edit, Delete, Eye
} from 'react-feather';

import DatePicker from "react-datepicker";
import { ROLE_CREATE, ROLE_DELETE, ROLE_UPDATE, ROLE_VIEW,} from '../../constant/permissions';
import Error401Unauthorized from '../../pages/errors/Error401Unauthorized';
import { checkPermissions } from '../../utils/helperFunctions';
import RoleForm from './forms/RoleForm';
import RoleView from './vews/RoleView';




const RoleList = () => {
 
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
    const [initialRolePermissions,setInitialRolePermission] = useState(null);
   


   
 
    // modal
    const [roleCreateModal, setRoleCreateModal] = useState(false);
    const roleCreateModaltoggle = () => setRoleCreateModal(!roleCreateModal);

    const [roleUpdateData, setRoleUpdateData] = useState(null);
    const [roleUpdateModal, setRoleUpdateModal] = useState(false);
    const roleUpdateModaltoggle = () => setRoleUpdateModal(!roleUpdateModal);
    const editForm = (el) => {
        roleUpdateModaltoggle()
        setRoleUpdateData(el)
    }

    const [roleViewData, setRoleViewData] = useState(null);
    const [roleViewModal, setRoleViewModal] = useState(false);
    const roleViewModaltoggle = () => setRoleViewModal(!roleViewModal);
    
    const viewForm = (el) => {
        roleViewModaltoggle()
        setRoleViewData(el)
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
                    apiClient().delete(`${BACKEND_API}/v1.0/roles/${id}`)
                        .then(response => {
                            if (response.status == 200 && response.data.ok) {
                                fetchData(perPage);
                                SweetAlert.fire(
                                    'Deleted!',
                                    'Role has been deleted.',
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
                        'Role is safe'
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
 const fetchInitialRolePermissions = () => {
    apiClient().get(`${BACKEND_API}/v1.0/initial-role-permissions`)
    .then(response => {
        console.log('initial.....',response.data)
        setInitialRolePermission(response.data)
    })
    .catch(error => {
        console.log(error.response)
    })
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
            url = `${BACKEND_API}/v1.0/roles/${urlOrPerPage}`
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
                // console.log(err)
                 console.log(err.response)
                
            })
    }
    const [searchKey, setSearchKey] = useState("");
    const searchFunc = (e) => {
        setSearchKey(e.target.value);
        console.log("test")
        fetchData(`${BACKEND_API}/v1.0/roles/${perPage}?search_key=${e.target.value}`, false)
    }

    useEffect(() => {
        fetchData(perPage,);
        fetchInitialRolePermissions();
    }, [])


    const override = css`
    border-color: black;
  `;


  if(!permissions.includes(ROLE_VIEW)) {
return <><Error401Unauthorized></Error401Unauthorized></>
  }

    return (
        <Fragment>

            <BreadCrumb parent="Home" subparent="User Management / Roles" title="Manage Roles" />
            <Container fluid={true}>
                <Row className='mb-3'>
                    <Col sm="9">
                    </Col>
                    <Col sm="3" >
                    {checkPermissions([ROLE_CREATE],permissions)?(<Button color="primary" onClick={roleCreateModaltoggle}>Create Role</Button>):(null)} 
                        
                    </Col>

                </Row>

                <Row>

                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Role Management</h5><span> Manage your Roles </span>
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
                                
                            </Row>
{/* {!data?.length?(<div className="d-flex align-items-center justify-content-center">
            {
                loading ? <ClipLoader loading={loading} css={override} size={150} >loading</ClipLoader> : <h3 className="display-3" >
                    No Data to show
                </h3>
            }

        </div>):(null)} */}
                          
                            <div className="table-responsive">
                                <Table>
                                    <thead>
                                        <tr className="Dashed">
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"Name"}</th>
                                            <th scope="col">{"actions"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(el => {
                                            return (<tr className="Dashed" key={el.id}>
                                                <th scope="row">{el.id}</th>
                                                <td>{el.name}</td>
                                              
                                                <td>

                                                ,
            {checkPermissions([ROLE_VIEW],permissions)?(<Eye 
                                                    className='mr-1'
                                                    color="#51bb25" size={18} style={{ cursor: "pointer" }}
                                                        onClick={() => viewForm(el)}
                                                    ></Eye>):(null)} 
            {checkPermissions([ROLE_UPDATE],permissions)?( <Edit 
                                                    className='mr-1'
                                                    color="#007bff" size={18} style={{ cursor: "pointer" }}
                                                        onClick={() => editForm(el)}
                                                    ></Edit>):(null)} 
                                                   
            {checkPermissions([ROLE_DELETE],permissions)?(  <Delete color="#ff3f70" size={18} style={{ cursor: "pointer" }}
                                                        onClick={() => deleteFunc(el.id)}></Delete>):(null)} 

                                                   

                                                </td>
                                            </tr>)
                                        })}


                                    </tbody>
                                </Table>
                            </div>
                            <Row className='mt-5'>
                                <Col sm="4" className='text-center'>

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
                                <Col sm="6" className='text-center'>

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

            <Modal isOpen={roleCreateModal} toggle={roleCreateModaltoggle} size="lg">
                <ModalHeader toggle={roleCreateModaltoggle} className="text-center">
                    Role
                </ModalHeader>
                <ModalBody>
                    <RoleForm toggleModal={roleCreateModaltoggle} fetchData={fetchData} perPage={perPage} type="create" initialRolePermissions={initialRolePermissions}></RoleForm>
                </ModalBody>
            </Modal>
            <Modal isOpen={roleUpdateModal} toggle={roleUpdateModaltoggle} size="lg">
                <ModalHeader toggle={roleUpdateModaltoggle} className="text-center">
                    Role
                </ModalHeader>
                <ModalBody>
                    <RoleForm toggleModal={roleUpdateModaltoggle} fetchData={fetchData} perPage={perPage} type="update" roleUpdateData={roleUpdateData} initialRolePermissions={initialRolePermissions}></RoleForm>
                </ModalBody>
            </Modal>

            <Modal isOpen={roleViewModal} toggle={roleViewModaltoggle} size="lg">
                <ModalHeader toggle={roleViewModaltoggle} className="text-center">
                    Role
                </ModalHeader>
                <ModalBody>
                    <RoleView
                        toggleModal={roleViewModaltoggle}
                        roleViewData={roleViewData}
                        initialRolePermissions={initialRolePermissions}
                        >
                       
                    </RoleView>
                </ModalBody>
            </Modal>

        </Fragment>
    );
};

export default RoleList;