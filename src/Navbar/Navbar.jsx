import React, { useEffect, useState } from "react";
import "./Nav.css";
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '@mui/material/MenuItem';
import { Remove } from "../redux/Actions";

// import MailIcon from '@mui/icons-material/Mail';
export default function Navbar({search,setsearch}) {
  const getdata=useSelector((state)=>state.Reducers.cart)
  console.log(getdata)
  const [menu, setmenu] = useState(null);
  const open = Boolean(menu);
  const handleClick = (event) => {
    setmenu(event.currentTarget);
  };
  const handleClose = () => {
    setmenu(null);
  };
  const[price,setprice]=useState(0)
  console.log(price,"from usestate")
  const[hum,sethum]=useState(false)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  function del(id){
dispatch(Remove(id))
  }
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
  function test(){
    navigate("/")

    window.scrollTo({top:0})
  }

  return (
    <div className="nav">
      <div className="logo" onClick={test}>
      <h1>Logo</h1></div>
      <div >
        <ul className={hum?"menu menuopen":"menu"}>
          <li>
            <Link to="/mens" onClick={test}>Mens</Link>
          </li>
          <li>
            <Link to="/womens" onClick={test}>Womens</Link>
          </li>
          <li>
            <Link to="/Kids" onClick={test}>Kids</Link>
          </li>
        </ul>
      </div>
      <div>
    
        <input type="search" value={search} placeholder="search products...." onChange={(e)=>{setsearch(e.target.value)}}/>
      </div>
      <div className="ham" onClick={()=>sethum(!hum)}>{
   hum?
   <i className="fa-solid fa-circle-xmark"></i>
:
<i className="fa-solid fa-bars"></i>

      }
      </div>
      
      <div className="icons">
        <Badge badgeContent={getdata.length} color="primary">
        <i className="fa-solid fa-cart-shopping"  id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}></i>

          {/* <MailIcon color="action" /> */}
        </Badge>
        <Menu
        id="basic-menu"
        anchorEl={menu}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
    }}>
        {
          getdata.length?
          <div className="menuitems1">
<h3>Your cart</h3>
{
  getdata.map((val)=>{
    return(
      <div className="cartitems">
        <div className="cartimg">
        <Link onClick={handleClose} to={`/carddetails/${val.id}`}>

  <img src={val.imgurl}/>
  </Link>
  <br/>
  <br/>
  
  </div>

  <div className="carttitle">
    <p>{val.title}</p>
    <p>Price <del>₹{val.OPrice}</del> ₹{val.disprice}</p>
   <p>Quantity: {val.Quantity}</p>
   <p>Size: XL</p>
   <button  onClick={()=>del(val.id)} >Remove <i className="fa-solid fa-trash" style={{color:"red"}}></i></button>
  <Link onClick={handleClose} to={`/carddetails/${val.id}`}>  <button  style={{marginLeft:5}}>see <i className="fa-solid fa-eye" style={{color:"blue"}}></i></button></Link>
  </div>
  </div>
  
  
    )
  })

}
<h3 className="total">Total:₹{price}</h3>
<Link to={"/checkout"}><button  className="checkout"  onClick={handleClose}>Checkout</button></Link>

          </div>
          :
          <div className="menuitems">
          <div className="cross">
   <i class="fa-solid fa-circle-xmark" onClick={handleClose} ></i></div>

<h4>Your cart is empty</h4>
<img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"/>
<button ><Link  onClick={handleClose} to="/shop" style={{textDecoration:"none",listStyleType:"none",color:"black"}}>Shop Now</Link></button>
        </div>
        }
  
      </Menu>
      </div>
      </div>
   
  );
}
