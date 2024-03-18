import React from 'react'
import styles from './InputBox.module.scss'
import { FaSearch } from "react-icons/fa";

const InputBox = (props) => { 
  return (
    <div className={`${styles.inputBox1} ${styles[props?.styleType]}`}> 
      <div className={styles.icon}>
          <FaSearch className={styles.in1}/>
      </div>
        <input className={styles.in2} type="text" placeholder={props.placeholder} value={props.value} onChange={(e)=>props?.handleChange(e.target.value)}/>
    </div>
  )
}

export default InputBox