import React from 'react'
import {useDispatch} from "react-redux";
import {login} from "../features/user";

const Login = () => {

  const dispatch = useDispatch();
  
  return (
    <div>
      <button
      onClick={() => {
        dispatch(login( {  name: "Norman", age: 12, email: "norman@email.com" } ))
      }}
      >Login</button>
    </div>
  )
}

export default Login;
