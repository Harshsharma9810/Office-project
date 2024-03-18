import React, { useEffect, useState } from 'react'
import {Route, Routes } from 'react-router-dom'
import { MdOutlineArrowDropDown } from "react-icons/md";
import Fotogallerie from '../components/Fotogallerie/Fotogallerie'
import Login from '../components/Login/Login'
import Footer from "../components/Footer/index"
import Home2 from '../Pages/Home2'
import Home1 from '../Pages/Home1'
import Header from '../components/Header/Header'
import ProtectedRoutes from './ProtectedRoutes';
import Aktuelles from '../Pages/Home2/Aktuelles/Aktuelles';
import Carddetail from '../Pages/Home2/Aktuelles/Carddetail/Carddetail';


const Routee = ({isMenuVisible,setisMenuVisible}) => {

  const options = ['Child 1', 'Child 2', 'Child 3'];

  const[isLogin,setIsLogin] = useState(false)

  useEffect(()=>{
     const temp= localStorage.getItem("isLogin") 
     if(temp==="true"){
      setIsLogin(true)
     }
  },[])




  const menuItems1 = [
    {text:"Heim",link:"/heim",dropdown:false},
    {text:"Unsere Schule",icon:<MdOutlineArrowDropDown/>,dropdown:true},
    {text:"Unsere Klassen",icon:<MdOutlineArrowDropDown/>,dropdown:true},
    {text:"Fotogallerie",dropdown:false,link:"/foto"},
    {text:"Uber uns",dropdown:false}
]

  const menuItems2 = [
    {text:"Aktuelles",dropdown:false,link:"/aktuelles"},
    {text:"Termine",dropdown:false},
    {text:"Unsere Schule",icon:<MdOutlineArrowDropDown/>,dropdown:true}, 
    {text:"Bildergalerie",dropdown:false},
]

const menuItems = (isLogin === false ? menuItems1 : menuItems2);

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <Header menuItems={menuItems} setIsLogin={setIsLogin} isLogin={isLogin} isMenuVisible={isMenuVisible} setisMenuVisible={setisMenuVisible} options={options}/>
            <Home1/>
            <Footer isLogin={isLogin}/>
          </>
        }
      />

      <Route 
        path="/foto" 
        element={
          <>
            <Header setIsLogin={setIsLogin} isLogin={isLogin} menuItems={menuItems} isMenuVisible={isMenuVisible} setisMenuVisible={setisMenuVisible} options={options}/>
            <Fotogallerie/>
            <Footer isLogin={isLogin}/>
          </>
        }
      />

      <Route 
        path="/login" 
        element={
          <>
            <Header setIsLogin={setIsLogin} isLogin={isLogin} isMenuVisible={isMenuVisible} setisMenuVisible={setisMenuVisible} menuItems={menuItems} options={options}/>
            <Login setIsLogin={setIsLogin} isLogin={isLogin} menuItems={menuItems}/>
            <Footer isLogin={isLogin}/>
          </>
        }
      />

      <Route 
        path="/home2" 
        element={
          <>
            <Header setIsLogin={setIsLogin} isLogin={isLogin} menuItems={menuItems} isMenuVisible={isMenuVisible} setisMenuVisible={setisMenuVisible} options={options}/>

            <ProtectedRoutes isLogin={isLogin}>
              <Home2 setIsLogin={setIsLogin} isLogin={isLogin} />
            </ProtectedRoutes>
            
            <Footer isLogin={isLogin}/>
          </>
        }
      />

      <Route 
        path="/aktuelles" 
        element={
          <>
            <Header setIsLogin={setIsLogin} isLogin={isLogin} isMenuVisible={isMenuVisible} options={options} setisMenuVisible={setisMenuVisible} menuItems={menuItems}/>
            <Aktuelles/>
            <Footer  isLogin={isLogin}/>
          </>
        }
      />

      <Route 
        path="/aktuelles/carddetail" 
        element={
          <>
            <Header setIsLogin={setIsLogin} isLogin={isLogin} isMenuVisible={isMenuVisible}         setisMenuVisible={setisMenuVisible} menuItems={menuItems} options={options}/>
            <Carddetail/>
            <Footer isLogin={isLogin}/>
          </>
        }
      />

  </Routes>    

  )
}

export default Routee

