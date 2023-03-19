import { Button,Form } from 'react-bootstrap';
import { useState } from 'react';
import React from 'react'



 const EditeEmployes = ({ theEmployee , updateEmployee}) => {
    
    const id = theEmployee.id ;
    const [name , setName] = useState(theEmployee.name);
    const [email , setEmail] = useState(theEmployee.email);
    const [address , setAddress] = useState(theEmployee.address);
    const [phone , setPhone] = useState(theEmployee.phone);

   const dataup = {name , email , address , phone}
    const handelsubmit = (e) =>{
        e.preventDefault();
        updateEmployee(id , dataup)
    }
  return (
    
<Form onSubmit={handelsubmit}>
    <Form.Group>
        <Form.Control
        style={{margin:'10px'}}
            type="text"
            placeholder="Name *"
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setAddress(e.target.value)}
            rows={3} />
    </Form.Group>

    <Form.Group>
        <Form.Control
        style={{margin:'10px'}}
            type="text"
            placeholder="phone"
            name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
             />
    </Form.Group>

    <Button variant="outline-success" type="submit" block>
        Edite Employee
    </Button>
 </Form>
 
  )
}
export default EditeEmployes;