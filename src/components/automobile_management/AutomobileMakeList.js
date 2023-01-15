import React, { Fragment, useEffect, useState } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import { Container, Row, Col, Card, CardHeader, Table, Pagination, PaginationItem, Button, CardBody, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap"
import { HorizontalBorders, VerticalBorders, BothBordeds, BorderlessTable, DefaultTableBorder, DoubleBorder, BorderBottomColor, DottedBorder, DashedBorder, SolidBorder } from "../../constant";
import { BACKEND_API, http } from '../../utils/backend';
import { apiClient } from '../../utils/apiClient';
import { css } from "@emotion/react";
import { ClipLoader } from 'react-spinners';
import setLinksView from '../../utils/pagination';
import AutomobileCategoryForm from './forms/AutomobileCategoryForm';
import SweetAlert from 'sweetalert2'
import {
    Edit, Delete, Eye
} from 'react-feather';
import AutomobileCategoryView from './vews/AutomobileCategoryView';
import DatePicker from "react-datepicker";
import { AUTOMOBILE_CREATE, AUTOMOBILE_DELETE, AUTOMOBILE_UPDATE, AUTOMOBILE_VIEW } from '../../constant/permissions';
import Error401Unauthorized from '../../pages/errors/Error401Unauthorized';
import { checkPermissions } from '../../utils/helperFunctions';
import { useParams } from 'react-router';
import AutomobileMakeForm from './forms/AutomobileMakeForm';




const AutomobileMakeList = () => {
    let { id } = useParams();

let permissions = JSON.parse(localStorage.getItem("permissions"));

const [automobileCategory,setAutomobileCategory] = useState(null);

// get single data
useEffect(() => {
apiClient().get(`${BACKEND_API}/v1.0/automobile-categories/single/${id}`).then(response => {

setAutomobileCategory(response.data)
})
.catch(error => {

})
},[])



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
    const [startDate,setstartDate] = useState(new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1))
    const [endDate,setendDate] = useState(new Date())

   
    const setStartDate = date => {
        setstartDate(date);
      let startDataFinal =   new Date(date).toISOString().slice(0, 19).replace('T', ' ');
      let endDataFinal =   new Date(endDate).toISOString().slice(0, 19).replace('T', ' ');
         fetchData(`${BACKEND_API}/v1.0/automobile-makes/${id}/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)
      };
      const setEndDate = date => {
        setendDate(date);
        let startDataFinal =   new Date(startDate).toISOString().slice(0, 19).replace('T', ' ');
        let endDataFinal =   new Date(date).toISOString().slice(0, 19).replace('T', ' ');
           fetchData(`${BACKEND_API}/v1.0/automobile-makes/${id}/${perPage}?start_date=${startDataFinal}&&end_date=${endDataFinal}`)
       
       };
    // modal
    const [automobileMakeCreateModal, setAutomobileMakeCreateModal] = useState(false);
    const automobileMakeCreateModaltoggle = () => setAutomobileMakeCreateModal(!automobileMakeCreateModal);

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
                    apiClient().delete(`${BACKEND_API}/v1.0/automobile-makes/${id}`)
                        .then(response => {
                            if (response.status == 200 && response.data.ok) {
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
            url = `${BACKEND_API}/v1.0/automobile-makes/${id}/${urlOrPerPage}`
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
        fetchData(`${BACKEND_API}/v1.0/automobile-makes/${id}/${perPage}?search_key=${e.target.value}`, false)
    }

    useEffect(() => {
        fetchData(perPage,);
    }, [])


    const override = css`
    border-color: black;
  `;


  if(!permissions.includes(AUTOMOBILE_VIEW)) {
return <><Error401Unauthorized></Error401Unauthorized></>
  }

    return (
        <Fragment>

            <BreadCrumb parent="Home" subparent="Automobile Management / Make" title="Manage Automobile Make" />
            <Container fluid={true}>
                <Row className='mb-3'>
                    <Col sm="9">
                    </Col>
                    <Col sm="3" >
                    {checkPermissions([AUTOMOBILE_CREATE],permissions)?(<Button color="primary" onClick={automobileMakeCreateModaltoggle}>Create  Make of {automobileCategory?.name}</Button>):(null)} 
                        
                    </Col>

                </Row>

                <Row>

                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Automobile Make Management</h5><span> Manage your Automobile Make </span>
                            </CardHeader>
                            <Row>
                                <Col sm="12">  
                    <h5>Category Name:{automobileCategory?.name}</h5>
                                </Col>
                                
                            </Row>
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
                                            <th scope="col">{"category"}</th>
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

            {checkPermissions([AUTOMOBILE_VIEW],permissions)?(<Eye 
                                                    className='mr-1'
                                                    color="#51bb25" size={18} style={{ cursor: "pointer" }}
                                                        onClick={() => viewForm(el)}
                                                    ></Eye>):(null)} 
            {checkPermissions([AUTOMOBILE_UPDATE],permissions)?( <Edit 
                                                    className='mr-1'
                                                    color="#007bff" size={18} style={{ cursor: "pointer" }}
                                                        onClick={() => editForm(el)}
                                                    ></Edit>):(null)} 
                                                   
            {checkPermissions([AUTOMOBILE_DELETE],permissions)?(  <Delete color="#ff3f70" size={18} style={{ cursor: "pointer" }}
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

            <Modal isOpen={automobileMakeCreateModal} toggle={automobileMakeCreateModaltoggle} size="lg">
                <ModalHeader toggle={automobileMakeCreateModaltoggle} className="text-center">
                    Automobile Make
                </ModalHeader>
                <ModalBody>
                    <AutomobileMakeForm toggleModal={automobileMakeCreateModaltoggle} fetchData={fetchData} perPage={perPage} automobileCategory={automobileCategory} type="create"></AutomobileMakeForm>
                </ModalBody>
            </Modal>
            <Modal isOpen={automobileCategoryUpdateModal} toggle={automobileCategoryUpdateModaltoggle} size="lg">
                <ModalHeader toggle={automobileCategoryUpdateModaltoggle} className="text-center">
                    Automobile Make
                </ModalHeader>
                <ModalBody>
                    <AutomobileMakeForm toggleModal={automobileCategoryUpdateModaltoggle} fetchData={fetchData} perPage={perPage} type="update" 
                    automobileCategory={automobileCategory}
                    automobileCategoryUpdateData={automobileCategoryUpdateData}></AutomobileMakeForm>
                </ModalBody>
            </Modal>

            <Modal isOpen={automobileCategoryViewModal} toggle={automobileCategoryViewModaltoggle} size="lg">
                <ModalHeader toggle={automobileCategoryViewModaltoggle} className="text-center">
                    Automobile Make
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

export default AutomobileMakeList;