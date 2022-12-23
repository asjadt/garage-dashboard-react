import React from 'react'

const setLinksView2 = (el,index,arr,fetchData,current_page,lastPage) => {
    if(el.label=="&laquo; Previous") {
        if(el.url) {
         return <li key={index} className="page-item"><button className="page-link" onClick={() =>
          fetchData(el.url)} >Previous</button></li>
        } 
        else {
         return <li key={index} className="page-item disabled"><button className="page-link"  >Previous</button></li>
        }
      }
    else if(el.label=="Next &raquo;") {
       if(el.url) {
        return <li key={index} className="page-item"><button onClick={() =>
           fetchData(el.url)} className="page-link" >Next</button></li>
       } 
       else {
        return <li key={index} className="page-item disabled"><button className="page-link" >Next</button></li>
       }
     } else {
       if(index === 1) {
         return   <React.Fragment key={index}><li  className="page-item"><button className={`page-link  ${el.active && "text-dark"}`} onClick={() =>
           index == current_page?null:fetchData(el.url)} >
             1
             </button></li>
             {
               current_page > 4?(<li  className="page-item"><button className={`page-link `} >
                   ....
                   </button></li>):null
             }
             </React.Fragment>
       }
      else if(index === lastPage && lastPage > 1  ) {
         return  <React.Fragment key={index}>
            {
               current_page < (lastPage - 3)?(<li  className="page-item">
                 <button className={`page-link `} >
                   ....
                   </button></li>):null
             }
            <li key={index} className="page-item"><button className={`page-link  ${el.active && "text-dark"}`} onClick={() =>
           index == current_page?null:fetchData(el.url)} >
          {lastPage}
             </button></li>
            
             </React.Fragment>
       }
       else {
    
         if(index == current_page + 1 || index == current_page + 2 || index == current_page - 1 || index == current_page - 2 || index == current_page){
           return   <li key={index} className="page-item"><button className={`page-link  ${el.active && "text-dark"}`} onClick={() =>
             index == current_page?null:fetchData(el.url)} >
                    {el.label}
              </button></li>
              
         }
         
   
   
       }
     
     }
}

export default setLinksView2
