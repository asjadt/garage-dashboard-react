import React, { Fragment, useEffect, useState } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import { Container, Row, Col, Card, CardHeader, Table, Pagination, PaginationItem, Button, CardBody, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap"
import { HorizontalBorders, VerticalBorders, BothBordeds, BorderlessTable, DefaultTableBorder, DoubleBorder, BorderBottomColor, DottedBorder, DashedBorder, SolidBorder } from "../../constant";
import { BACKEND_API, http } from '../../utils/backend';
import { apiClient } from '../../utils/apiClient';
import { css } from "@emotion/react";
import { ClipLoader } from 'react-spinners';
import setLinksView from '../../utils/pagination';
import ServiceForm from './forms/ServiceForm';
import SweetAlert from 'sweetalert2'
import {
    Edit, Delete, Eye
} from 'react-feather';
import ServiceView from './vews/ServiceView';
import DatePicker from "react-datepicker";
import { SERVICE_CREATE, SERVICE_DELETE, SERVICE_UPDATE, SERVICE_VIEW } from '../../constant/permissions';
import Error401Unauthorized from '../../pages/errors/Error401Unauthorized';
import { checkPermissions } from '../../utils/helperFunctions';




const ServiceList = () => {
 
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
    const [startDate,setstartDate] = useState(new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1))
    const [endDate,setendDate] = useState(new Date())

   
    const setStartDate = date => {
        setstartDate(date);
      let startDataFinal =   new Date(date).toISOString().slice(0, 19).replace('T', ' ');
      let endDataFinal =   new Date(endDate).toISOString().slice(0, 19).replace('T', ' ');
         fetchData(`${BACKEND_API}/v1.0/services/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)
      };
      const setEndDate = date => {
        setendDate(date);
        let startDataFinal =   new Date(startDate).toISOString().slice(0, 19).replace('T', ' ');
        let endDataFinal =   new Date(date).toISOString().slice(0, 19).replace('T', ' ');
           fetchData(`${BACKEND_API}/v1.0/services/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)
       
       };
    // modal
    const [serviceCreateModal, setServiceCreateModal] = useState(false);
    const serviceCreateModaltoggle = () => setServiceCreateModal(!serviceCreateModal);

    const [serviceUpdateData, setServiceUpdateData] = useState(null);
    const [serviceUpdateModal, setServiceUpdateModal] = useState(false);
    const serviceUpdateModaltoggle = () => setServiceUpdateModal(!serviceUpdateModal);
    const editForm = (el) => {
        serviceUpdateModaltoggle()
        setServiceUpdateData(el)
    }

    const [serviceViewData, setServiceViewData] = useState(null);
    const [serviceViewModal, setServiceViewModal] = useState(false);
    const serviceViewModaltoggle = () => setServiceViewModal(!serviceViewModal);
    
    const viewForm = (el) => {
        serviceViewModaltoggle()
        setServiceViewData(el)
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
                    apiClient().delete(`${BACKEND_API}/v1.0/services/${id}`)
                        .then(response => {
                            if (response.status == 200 && response.data.ok) {
                                fetchData(perPage);
                                SweetAlert.fire(
                                    'Deleted!',
                                    'Service has been deleted.',
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
                        'Service is safe'
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
            url = `${BACKEND_API}/v1.0/services/${urlOrPerPage}`
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
        fetchData(`${BACKEND_API}/v1.0/services/${perPage}?search_key=${e.target.value}`, false)
    }

    useEffect(() => {
        fetchData(perPage,);
    }, [])


    const override = css`
    border-color: black;
  `;


  if(!permissions.includes(SERVICE_VIEW)) {
return <><Error401Unauthorized></Error401Unauthorized></>
  }

    return (
        <Fragment>

            <BreadCrumb parent="Home" subparent="Service Management / Services" title="Manage Services" />
            <Container fluid={true}>
                <Row className='mb-3'>
                    <Col sm="9">
                    </Col>
                    <Col sm="3" >
                    {checkPermissions([SERVICE_CREATE],permissions)?(<Button color="primary" onClick={serviceCreateModaltoggle}>Create Service</Button>):(null)} 
                        
                    </Col>

                </Row>

                <Row>

                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Service Management</h5><span> Manage your Services </span>
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
                               <Row  className="date-range">
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
                               
                            
                                        {/* <Form className="search-form">
                                            <FormGroup className="m-0">
                                                <Label className="sr-only">Search</Label>
                                                <Input className="form-control-plaintext" type="search" placeholder="Search.." onChange={searchFunc} value={searchKey} autoFocus />
                                            </FormGroup>

                                        </Form> */}

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
                                            <th scope="col">{"name"}</th>
                                            <th scope="col">{"description"}</th>
                                            <th scope="col">{"automobile category"}</th>
                                            <th scope="col">{"actions"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(el => {
                                            return (<tr className="Dashed" key={el.id}>
                                                <th scope="row">{el.id}</th>
                                                <td>{el.name}</td>
                                                <td>{el.description}</td>
                                                <td>{el.category?.name}</td>
                                               
                                                <td>

                                                ,
            {checkPermissions([SERVICE_VIEW],permissions)?(<Eye 
                                                    className='mr-1'
                                                    color="#51bb25" size={18} style={{ cursor: "pointer" }}
                                                        onClick={() => viewForm(el)}
                                                    ></Eye>):(null)} 
            {checkPermissions([SERVICE_UPDATE],permissions)?( <Edit 
                                                    className='mr-1'
                                                    color="#007bff" size={18} style={{ cursor: "pointer" }}
                                                        onClick={() => editForm(el)}
                                                    ></Edit>):(null)} 
                                                   
            {checkPermissions([SERVICE_DELETE],permissions)?(  <Delete color="#ff3f70" size={18} style={{ cursor: "pointer" }}
                                                        onClick={() => deleteFunc(el.id)}></Delete>):(null)} 

                                                   

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

            <Modal isOpen={serviceCreateModal} toggle={serviceCreateModaltoggle} size="lg">
                <ModalHeader toggle={serviceCreateModaltoggle} className="text-center">
                Service
                </ModalHeader>
                <ModalBody>
                    <ServiceForm toggleModal={serviceCreateModaltoggle} fetchData={fetchData} perPage={perPage} type="create"></ServiceForm>
                </ModalBody>
            </Modal>
            <Modal isOpen={serviceUpdateModal} toggle={serviceUpdateModaltoggle} size="lg">
                <ModalHeader toggle={serviceUpdateModaltoggle} className="text-center">
                Service
                </ModalHeader>
                <ModalBody>
                    <ServiceForm toggleModal={serviceUpdateModaltoggle} fetchData={fetchData} perPage={perPage} type="update" serviceUpdateData={serviceUpdateData}></ServiceForm>
                </ModalBody>
            </Modal>

            <Modal isOpen={serviceViewModal} toggle={serviceViewModaltoggle} size="lg">
                <ModalHeader toggle={serviceViewModaltoggle} className="text-center">
                Service
                </ModalHeader>
                <ModalBody>
                    <ServiceView
                        toggleModal={serviceViewModaltoggle}
                        serviceViewData={serviceViewData}>
                    </ServiceView>
                </ModalBody>
            </Modal>

        </Fragment>
    );
};

export default ServiceList;