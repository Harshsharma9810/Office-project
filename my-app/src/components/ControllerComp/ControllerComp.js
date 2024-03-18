import React from 'react'
import styles from './Controller.module.scss'
import { Controller } from "react-hook-form";

const ControllerComp = ({control,placeholder,name,type}) => {
  
  return (
    <div className={styles.controllercomp}>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} className={styles.field} placeholder={placeholder} type={type} 
        />}
      />
      
    </div>
  )
}

export default ControllerComp
