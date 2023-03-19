import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import EditeEmployes from './EditEmployee'
 const Employes = ({item ,index, handelDelet , updateEmployee}) => {
	const handelDelet1 = (index) => {
		handelDelet(index)
	}
	const [show , setShow] = useState(false)

const handelShow = ()=> setShow(true);
const handelClose = ()=> setShow(false);

  return (
<>
 <td><img alt='no' className='images' src={ item.img ? item.img : 'images/a2.jpg'}/></td>
{/* <td><img src={item.img} className='images' /> </td> */}
<td>{item.name}</td>
<td>{item.email}</td>
<td>{item.address}</td>
<td>{item.phone}</td>
	<td>
		
		<a onClick={handelShow} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit" style={{cursor:"pointer"}}>&#xE254;</i></a>
		<a onClick={ ()=> handelDelet1(index)} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete" style={{cursor:"pointer"}}>&#xE872;</i></a>
	</td>
	{/* اظهار قائمة اضافة موظف جديد */}
<Modal show={show} onHide={handelClose} >
<Modal.Header closeButton>
          <Modal.Title>Edite Employee</Modal.Title>
  </Modal.Header>
         
<Modal.Body>
          <EditeEmployes updateEmployee={updateEmployee} theEmployee={item}/>
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
export default Employes;