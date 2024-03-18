import React from 'react'
import styles from './SideMenu.module.scss'
import InputBox from '../InputBox'
import Button from '../Button'
import logo1 from "../Images/logo1.png"
import { IoMdClose} from "react-icons/io";
import pin from "../Images/pin.png"
import  call from "../Images/call.png"


const SideMenu = ({isMenuVisible,setisMenuVisible}) => {
 
  return (
    <div className={`${styles.mobile} ${isMenuVisible && styles.open}`} >
      <ul>
        <div className={styles.boxleft} onClick={()=>setisMenuVisible(!isMenuVisible)}>
            <img className={styles.logo1} src={logo1} alt='logo'/>
            <div className={styles.close} >
             <IoMdClose size={40} color="white"/>
          </div>    
        </div>
        <li><InputBox placeholder={"Suche hier...."}/></li>
        <li>Heim</li>
        <li>Unsere Schule</li>
        <li>Unsere Klassen</li>
        <li>Fotogallerie</li>
        <li>Uber uns</li>
        <li><Button Button btntext={"Kontaktiere uns"}/></li>
        <li>
          <div className={styles.boxrb1}>
            <img className={styles.loc} src={pin} alt='pin'/>
              <span className={styles.address}>Schulgasse 2,2483 Ebreichhsdorf</span>
          </div>
        </li>
        <li>
          <div className={styles.boxrb1}>
              <img className={styles.loc} src={call} alt='call'/>
              <span className={styles.address1}>02254 / 725280</span>
          </div>
        </li>
      </ul>
  </div>
  )
}

export default SideMenu