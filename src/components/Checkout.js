import React, { useState } from 'react';
import '../App.css';
import { useForm } from 'react-hook-form'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";



function Checkout() {
  // Use Form
  const { register, handleSubmit } = useForm()

  // Handle Submit
  const onSubmit = (data) => {
    const { first_name, last_name, address1, address2, email, city, state, zip_code, country } = data;
    alert('Form has been submitted');
    document.querySelector('#reset').click();
  }


  // ...


  return (
    <div className='checkout-parent'>
      <div className='checkout-container'>
        <h1 className='checkout-font'>Checkout</h1>

        <form className='checkout-form' onSubmit={handleSubmit(onSubmit)} >
          <br />
          <fieldset>
            <legend>Shipping Address</legend>

            <input type='text' name='first_name' ref={register} required placeholder='First Name' />&nbsp;&nbsp;&nbsp;
            <input type='text' name='last_name' ref={register} required placeholder='Last Name' />
            <input type='text' name='address1' ref={register} required placeholder='Address Line 1' />
            <input type='text' name='address2' ref={register} placeholder='Address Line 2' />
            <input type='email' name='email' ref={register} required placeholder='Email' />
            <input type='text' name='city' ref={register} required placeholder='City' />&nbsp;&nbsp;&nbsp;
            <input type='text' name='state' ref={register} required placeholder='State/Province/Region' /><br />
            <input type='number' name='zip_code' ref={register} required placeholder='Zip Code' />&nbsp;&nbsp;&nbsp;
            <input type='text' name='country' ref={register} required placeholder='Country' /><br /><br />
            <FormControlLabel disabled control={<Checkbox checked name="payment_method" />} label="Payment is Cash on Delivery only" /><br />
            <Button variant="contained" type='submit' color="primary" >Submit</Button>
            <Button variant="contained" id='reset' type='reset' color="primary" >Reset</Button>

            {/* <Link id='link' to='/placeorder'>Go</Link> */}






          </fieldset>
        </form>
      </div>
    </div >
  )
}

export default Checkout;