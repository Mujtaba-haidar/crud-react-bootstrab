import React, { useState , useEffect } from 'react'

 const Pagination = ({pages , setcurrentPage , currentEmployee}) => {
     
    const numOfpages = [];

    for(let i = 1 ; i <= pages ; i++){
        numOfpages.push(i)
    }
    const [currentButton , setcurrentButton] = useState(1)

    useEffect(() => {
        setcurrentPage(currentButton)
    
     
      
    }, [currentButton , setcurrentPage])
    
  return (
<div className="clearfix">
	<div className="hint-text">Showing <b>{currentEmployee.length}</b> out of <b>{pages}</b> entries</div>
		<ul className="pagination">
            <li className=" {`${currentButton === 1 ? 'page-item disabled' : page-item }`} "><a href="#!"
              onClick={() =>setcurrentButton((prev) => prev === 1 ? prev : prev - 1 )}
             >Previous</a></li>

{
numOfpages.map((page , index) => {
  return (<li key={index} className="{`${currentButton === page ? 'page-item active' : page-item }`}"><a href="#!" className="page-link"
  onClick={() => setcurrentButton(page) }>
    {page}</a></li>)
})
}
         
            <li className=" {`${currentButton === numOfpages.length ? 'page-item disabled' : page-item }`} "><a href="#!"
              onClick={() =>setcurrentButton((next) => next === numOfpages.length ? next : next + 1 )}
             >Next</a></li>
		</ul>
</div>
  )
}
export default Pagination;

{/* <li className="page-item disabled"><a href="#!">Previous</a></li>
			<li className="page-item"><a href="#!" className="page-link">1</a></li>
			<li className="page-item"><a href="#!" className="page-link">2</a></li>
			<li className="page-item active"><a href="#!" className="page-link">3</a></li>
			<li className="page-item"><a href="#!" className="page-link">4</a></li>
			<li className="page-item"><a href="#!" className="page-link">5</a></li>
			<li className="page-item"><a href="#!" className="page-link">Next</a></li> */}