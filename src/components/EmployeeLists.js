import React from 'react'
import Employes from './Employes';
import { useState , useEffect } from 'react';
import { Alert, Button, Form, FormControl, Modal, Table } from 'react-bootstrap';
import AddFormat from './AddForms';
import Pagination from './pagination';

 const EmployeeLists = ({filterbysearch , employes , handelDelet  , addEmploye, updateEmployee})=>{
 
const [show , setShow] = useState(false)

const handelShow = ()=> setShow(true);
const handelClose = ()=> setShow(false);

const [searchValue, setSearchValue] = useState()
  const onSearch = () =>{
   filterbysearch(searchValue)
  // setSearchValue('') //من اسوي بحث راح تختفي الكتابة داخل البتن
  }

  

  const [showAlert , setShowalert] = useState(false)//تنبيه عند اضافة الموظف
   // const handelshowAlert = () =>setShowalert(true)
    const handelshowAlert = () =>{
      setShowalert(true);
      setTimeout(() =>{
        setShowalert(false);
      }, 3000)
    }
  useEffect(() => {
    handelClose();
  
    return () => {
      handelshowAlert();
    }
  }, [employes])
  
  //pagination
  const[currentPage , setcurrentPage] = useState(1);
  const [employesPrepage] = useState(5) //عدد الموظفين الصفحه الواحدة

  const indexOflastEmployee = currentPage * employesPrepage ;
  const indexOffirstEmployee = indexOflastEmployee - employesPrepage ;
  const currentEmployee = employes.slice(indexOffirstEmployee , indexOflastEmployee);
  const totalPages = Math.ceil(employes.length / employesPrepage);
  return (
    <>
<div className="table-title">
	<div className="row">
		<div className="col-sm-3">
						<h2>Manage <b>Employees</b></h2>
					</div>
					<div className="col-sm-4">
						<Button onClick={handelShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE148;</i> <span>Add New Employeeo</span></Button>					
		      </div>
          <div className="col-sm-5">
          <Form className="d-flex" >
            <FormControl
              type="text"
              placeholder="Search"
              className="mx-2"
              aria-label="Search"
              onChange={(e)=> setSearchValue(e.target.value)}
              value={searchValue}
            />
            <Button onClick={onSearch} variant="success" style={{marginLeft:"-85px"}}>Search</Button>
          </Form>
          </div>
		</div>
</div>
<Alert show={showAlert} variant="success" onClose={() => setShowalert(false)} dismissible>
  Employees List Updated Successfuly!
</Alert>

<Table className="table table-striped table-hover">
				<thead>
					<tr>
            <th>images</th>
						<th>Name</th>
						<th>Email</th>
						<th>Address</th>
						<th>Phone</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
                    {
                        currentEmployee.map((item , index) => //.sort((a,b)=>(a.name < b.name ? -1 : 1))تعديل حسب الاحرف sort
                            <tr key={index}>
                                <Employes handelDelet={handelDelet}
                                 index={index}
                                 item={item}
                                 updateEmployee={updateEmployee} />
                                 
                            </tr>
                            
                            ) 
                    }
                
 </tbody>
</Table>
<Pagination  pages = {totalPages} setcurrentPage={setcurrentPage} currentEmployee={currentEmployee}/>
{/* اظهار قائمة اضافة موظف جديد */}
<Modal show={show} onHide={handelClose} >
<Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
  </Modal.Header>
         
<Modal.Body>
          <AddFormat  addEmploye={addEmploye}/>
</Modal.Body>

<Modal.Footer>
  <Button onClick={handelClose} variant="danger">
      Close Button
  </Button>
</Modal.Footer>
          
</Modal>
  </>
                   
  )
}
export default EmployeeLists;