import React, { useEffect } from "react";
import { useParams } from "react-router";
import { apiClient } from "../../../utils/apiClient";
import { BACKEND_API } from "../../../utils/backend";

export default function TemplateView({data}) {
  console.log({data})
  const { id } = useParams()
  useEffect(() => {
    apiClient().get(`${BACKEND_API}/v1.0/email-templates/single/${data.id}`).then(res => {
      document.getElementById('preview').innerHTML = JSON.parse(res.data.template)
    })
  }, [id])
  return <div>
    <div id="preview">
    </div>
  </div>;
}
