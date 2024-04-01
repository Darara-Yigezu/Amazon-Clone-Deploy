import React,{useContext,useEffect} from "react";
import Routing from "./Router.jsx";
import { DataContext } from "./Components/DataProvider/DataProvider.js";
import { Type } from "./Utility/Action.type.js";
import { auth } from "./Utility/firebase.js";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  const[{user},dispatch]=useContext(DataContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({Type:Type.SET_USER,
          user:authUser
        });
      }
      else{
        dispatch({Type:Type.SET_USER,
          user:null
        });
      }
    });

  },[])
  
  return <Router />
  
}
export default App;


