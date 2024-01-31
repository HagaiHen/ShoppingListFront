import React, { useState, useEffect } from "react";
import { Container } from '../styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';
import TextField from '@mui/material/TextField';
import { createOrder } from '../controllers/OrdersController';
import Order from '../Order';

function CompletePage (props) {

  const [_name, setName] = useState('');
  const [_email, setEmail] = useState('');
  const [_address, setAddress] = useState('');
  const [order, setOrder] = useState(new Order());

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
  }, [_name]);
  useEffect(() => {
  }, [_email]);
  useEffect(() => {
  }, [_address]);

  const handleConfirmClick = async () => {
    if (_name.length > 0 && _address.length > 0 && _email.length > 0 && props.products.length > 0) {
      order._name = _name;
      order.address = _address;
      order.email = _email;
      order.details = props.products;
      const _order = await createOrder(order);
      props.navigate("Home");
    } else {
      alert("Please check fields");
    }
  }

  return (
    <Container>
        <TextField 
        style={{width: '300px', marginLeft: '10px'}}
        type="text"
        value={_name}
        onChange={handleNameChange}
        placeholder="Full Name..."/>
        <TextField 
        style={{width: '300px', marginLeft: '10px'}}
        type="text"
        value={_address}
        onChange={handleAddressChange}
        placeholder="Address..."/>
        <TextField 
        style={{width: '300px', marginLeft: '10px'}}
        type="email"
        value={_email}
        onChange={handleEmailChange}
        placeholder="Email..."/>
        <Button style={{height: '50px', marginLeft: '10px',}} onClick={() => handleConfirmClick()}>Confirm</Button>
    </Container>
    );
}

export default CompletePage;
