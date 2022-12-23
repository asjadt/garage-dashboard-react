import React from 'react'
import { PaginationItem } from 'reactstrap'

const setLinksView2 = (el,index,arr,fetchData,current_page,lastPage) => {
    if(el.label=="&laquo; Previous") {
        if(el.url) {
         return <PaginationItem key={index} className="page-item"><button className="page-link" onClick={() =>
          fetchData(el.url)} >Previous</button></PaginationItem>
        } 
        else {
         return <PaginationItem key={index} className="page-item disabled"><button className="page-link"  >Previous</button></PaginationItem>
        }
      }
    else if(el.label=="Next &raquo;") {
       if(el.url) {
        return <PaginationItem key={index} className="page-item"><button onClick={() =>
           fetchData(el.url)} className="page-link" >Next</button></PaginationItem>
       } 
       else {
        return <PaginationItem key={index} className="page-item disabled"><button className="page-link" >Next</button></PaginationItem>
       }
     } else {
       if(index === 1) {
         return   <React.Fragment key={index}><PaginationItem  className="page-item"><button className={`page-link  ${el.active && "text-dark"}`} onClick={() =>
           index == current_page?null:fetchData(el.url)} >
             1
             </button></PaginationItem>
             {
               current_page > 4?(<PaginationItem  className="page-item"><button className={`page-link `} >
                   ....
                   </button></PaginationItem>):null
             }
             </React.Fragment>
       }
      else if(index === lastPage && lastPage > 1  ) {
         return  <React.Fragment key={index}>
            {
               current_page < (lastPage - 3)?(<PaginationItem  className="page-item">
                 <button className={`page-link `} >
                   ....
                   </button></PaginationItem>):null
             }
            <PaginationItem key={index} className="page-item"><button className={`page-link  ${el.active && "text-dark"}`} onClick={() =>
           index == current_page?null:fetchData(el.url)} >
          {lastPage}
             </button></PaginationItem>
            
             </React.Fragment>
       }
       else {
    
         if(index == current_page + 1 || index == current_page + 2 || index == current_page - 1 || index == current_page - 2 || index == current_page){
           return   <PaginationItem key={index} className="page-item"><button className={`page-link  ${el.active && "text-dark"}`} onClick={() =>
             index == current_page?null:fetchData(el.url)} >
                    {el.label}
              </button></PaginationItem>
              
         }
         
   
   
       }
     
     }
}

export default setLinksView2
