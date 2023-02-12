import React, { Fragment, useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import { Delete, Edit, Eye } from 'react-feather';
import { Button, Card, CardHeader, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Pagination, Row, Table } from "reactstrap";
import SweetAlert from 'sweetalert2';
import { FUEL_STATION_CREATE, FUEL_STATION_DELETE, FUEL_STATION_UPDATE, FUEL_STATION_VIEW } from '../../constant/permissions';
import BreadCrumb from '../../layout/Breadcrumb';
import Error401Unauthorized from '../../pages/errors/Error401Unauthorized';
import { apiClient } from '../../utils/apiClient';
import { BACKEND_API } from '../../utils/backend';
import { checkPermissions } from '../../utils/helperFunctions';
import setLinksView from '../../utils/pagination';
import FuelStationForm from './forms/FuelStationForm';
import FuelStationView from './vews/FuelStationView';


const FuelStationList = () => {
    let permissions = JSON.parse(localStorage.getItem("permissions"));

    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState(9)
    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)
    const [total, setTotal] = useState(null)
    const [lastPage, setLastPage] = useState(0)
    const [links, setLinks] = useState(null)
    const [current_page, set_current_page] = useState(0);
    const [fuelStationViewData, setFuelStationViewData] = useState(null);
    const [fuelStationViewModal, setFuelStationViewModal] = useState(false);
    const [fuelStationUpdateData, setFuelStationUpdateData] = useState(null);
    const [fuelStationUpdateModal, setFuelStationUpdateModal] = useState(false);
    const [fuelStationCreateModal, setFuelStationCreateModal] = useState(false);
    const [searchKey, setSearchKey] = useState("");

    const [startDate, setstartDate] = useState(new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1))
    const [endDate, setendDate] = useState(new Date())


    const setStartDate = date => {
        setstartDate(date);
        let startDataFinal = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
        let endDataFinal = new Date(endDate).toISOString().slice(0, 19).replace('T', ' ');
        fetchData(`${BACKEND_API}/v1.0/fuel-station/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)
    };

    const setEndDate = date => {
        setendDate(date);
        let startDataFinal = new Date(startDate).toISOString().slice(0, 19).replace('T', ' ');
        let endDataFinal = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
        fetchData(`${BACKEND_API}/v1.0/fuel-station/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)

    };

    // modal
    const fuelStationCreateModaltoggle = () => setFuelStationCreateModal(!fuelStationCreateModal);
    const fuelStationUpdateModaltoggle = () => setFuelStationUpdateModal(!fuelStationUpdateModal);

    const editForm = (el) => {
        fuelStationUpdateModaltoggle()
        setFuelStationUpdateData(el)
    }
    const fuelStationViewModaltoggle = () => setFuelStationViewModal(!fuelStationViewModal);

    const viewForm = (el) => {
        fuelStationViewModaltoggle()
        setFuelStationViewData(el)
    }

    // end modal
    const fetchData = (urlOrPerPage) => {
        let url;
        if (typeof urlOrPerPage === "string") {
            url = urlOrPerPage;
        } else {
            url = `${BACKEND_API}/v1.0/fuel-station/${urlOrPerPage}`
        }
        apiClient().get(url).then(response => {
            setData(response.data.data)
            setFrom(response.data.from)
            setTo(response.data.to)
            setTotal(response.data.total)
            setLastPage(response.data.last_page)
            setLinks(response.data.links)
            set_current_page(response.data.current_page)
        }).catch(err => {
            console.log(err.response)
        })
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
        }).then((result) => {
            if (result.value) {
                apiClient().delete(`${BACKEND_API}/v1.0/fuel-station/${id}`).then(response => {
                    if (response.status === 200 && response.data.ok) {
                        fetchData(perPage);
                        SweetAlert.fire(
                            'Deleted!',
                            'Fuel station has been deleted.',
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
                    'Fuel station is safe'
                )
            }
        })
    }

    const handlePerPage = (e) => {
        const newValue = parseInt(e.target.value);
        setPerPage(newValue)
        fetchData(newValue)
    }


    const searchFunc = (e) => {
        setSearchKey(e.target.value);
        fetchData(`${BACKEND_API}/v1.0/fuel-station/${perPage}?search_key=${e.target.value}`, false)
    }

    useEffect(() => {
        fetchData(perPage);
    }, [])


    if (!permissions.includes(FUEL_STATION_VIEW)) {
        return <><Error401Unauthorized></Error401Unauthorized></>
    }

    return (
        <Fragment>

            <BreadCrumb parent="Home" subparent="Fuel Station Management / Fuel Stations" title="Manage Fuel Station" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h5>Fuel Station Management</h5>
                                    <span> Manage fuel stations</span>
                                </div>

                                {checkPermissions([FUEL_STATION_CREATE], permissions) ? (<Button color="primary" onClick={fuelStationCreateModaltoggle}>Create Fuel Station</Button>) : (null)}

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
                                            <th scope="col">{"Name"}</th>
                                            <th scope="col">{"Description"}</th>
                                            <th scope="col">{"Address"}</th>
                                            <th scope="col">{"Opening Time"}</th>
                                            <th scope="col">{"Closing Time"}</th>
                                            <th scope="col">{"Action"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((el, i) => {
                                            return (<tr className="Dashed" key={el.id}>
                                                <th scope="row">{i + 1}</th>
                                                <td>{el.name}</td>
                                                <td>{el.description}</td>
                                                <td>{el.address}</td>
                                                <td>{el.opening_time}</td>
                                                <td>{el.closing_time}</td>
                                                <td>
                                                    {checkPermissions([FUEL_STATION_VIEW], permissions) && (
                                                        <Eye
                                                            className='mr-1'
                                                            color="#51bb25" size={18} style={{ cursor: "pointer" }}
                                                            onClick={() => viewForm(el)}
                                                        ></Eye>
                                                    )}
                                                    {checkPermissions([FUEL_STATION_UPDATE], permissions) && (
                                                        <Edit
                                                            className='mr-1'
                                                            color="#007bff" size={18} style={{ cursor: "pointer" }}
                                                            onClick={() => editForm(el)}
                                                        ></Edit>
                                                    )}

                                                    {checkPermissions([FUEL_STATION_DELETE], permissions) && (
                                                        <Delete
                                                            color="#ff3f70"
                                                            size={18}
                                                            style={{ cursor: "pointer" }}
                                                            onClick={() => deleteFunc(el.id)}
                                                        ></Delete>
                                                    )}
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
            <Modal isOpen={fuelStationCreateModal} toggle={fuelStationCreateModaltoggle} size="lg">
                <ModalHeader toggle={fuelStationCreateModaltoggle} className="text-center">
                    Create Fuel Station
                </ModalHeader>
                <ModalBody>
                    <FuelStationForm toggleModal={fuelStationCreateModaltoggle} fetchData={fetchData} perPage={perPage} type="create"></FuelStationForm>
                </ModalBody>
            </Modal>
            <Modal isOpen={fuelStationUpdateModal} toggle={fuelStationUpdateModaltoggle} size="lg">
                <ModalHeader toggle={fuelStationUpdateModaltoggle} className="text-center">
                    Update Fuel Station
                </ModalHeader>
                <ModalBody>
                    <FuelStationForm
                        toggleModal={fuelStationUpdateModaltoggle}
                        fetchData={fetchData}
                        perPage={perPage}
                        type="update"
                        fuelStationUpdateData={fuelStationUpdateData}></FuelStationForm>
                </ModalBody>
            </Modal>

            <Modal isOpen={fuelStationViewModal} toggle={fuelStationViewModaltoggle} size="lg">
                <ModalHeader toggle={fuelStationViewModaltoggle} className="text-center">
                    Fuel Station
                </ModalHeader>
                <ModalBody>
                    <FuelStationView
                        toggleModal={fuelStationViewModaltoggle}
                        fuelStationViewData={fuelStationViewData}>
                    </FuelStationView>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};

export default FuelStationList;