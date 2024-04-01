import React, { useContext } from 'react';
import Layout from '../../Components/Layout/Layout';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrenyFormat";
import {link} from "react-router-dom";
import classes from "./cart.module.css";
import { Type } from '../../Utility/Action.type';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

function Cart() {
  const [{ basket, user },dispatch]= useContext(DataContext);
  const total=basket.reduce((amount,item)=>{
    return item.price * item.amount + amount
  },0)

  const increment=(item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }
  const decrement = (id) =>{
    dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }
  return (

    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length===0?(
            <p>Oops! No items in your cart</p>
          ) : (basket?.map((item,i) => {
             return <section className={classes.cart_product} key={i}>
               <ProductCard 
             key={i}
             product={item}
             renderDesc={true}
             flex={true}
             renderAdd={false}
             />
             <div className={classes.btn_container}>
              <button className={classes.btn} onClick={()=>increment(item)}>
                <MdOutlineKeyboardArrowUp/>
              </button>
              <span> {item.amount}</span>
              <button className={classes.btn} onClick={()=>decrement(item.id)}>
                <IoIosArrowDown/>
              </button>
             </div>
             </section>
         })
          )}
        </div>
        
  {basket?.length !==0 && (
<div className={classes.subtotal}>
<div>
<p>Subtotal ({basket?.length} items)</p>
<CurrencyFormat amount={total}/>
</div>

<span>
<input type="checkbox" />
<small>This order contains a gift</small>
</span>

<link to="/payment">continue to checkout</link>
</div>
        )}
  </section>
    </Layout>
  );
}
export default Cart;
