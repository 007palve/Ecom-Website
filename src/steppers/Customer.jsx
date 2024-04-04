import React, { useEffect, useState } from "react";
import "./Customer.css";
import { useSelector } from "react-redux";
import Shpping from "./Shpping";
import { Link, useNavigate } from "react-router-dom";
export default function Customer() {
    const getdata=useSelector((state)=>state.Reducers.cart)
    console.log(getdata)
  const[price,setprice]=useState(0)
const navigate =useNavigate()

    function Total(){
        let price=0
        getdata.map((val)=>{
          price=val.disprice*val.Quantity+price
        })
        // console.log(price)
        setprice(price)
      }
    
      useEffect(()=>{
        Total()
      },[Total])
  return (
    <div className="customermain">
      <>
        <header>
          <h3>Checkout</h3>
        </header>
        <main>
          <section className="checkout-form">
            <form action="#!" method="get">
              <h6>Contact information</h6>
              <div className="form-control">
                <label htmlFor="checkout-email">E-mail</label>
                <div>
                  <span className="fa fa-envelope" />
                  <input
                    type="email"
                    id="checkout-email"
                    name="checkout-email"
                    placeholder="Enter your email..."
                  />
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="checkout-phone">Phone</label>
                <div>
                  <span className="fa fa-phone" />
                  <input
                    type="tel"
                    name="checkout-phone"
                    id="checkout-phone"
                    placeholder="Enter you phone..."
                  />
                </div>
              </div>
              <br />
              <h6>Shipping address</h6>
              <div className="form-control">
                <label htmlFor="checkout-name">Full name</label>
                <div>
                  <span className="fa fa-user-circle" />
                  <input
                    type="text"
                    id="checkout-name"
                    name="checkout-name"
                    placeholder="Enter you name..."
                  />
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="checkout-address">Address</label>
                <div>
                  <span className="fa fa-home" />
                  <input
                    type="text"
                    name="checkout-address"
                    id="checkout-address"
                    placeholder="Your address..."
                  />
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="checkout-city">City</label>
                <div>
                  <span className="fa fa-building" />
                  <input
                    type="text"
                    name="checkout-city"
                    id="checkout-city"
                    placeholder="Your city..."
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-control">
                  <label htmlFor="checkout-country">Country</label>
                  <div>
                    <span className="fa fa-globe" />
                    <input
                      type="text"
                      name="checkout-country"
                      id="checkout-country"
                      placeholder="Your country..."
                      list="country-list"
                    />
                    <datalist id="country-list">
                      <option value="India" />
                      <option value="USA" />
                      <option value="Russia" />
                      <option value="Japan" />
                      <option value="Egypt" />
                    </datalist>
                  </div>
                </div>
                <br/>
                <br/>
               
                <div className="form-control">
                  <label htmlFor="checkout-postal">Postal code</label>
                  <div>
                    <span className="fa fa-archive" />
                    <input
                      type="numeric"
                      name="checkout-postal"
                      id="checkout-postal"
                      placeholder="Your postal code..."
                    />
                  </div>
                </div>
              </div>
              <div className="form-control checkbox-control">
                <input
                  type="checkbox"
                  name="checkout-checkbox"
                  id="checkout-checkbox"
                />
                <label htmlFor="checkout-checkbox">
                  Save this information for next time
                </label>
              </div>
              <div className="form-control-btn">
           
              </div>
            </form>
          </section>
          <section className="checkout-details">
            <div className="checkout-details-inner">
              <div className="checkout-lists">
              {
                        getdata.map((val)=>{
                            return(
                                <>
                                   <div className="card">
                    
                    <div className="card-image">
                      <img
                        src={val.imgurl}
                        alt=""
                      />
                    </div>
                    <div className="card-details">
                      <div className="card-name">{val.title}</div>
                      <div className="card-price">
                    ₹{val.OPrice} <span>₹{val.disprice}</span>
                      </div>
                      <div className="card-wheel">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                                </>
                            )
                        })
                    }
             
                
              </div>
              <div className="checkout-shipping">
                <h6>Shipping</h6>
                <p>For More than 2 products Free delivery</p>
               <br/>
               
                <p>Otherwise ₹19 charges</p>
              </div>
              <div className="checkout-total">
                <h6>Total</h6>
                <p>₹{price}</p>
              </div>
            </div>
          </section>
        </main>
      </>
    </div>
  );
}
