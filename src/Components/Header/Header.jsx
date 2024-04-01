
import React, { useContext } from "react";
import {Link} from "react-router-dom";
import classes from './header.module.css';
import { SlLocationPin } from "react-icons/sl";
import LowerHeader from "./LowerHeader";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";


const Header = () => {
 const[{user,basket},dispatch]=useContext(DataContext)
  return (
    <>
     <section className={classes.fixed}></section>
      <section>
        <header className={classes.header_container}>
          {/* Logo container */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Search container */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <BsSearch size={38} />
          </div>

          {/* Other section */}
          <section className={classes.order_container}>
            <Link to="/" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            <Link to={!user && "/Auth"}>
              <div>
              {
               user?(
                <>
               <p>Hello {user?.email.split("@")[0]} </p>
               <span onClick={()=>auth.signOut()}>SignOut</span>
                </>
               ):( 
                <>
                <p>Sign In</p>
                <span>Account & Lists</span>
                </>
               )
              }
              </div>
            </Link>

            <Link to="/Orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/Cart" className={classes.cart}>
              <BiCart size={55} />
              <span>{basket.length}</span>
            </Link>
          </section>
        </header>
      </section>
      <LowerHeader/>
    </>
  );
};
export default Header;
