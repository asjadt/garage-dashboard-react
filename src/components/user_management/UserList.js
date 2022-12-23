import React, { Fragment, useEffect, useState } from 'react';
import BreadCrumb from '../../layout/Breadcrumb'
import {Container,Row,Col,Card,CardHeader,Table} from "reactstrap"
import { HorizontalBorders,VerticalBorders,BothBordeds,BorderlessTable,DefaultTableBorder,DoubleBorder,BorderBottomColor,DottedBorder,DashedBorder,SolidBorder} from "../../constant";
import { BACKEND_API } from '../../utils/backend';
import { apiClient } from '../../utils/apiClient';
import { css } from "@emotion/react";
import { ClipLoader } from 'react-spinners';
import setLinksView2 from '../../utils/pagination';

const UserList = () => {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const [perPage,setPerPage] = useState(9)
    const [from,setFrom] = useState(null)
    const [to,setTo] = useState(null)
    const [total,setTotal] = useState(null)
    const [lastPage,setLastPage] = useState(0)
    const [links,setLinks] = useState(null)
    const [ current_page, set_current_page] = useState(0)

    const fetchData = (urlOrPerPage) => {
        setLoading(true)
        setData(null)
        let url;
        if(typeof urlOrPerPage === "string"){
          url = urlOrPerPage.replace("http", "https");
        
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(el => {
                                            return (   <tr className="Dashed">
                                            <th scope="row">{el.id}</th>
                                            <td>{el.first_Name}</td>
                                            <td>{el.last_Name}</td>
                                            <td>{el.email}</td>
                                        </tr>)
                                        })}
                                     
                            
                                    </tbody>
                                </Table>
                            </div>
                            <Row>
                                <Col sm="3"></Col>
                                <Col sm="6" className='text-center'>
                                <nav aria-label="Page navigation example   ">
  <ul className="pagination  ">

    {
      links? links.map((el,index,arr) => setLinksView2(el,index,arr,fetchData,current_page,lastPage)):null
    }
    
  
   
  

  </ul>
</nav>
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