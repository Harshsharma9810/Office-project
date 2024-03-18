import React from 'react'
import styles from "./BigCard.module.scss"
import bear from "../Images/bear.png"
import calendar from "../Images/calendar.png"
import globe from "../Images/globe.png"
import folder from "../Images/folder.png"
const BigCard = (props) => {
  return (
    <div className={styles.bigcard} onClick={()=>props?.cardclick()}>
         <div className={styles.card}>
        <img src={bear} className={styles.bear} alt='bear'/>
        <div className={styles.text}>
            <div className={styles.headingdiv}>
                <h2 className={styles.heading}>{props.title}</h2>
                <p className={styles.line}></p>

            </div>
            <div className={styles.site}>
                <div className={styles.date}>
                    <img src={globe} className={styles.calendar} alt='globe'/>
                    <a href='' className={styles.link}>Mittelschule Da Vinci</a>
                </div>
                <div className={styles.date}>
                    <img src={folder} className={styles.calendar} alt='folder'/>
                    <span>Ferien/Feiertage</span>
                </div>
                <div className={styles.date}>
                    <img src={calendar} className={styles.calendar} alt='calender'/>
                    <span>01.11.2023</span>
                </div>
            </div>
            <p className={styles.para}>Mit unseren ersten Klassen ging es zu Schulbeginn in den Tiergarten Schönbrunn. Dabei lernten die Schülerinnen und Schüler einiges über die Tierwelt unserer Erde....<span className={styles.btn}>Mehr erfahren &#187;</span></p>
           
        </div>
    </div>
    </div>
  )
}

export default BigCard