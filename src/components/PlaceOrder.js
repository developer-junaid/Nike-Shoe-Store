import React from 'react';
import '../App.css';

function PlaceOrder(){
    return(
        <div className='placeOrder-container'>
            <h2 className='thankyou'>Thank you for your order</h2>
            <p>Your order number is <strong>#2001539</strong>. We have emailed your order confirmation, and will send you an update when your order has shipped.</p><br/>
            <h2 className='dont-worry'>Don't worry it's just a template !</h2><br/>
        </div>
    )
}

export default PlaceOrder;