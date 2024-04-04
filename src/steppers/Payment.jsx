import React from "react";
import "./Payment.css";
import { Link } from "react-router-dom";
export default function Payment() {
  return (
    <div className="paymentmain">
      <>
        <title>Payment</title>
        <link rel="stylesheet" href="style.css" />
        <div>
          <h1 className="h1"> Make a payment</h1>
          <hr />
          <form action="#">
            <h3>Contact Information</h3>
            <label htmlFor="fname">Name: *</label>
            <input className="input"
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              required=""
            />
            <fieldset>
              <legend>Gender</legend>
              Male
              <input
                type="radio"
                id="male"
                name="gender"
                defaultValue="male"
                required=""
              />
              Female
              <input className="input"
                type="radio"
                id="female"
                name="gender"
                defaultValue="female"
                required=""
              />
              Others
              <input className="input"
                type="radio"
                id="other"
                name="gender"
                defaultValue="other"
                required=""
              />
            </fieldset>
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              placeholder="Enter your address here..."
              required=""
              defaultValue={""}
            />
            <label htmlFor="email">Email: *</label>
            <input className="input"
              type="email"
              id="email"
              name="email"
              placeholder="mail@email.com"
              required=""
            />
            <label htmlFor="pincode">Pincode: *</label>
            <input className="input"
              type="text"
              id="pincode"
              name="pincode"
              maxLength={6}
              placeholder={123456}
              required=""
            />
            <br />
            <h3>Payment Information</h3>
            <label htmlFor="cardtype">Card Type: *</label>
            <select id="cardtype" name="cardtype" required="">
              <option value="" selected="">
                --Select Card Type--
              </option>
              <option value="visa">Credit card</option>
              <option value="mastercard">Debit Card</option>
              <option value="rupay">RuPay</option>
              <option value="netbanking">Netbanking</option>
            </select>
            <label htmlFor="cardnumber">Card Number: *</label>
            <input className="input"
              type="text"
              id="cardnumber"
              name="cardnumber"
              maxLength={16}
              placeholder="1111-2222-3333-4444"
              required=""
            />
            <label htmlFor="expirationdate">Expiration Date: *</label>
            <input className="input"
              type="date" 
              id="expirationdate"
              name="expirationdate"
              required=""
            />
            <label htmlFor="cvv">CVV: *</label>
            <input className="input"
              type="text"
              id="cvv"
              name="cvv"
              placeholder={123}
              maxLength={3}
              required=""
            />
         {/* <Link to={"/subm"}>   <input className="input"  type="submit" defaultValue="Submit" /></Link> */}
          </form>
        </div>
      </>
    </div>
  );
}
