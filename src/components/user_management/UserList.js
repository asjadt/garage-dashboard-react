import React, { Fragment, useEffect, useState } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import {Container,Row,Col,Card,CardHeader,Table, Pagination, PaginationItem, Button, CardBody, Modal, ModalHeader, ModalBody} from "reactstrap"
import { HorizontalBorders,VerticalBorders,BothBordeds,BorderlessTable,DefaultTableBorder,DoubleBorder,BorderBottomColor,DottedBorder,DashedBorder,SolidBorder} from "../../constant";
import { BACKEND_API, http } from '../../utils/backend';
import { apiClient } from '../../utils/apiClient';
import { css } from "@emotion/react";
import { ClipLoader } from 'react-spinners';
import setLinksView2 from '../../utils/pagination';
import UserForm from './forms/UserForm';

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
 const [Large, setLarge] = useState(false);
 const LargeModaltoggle = () => setLarge(!Large);

 // end modal
 const handlePerPage = (e) => {
const newValue = parseInt(e.target.value);
setPerPage(newValue)
console.log(newValue)
fetchData(newValue)
  }

    const fetchData = (urlOrPerPage) => {
        setLoading(true)
        setData(null)
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
  
    useEffect(() => {
        fetchData(perPage);
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
                <Button color="primary" onClick={LargeModaltoggle}>Create User</Button>
                </Col>
                <Col sm="12">
                    <Modal isOpen={Large} toggle={LargeModaltoggle} size="lg">
                      <ModalHeader toggle={LargeModaltoggle} className="text-center">
                       User
                      </ModalHeader>
                      <ModalBody>
                      <UserForm toggleModal={LargeModaltoggle} fetchData={fetchData} perPage={perPage}></UserForm>
                      </ModalBody>
                    </Modal>
            
                  </Col> 
               </Row>

                <Row>
              
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                            <h5>User Management</h5><span> Manage your Users </span>
                            </CardHeader>
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
        </Fragment>
    );
};

export default UserList;