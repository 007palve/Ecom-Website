import React from 'react'
import "./Section1.css"
import { Link, useNavigate } from 'react-router-dom'
export default function Section1() {
    const navigate =useNavigate()
    function top(){
        scrollTo({top:0});
        navigate("/mens")
    }
  return (

    <div>
         <section id="collection">
        <div className="collections container">
            <div className="content">
                <img src="https://i.postimg.cc/Xqmwr12c/clothing.webp" alt="img" />
                <div className="img-content">
                    <p>Mens Cloths</p>
                    <Link to="/mens">  <button onClick={top}>SHOP NOW</button></Link>
                </div>
            </div>
            <div className="content2">
                <img src="https://m.media-amazon.com/images/I/71WZOQ2gUiL._SY741_.jpg" alt="img" />
                <div className="img-content2">
                    <p>Womens Cloths</p>
                    <Link to="/womens"> <button  onClick={top}>SHOP NOW</button></Link>
                </div>
            </div>
            <div className="content3">
                <img src="http://dress-trends.com/wp-content/uploads/2016/11/%D0%9Aids-fashion-trends-and-tendencies-2017-kids-clothes-kids-wear-4.jpg" alt="img" />
                <div className="img-content3">
                    <p>Kids cloths</p>
                    <Link to="/kids"> <button  onClick={top}>SHOP NOW</button></Link>
                </div>
            </div>
        </div>
        </section>
    </div>
    
  )
}
