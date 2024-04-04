import React from 'react'
import './Order.css'

export default function () {
  return (
    // <div>

<div className="container1">
  <div className="row1">
    <div className="col-12 col-md-10 hh-grayBox pt45 pb20">
      <div className="row justify-content-between">
        <div className="order-tracking completed">
          <span className="is-complete" />
          <p>
            Ordered
            <br />
            <span>Mon, June 24</span>
          </p>
        </div>
        <div className="order-tracking completed">
          <span className="is-complete" />
          <p>
            Shipped
            <br />
            <span>Tue, June 25</span>
          </p>
        </div>
        <div className="order-tracking">
          <span className="is-complete" />
          <p>
            Delivered
            <br />
            <span>Fri, June 28</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}
