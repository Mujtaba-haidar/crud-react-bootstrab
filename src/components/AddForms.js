import { Button,Form } from 'react-bootstrap';
import { useState } from 'react';
import React from 'react'



 const AddFormat = ({ addEmploye}) => {
    const [newEmployee , setnewEmployee] = useState({});
    const onInputChange = (e) =>{
        setnewEmployee({...newEmployee ,[e.target.name]: e.target.value})
    }
    const {name , email, address,phone} = newEmployee ;
    const handlSubmit = (e) => {
        e.preventDefault();
        addEmploye(newEmployee)
       
    }
  return (
    
<Form onSubmit={handlSubmit}>
    <Form.Group>
        <Form.Control
        style={{margin:'10px'}}
            type="text"
            placeholder="Name *"
            name='name'
            value={name}
            onChange = {(e) => onInputChange(e)}
            required
             />
    </Form.Group>

    <Form.Group>
        <Form.Control
        style={{margin:'10px'}}
            type="text"
            placeholder="Email *"
            name='email'
            value={email}
            onChange = {(e) => onInputChange(e) }
            required
             />
    </Form.Group>

    <Form.Group>
        <Form.Control
        style={{margin:'10px'}}
            as="textarea"
            placeholder="Address"
            name='address'
            value={address}
            onChange = {(e) => onInputChange(e) }
            rows={3} />
    </Form.Group>

    <Form.Group>
        <Form.Control
        style={{margin:'10px'}}
            type="text"
            placeholder="phone"
            name='phone'
            value={phone}
            onChange = {(e) => onInputChange(e) }
             />
    </Form.Group>

    <Button variant="outline-success" type="submit" block>
        Add New Employee
    </Button>
 </Form>
 
  )
}
export default AddFormat;