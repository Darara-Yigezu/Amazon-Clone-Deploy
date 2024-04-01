import React, { useEffect, useState } from 'react'
import classes from "./results.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from 'react-router-dom';
import { productUrl } from '../../Api/EndPoint';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import ProductCard from '../../Components/Product/ProductCard';

const Results = () => {
  const[results,setResults]=useState([])
  const[isLoading,setisLoading]=useState(false)
  const {categoryName}=useParams()

  useEffect(()=>{
    axios.get(`${productUrl}/products/category${categoryName}`)
    .then((res)=>{
      setResults(res.data)
      setisLoading(false)
    }).catch((err)=>{
      console.log(err)
      setisLoading(false)
      
      
    })
  },[])

  return (
    <Layout>

<section>
  <h1 style={{ padding: "30px" }}>Results</h1>
  <p style={{ padding: "30px" }}>Category / {categoryName}</p>
  <hr />
  {
    isLoading?(<Loader/>):(<div className={classes.products_container}>
      {results?.map((product) => (
        <ProductCard 
        key={product.id} 
        product={product} 
        renderDesc={false}
        renderAdd={true}
        />
      ))}
    </div>)
  }
</section>
    </Layout>
  )
}
export default Results;