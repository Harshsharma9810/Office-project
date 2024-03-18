import React from 'react'
import styles from "./Card.module.scss"
import bear from "../Images/bear.png"
import calendar from "../Images/calendar.png"

const Card = (props) => {
  return (
    <div className={styles.card} onClick={()=>props?.cardclick()} >
        <img src={bear} className={styles.bear} alt='bear'/>
        <div className={styles.text}>
            <h2 className={styles.heading}>{props.title}</h2>
            {/* <h2 className={styles.heading}>Tiergarten Schönbrunn</h2> */}
            <div className={styles.date}>
                <img src={calendar} className={styles.calendar} alt='calender'/>
                <span>01.11.2023</span>
            </div>
            <p className={styles.para}>Mit unseren ersten Klassen ging es zu Schulbeginn in den Tiergarten Schönbrunn. Dabei lernten die Schülerinnen und Schüler einiges über die Tierwelt unserer Erde.</p>
            <p className={styles.btn}>Mehr erfahren &#187;</p>
        </div>
    </div>
  )
}

export default Card