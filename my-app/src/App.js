import Header from './components/Header/Header';
import Footer from './components/Footer/index';
import SideMenu from './components/SideMenu/SideMenu';
import {useState } from 'react';
import Routee from "./Routes/Routee"




function App() {
  const [isMenuVisible, setisMenuVisible] = useState(false)

  return (
    <div className="App" >
      <SideMenu isMenuVisible={isMenuVisible} setisMenuVisible={setisMenuVisible}/>
      {/* <Header isMenuVisible={isMenuVisible} setisMenuVisible={setisMenuVisible}/>        */}
      <Routee isMenuVisible={isMenuVisible} setisMenuVisible={setisMenuVisible}/>
      {/* <Footer quicklinks={quicklinks}/> */}
    </div>
    
  );
}

export default App;
