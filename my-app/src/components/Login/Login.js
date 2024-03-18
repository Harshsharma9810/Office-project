import React, {useState } from 'react'
import styles from './Login.module.scss'
import { useForm} from "react-hook-form";
import ControllerComp from '../ControllerComp/ControllerComp';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = ({isLogin,setIsLogin}) => {
  const [isSignInForm,setisSignInForm] = useState(true);
  
  const toggleSignInForm =()=>{
    setisSignInForm(!isSignInForm)
  }

  const login =()=>{
    navigate("/home2");
    setIsLogin(true)
    localStorage.setItem("isLogin",true);
  }
  
  const navigate = useNavigate();
  
  const schema = yup.object().shape({
    email: yup.string().email().required("Please Enter a Valid Email Adress"),
    password: yup.string().min(8).max(32).required(),
  });

  const { control,handleSubmit,formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
        if (isSignInForm) {
          // SIGN IN LOGIC
          const temp = JSON.parse(localStorage.getItem("formValues")) || [];
          const user = temp.find(
            (user) =>
              user.email === data.email && user.password === data.password
          );
      
          if (user) {
            console.log("User is authenticated");
            login();
          } 
          else {
            alert("User is not registered");
          }
        } 
        else {
          // SIGN UP LOGIC
          const temp = JSON.parse(localStorage.getItem("formValues")) || [];
          const userExists = temp.some((user) => user.email === data.email);
          // console.log(userExists)
          if (userExists) {
            alert("User already exists. Please sign in.");
          } else {
            localStorage.setItem("formValues", JSON.stringify([...temp, data]));
            alert("New User Signed up");
          }
        }
      };
      
  return (
    <div className={styles.login}>
      <form  className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.heading}>{isSignInForm ? "Sign In": "Sign Up"}</h1>

        {!isSignInForm && <ControllerComp name={"Firstname"} control={control} required placeholder='Full Name' type="text"/>}
        <p className={styles.error}>{errors.name?.message}</p>


          <ControllerComp name="email" control={control} required placeholder="Enter Email Address" type="email"/>
          <p className={styles.error}>{errors.email?.message}</p>
      
        <ControllerComp name="password" control={control} required placeholder="Enter Password" type="password"/>
        <p className={styles.error}>{errors.password?.message}</p>


        <button className={styles.btn} >{isSignInForm ? "Sign In":"Sign Up"}</button>
        <p className={styles.signup} onClick={toggleSignInForm}>{isSignInForm ? "New User ? Sign up now.":"Already registered ? Sign In now."}</p>
      </form>
    </div>
  )
}

export default Login










