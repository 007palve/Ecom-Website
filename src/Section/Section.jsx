import React from 'react'
import './Section.css'
import { Link } from 'react-router-dom'
export default function Section() {
  return (
    
    <div>
    <section id="home">
        <div className="home_page ">
            <div className="home_img ">
                <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt="img "/>
            </div>
            <div className="home_txt ">
                <p className="collectio ">SUMMER COLLECTION</p>
                <h2>FALL - WINTER<br/>Collection 2023</h2>
                <div className="home_label ">
                    <p>A specialist label creating luxury essentials. Ethically crafted<br/>with an unwavering commitment to exceptional quality.</p>
                </div>
                <button><Link to="/shop">SHOP NOW</Link><i className="fa-solid fa-arrow-right"></i></button>
                <div className="home_social_icons">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    </section>

   </div>
  )
}
