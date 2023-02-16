import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button, Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import SweetAlert from 'sweetalert2';
import { Loading } from "../../../constant";
import { apiClient } from "../../../utils/apiClient";
import { BACKEND_API } from "../../../utils/backend";

export default function EmailTemplateUpdate() {
  const { id } = useParams();
  const [htmls, setHtmls] = useState('');
  const [types, setTypes] = useState([]);
  const [singleTypes, setSingleTypes] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory()


  useEffect(() => {
    setIsLoading(true)
    apiClient().get(`${BACKEND_API}/v1.0/email-templates/single/${id}`).then(res => {
      apiClient().get(`${BACKEND_API}/v1.0/email-template-types`).then(res2 => {
        setTypes(res2.data)
        setHtmls(JSON.parse(res.data.template))
        setSingleTypes(res.data.type)
        setIsLoading(false)
        document.getElementById('preview').innerHTML = JSON.parse(res.data.template)
      })
    })
  }, [id])

  const handleChangeType = (e) => {
    setSingleTypes(e.target.value)
  }
  
  const handleChangeHtmlEditor = (e) => {
    setHtmls(e.target.value)
    console.log(e.target.value)
    document.getElementById('preview').innerHTML = e.target.value
  }

  const handleSubmit = () => {
    console.log({
      
      type: singleTypes,
      template: htmls,
    })
    apiClient().post(`${BACKEND_API}/v1.0/email-templates`, {
      type: singleTypes,
      template: JSON.stringify(htmls),
      is_active:1,
    }).then(res => {
      SweetAlert.fire({ title: "Success", text: "Template Created Successfully!", icon: "success" });
      history.push('/email_template/list')
    }).catch(error => {
      setIsLoading(false)
      console.log("error", error.response)
      if (error.response?.status === 422) {
        SweetAlert.fire({ title: error.response.data.message, text: "Please Try Again", icon: "warning" });
      }
      else if (error.response?.status === 401) {
        SweetAlert.fire({ title: error.response.data.message, text: "Hello!!! You do not have permission.", icon: "warning" });
      }
      else {
        SweetAlert.fire({ title: "something went wrong!!", text: "Please Try Again", icon: "warning" });
      }
    })
  }
  
  return (
    <Container fluid={true}>
      {isLoading ?
        <Loading />
        :
        <>
          <Row>
            <Col md='6'>
              <div className="w-100 d-flex justify-content-start align-items-center flex-direction-column">
                <div>
                  <h3 className="text-weight-bold">Update Template</h3>
                  <p>Update your email template</p>
                </div>
              </div>
            </Col>
            <Col md='6' className="d-flex justify-content-end">
              <div>
                <Button onClick={handleSubmit} color="primary">Update</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm='12' className="my-2">
              <Row>
                <Col sm='6'>
                  <FormGroup>
                    <Label htmlFor="types">Select Type :</Label>
                    <Input onChange={handleChangeType} id="types" type="select" name="select" className="form-control digits">
                      {types?.map((type, i) => (
                        <option data-testid={`email-emplate-${type}`} key={i} value={type}>{type}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="">
            <Col sm='6'>
              <Label htmlFor="htmlEditor" className="text-center w-100 h5">Template Editor</Label>
              <div id="editor" className="vh-100 w-100">
                <textarea value={htmls} onChange={e => handleChangeHtmlEditor(e)} name="html-editor" id="htmlEditor" className="w-100 h-100  border border-primary"></textarea>
              </div>
            </Col>
            <Col sm='6'>
              <Label htmlFor="preview" className="text-center w-100 h5">Preview</Label>
              <div className="html-editor vh-100 w-100 border border-primary">
                <div id="preview" className=""></div>
              </div>
            </Col>
          </Row>
        </>
      }
    </Container>
  );
}
