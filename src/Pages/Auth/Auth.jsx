import React,{useState,useContext} from 'react'
import classes from "./signUp.module.css";
import {Link, useNavigate} from "react-router-dom";
// import {Auth} from "../../Utility/firebase";
import { auth } from '../../Utility/firebase';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import{DataContext} from "../../Components/DataProvider/DataProvider";

function AuthPage() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState("");
  const[loading,setLoading] = useState({
    signIn:false,
    signUp: false
  })

  const[{user},dispatch]=useContext(DataContext)
  const navigate=useNavigate()

  const authHandler=async(e)=>{
    e.preventDefault()
    if(email.target.name=="signIn"){
      //firebase auth
      setLoading({...loading,signIn:true})
      signInWithEmailAndPassword(auth,email,password)
      .then((userInfo)=>{
        dispatch({
          type:"SET_USER",
          user:userInfo.user
        })
        setLoading({...loading,signIn:false});
           navigate("/")
      }).catch((err)=>{
        console.log(err.message)
        setError(err.message);
      })
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo)=>{
        setLoading({...loading,signUp: true})
        dispatch({
          type:"SET_USER",
          user:userInfo.user
        })
        setLoading({...loading,signUp: false})
        navigate("/")
      })
      .catch((err)=>{
        console.log(err.message)
        setError(err.message);
      })

   }
  }
  return (
    <section className={classes.login}>
       {/* {amazon logo} */}
         <Link to="/">
           <img src="https://pngimg.com/uploads/amazon/amazon_PNG7.png" alt=""/>
         </Link>
       {/* {form} */}
       <div className={classes.login_container}>
          <h1>Sign In</h1>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input value={email } onChange={ (e)=>setEmail(e.target.value)} type="email" id='email'/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input value={password } onChange={ (e)=>setPassword(e.target.value)} type="password" id='password'/>
            </div>
            <button type="submit" onClick={authHandler } name='SignIn' className={classes.signInButton}>
              {
               loading.signIn ?( <clipLoader color="#000" size={15}></clipLoader>):( 'SignIn')
              }
              
            </button>
          </form>
          {/* {agreement} */}
          <p>Do You have privilege to sign in?</p>
          {/* {Create Account} */}
          <button type='submit'name='signUp' onClick={authHandler} className={classes.login_regButton}>
          {
               loading.signUp ?( <clipLoader color="#000" size={15}></clipLoader>):(' Create Your Amazon Account')
              }
            </button>
          {error && <small style={{paddingTop:"5px",color:"red"}}>{error}</small>}
       </div>
    </section> 
  )
}
export default AuthPage;