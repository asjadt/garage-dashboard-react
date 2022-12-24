import React, { Fragment, useEffect, useState } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import {Container,Row,Col,Card,CardHeader,Table, Pagination, PaginationItem, Button, CardBody, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from "reactstrap"
import { HorizontalBorders,VerticalBorders,BothBordeds,BorderlessTable,DefaultTableBorder,DoubleBorder,BorderBottomColor,DottedBorder,DashedBorder,SolidBorder} from "../../constant";
import { BACKEND_API, http } from '../../utils/backend';
import { apiClient } from '../../utils/apiClient';
import { css } from "@emotion/react";
import { ClipLoader } from 'react-spinners';
import setLinksView2 from '../../utils/pagination';
import UserForm from './forms/UserForm';
import SweetAlert from 'sweetalert2'
import {
Edit,Delete
} from 'react-feather';

const UserList = () => {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const [perPage,setPerPage] = useState(9)
    const [from,setFrom] = useState(null)
    const [to,setTo] = useState(null)
    const [total,setTotal] = useState(null)
    const [lastPage,setLastPage] = useState(0)
    const [links,setLinks] = useState(null)
    const [ current_page, set_current_page] = useState(0);
 // modal
 const [userCreateModal, setUserCreateModal] = useState(false);
 const userCreateModaltoggle = () => setUserCreateModal(!userCreateModal);

 const [userUpdateData,setUserUpdateData] = useState(null);
 const [userUpdateModal, setUserUpdateModal] = useState(false);
 const userUpdateModaltoggle = () => setUserUpdateModal(!userUpdateModal);
 const editForm = (el) => {
    userUpdateModaltoggle()
    setUserUpdateData(el)
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
            SweetAlert.fire(
            'Deleted!',
            'User has been deleted.',
            'success'
          )
        }
        else{
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

    const fetchData = (urlOrPerPage,useLoading=true) => {
        if(useLoading) {
            setLoading(true)
        }
      
        //  setData(null)
        let url;
        if(typeof urlOrPerPage === "string"){
          url = urlOrPerPage.replace("http", http);
        
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
    const [searchKey,setSearchKey] = useState("");
    const searchFunc = (e) => {
        setSearchKey(e.target.value);
        fetchData(`${BACKEND_API}/v1.0/users/${perPage}?search_key=${e.target.value}`,false)
    }
  
    useEffect(() => {
        fetchData(perPage,);
    },[])


   if(!data?.length) {
    const override = css`
    border-color: black;
  `;
return <div   className="d-flex align-items-center justify-content-center">
    {
        loading?<ClipLoader  loading={loading} css={override} size={150} >loading</ClipLoader>:<h3 className="display-3" >
        No Data to show 
        </h3>
    } 

</div>
    }
   

    return (
        <Fragment>
            
            <BreadCrumb parent="Home" subparent="User Management / users" title="Manage Users"/>
            <Container fluid={true}>
               <Row className='mb-3'>
                <Col sm="9">
                </Col>
                <Col sm="3" >
                <Button color="primary" onClick={userCreateModaltoggle}>Create User</Button>
                </Col>
              
               </Row>

                <Row>
              
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                            <h5>User Management</h5><span> Manage your Users </span>
                            </CardHeader>
                            <Row>
                            <Col sm="3">
                                </Col>
                                <Col sm="6">
                                <CardHeader>
                                <Form className="search-form">
                  <FormGroup className="m-0">
                    <Label className="sr-only">Search</Label>
                    <Input className="form-control-plaintext" type="search" placeholder="Search.." onChange={searchFunc} value={searchKey} autoFocus/>
                  </FormGroup>
                  
                </Form>
                
              </CardHeader>
                                
                                </Col>
                            </Row>
                          
                            <div className="table-responsive">
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
                                        {data.map(el => {
                                            return (   <tr className="Dashed" key={el.id}>
                                            <th scope="row">{el.id}</th>
                                            <td>{el.first_Name}</td>
                                            <td>{el.last_Name}</td>
                                            <td>{el.email}</td>
                                            <td>{el.phone}</td>
                                            <td>{el.roles.map(el2 => {
                                                return <span>{el2.name} </span>
                                            })}</td>
                                            <td>
                                                <Edit color="#007bff" size={20} style={{cursor:"pointer"}}
                                                onClick={() => editForm(el)}
                                                ></Edit>
                                                <Delete color="#ff3f70" size={20} style={{cursor:"pointer"}}
                                                onClick={() => deleteFunc(el.id)}></Delete>
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
      links? links.map((el,index,arr) => setLinksView2(el,index,arr,fetchData,current_page,lastPage)):null
    }
    
    </Pagination>
   
  


                                </Col>
                               
                            </Row>
                          
         
                        </Card>
                    </Col>
                  
                </Row>
            </Container>

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
        </Fragment>
    );
};

export default UserList;