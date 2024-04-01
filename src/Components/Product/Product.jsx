import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from "./product.module.css";
import Loader from '../Loader/Loader';

function Product() {
    const [products, setProducts] = useState([]); // Initialize with an empty array
    const[isLoading,setisLoading]=useState(false )
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data);
                isLoading(false)
                console.log(products)
            })
            .catch((err) => {
                console.log(err);
                isLoading(false)
            });
    }, []);

    return (
        <>
        {
            isLoading?(<Loader/>):(  <section className={classes.Products_container}>
                {products?.map((singleProduct) => (
                    <ProductCard 
                    product={singleProduct} 
                    key={singleProduct.id} 
                    renderAdd={true}
                    />
                ))}
            </section>  )
        }
        </>
    );
}
export default Product;


