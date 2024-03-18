import React from 'react'
import styles from "./Carddetail.module.scss"
import calendar from "../../../../components/Images/calendar.png"
import polygon from "../../../../components/Images/polygon.png"
import globe from "../../../../components/Images/globe.png"
import folder from "../../../../components/Images/folder.png"
import bear from "../../../../components/Images/bear.png"
import Button from '../../../../components/Button'
import { useLocation } from 'react-router-dom'

const Carddetail = ({title}) => {
    

  return (
    <div className={styles.carddetail}>
        <div className={styles.box1}>
            <div className={styles.topinfo}>
                <div className={styles.headingdiv}>
                    <h1 className={styles.heading}>Tiergarten Schönbrunn</h1>
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
            </div>
        </div>

        <div className={styles.box2}>
            <div className={styles.imgdiv}>
                <img src={bear} className={styles.bear} alt='bear'/>
            </div>
        </div>
        <div className={styles.box3}>
            <p className={styles.topparagraph}>
            Mit unseren ersten Klassen ging es zu Schulbeginn in den Tiergarten Schönbrunn. Dabei lernten die Schülerinnen und Schüler einiges über die Tierwelt unserer Erde.
            </p>

            <p className={styles.paragraphs}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>

            <p className={styles.paragraphs}>
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            </p>

            <p className={styles.paragraphs}>
            Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
            </p>

            <p className={styles.paragraphs} >
            Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut
            </p>
            <div style={{marginBottom:"50px"}}>
                <Button btntext={"Zuruck"} img={polygon} styleType={"primaryButton3"}  />
            </div>
        </div>


    </div>
  )
}

export default Carddetail