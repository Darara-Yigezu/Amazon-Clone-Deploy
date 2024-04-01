import React, { useContext } from 'react';
import CurrencyFormat from "../CurrencyFormat/CurrenyFormat"; 
import Rating from "@mui/material/Rating";
import classes from "./product.module.css";
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/Action.type';

function ProductCard({product,flex,renderDesc,renderAdd}) { 
    const { image, title,id, rating, price,decription } = product; 
    
    const[state,dispatch]=useContext(DataContext)

    const addToCart=()=>{
        dispatch({
            type:Type.ADD_TO_BASKET,
            item:{
                image, title,id, rating, price,decription  
            }
        })
    }

    return (
        <div className={`${classes.card_container}${flex?classes.product_flexed: ''}`}>
            <Link to={`/product${id}`}>
                <img src={image} alt="" className={classes.img_container} />
            </Link>
            <div>
                <h3>{title}</h3>
                {renderDesc && <div style={{maxWidth:"500px"}}>{decription}</div>}
                <div className={classes.rating}>
                    {/* rating */}
                    <Rating value={rating?.rate} precision={0.1} />
                    {/* count */}
                    <small>{rating?.amount}</small>
                </div>
                <div>
                    {/* price */}
                    <CurrencyFormat amount={price} /> 
                </div>
                {
                    renderAdd && <button className={classes.button}onClick={addToCart}>
                    add to cart</button>
                }
               
            </div>
        </div>
    );
}
export default ProductCard;
