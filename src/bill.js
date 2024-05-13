import React from 'react';
import './bill.css';

function Bill({ item }) {
  return (
    <div>
      <header className="w3-container w3-xlarge w3-padding-24">
        <a href="#" className="w3-left w3-button w3-white">Mosaic Art Shop</a>
        <a href="#about" className="w3-right w3-button w3-white">Home</a>
      </header>

      <div className="row">
        <div className="col-75">
          <div className="container">
            <h2>Item Details</h2>
            <h3>{item.name}</h3>
            <p className="price">${item.price}</p>

            <h2>Billing Information</h2>
            <form action="/checkout" method="post">
              <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
              <input type="text" id="fname" name="firstname" placeholder="John M. Doe" required/>
              <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
              <input type="text" id="email" name="email" placeholder="john@example.com" required/>
              <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
              <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" required/>
              <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
              <input type="text" id="city" name="city" placeholder="New York" required/>

              <div className="row">
                <div className="col-50">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" name="state" placeholder="NY" required/>
                </div>
                <div className="col-50">
                  <label htmlFor="zip">Zip</label>
                  <input type="text" id="zip" name="zip" placeholder="10001" required/>
                </div>
              </div>

              <h2>Payment</h2>
              <label htmlFor="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John More Doe" required/>
              <label htmlFor="ccnum">Credit card number</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" required/>
              <label htmlFor="expmonth">Exp Month</label>
              <input type="text" id="expmonth" name="expmonth" placeholder="September" required/>
              <div className="row">
                <div className="col-50">
                  <label htmlFor="expyear">Exp Year</label>
                  <input type="text" id="expyear" name="expyear" placeholder="2018" required/>
                </div>
                <div className="col-50">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="352" required/>
                </div>
              </div>

              <input type="submit" value="Continue to checkout" className="btn"/>
            </form>
          </div>
        </div>
        <div className="col-25">
          <div className="container">
            <h4>Cart <span className="price" style={{color: "black"}}><i className="fa fa-shopping-cart"></i> <b>1</b></span></h4>
            <p>{item.name} <span className="price">${item.price}</span></p>
            <hr/>
            <p>Total <span className="price" style={{color: "black"}}><b>${item.price}</b></span></p>
          </div>
        </div>
      </div>
      <p style={{color: "#666", fontSize: "14px", textAlign: "center"}}>© 2024 Mosaic Art Shop. All rights reserved.</p>
    </div>
  );
}

export default Bill;
