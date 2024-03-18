import React from 'react'
import styles from "./Home2.module.scss"
import home2img from '../../components/Images/home2img.jpg'
import imgbox2 from '../../components/Images/imgbox2.png'
import Button from '../../components/Button/index'
import Card from '../../components/Card/Card'
import { useNavigate } from 'react-router-dom'


const Home2 = ({isLogin}) => {

  const cardarray = [
    {id:1,title:"Tiergarten Schönbrunn"},
    {id:2,title:"Camelus dromedarius"},
    {id:3,title:"Ursus maritimus"}
  ]
  const navigate = useNavigate()

  const cardclickfunction=()=>{
    navigate("/aktuelles/carddetail")
}
  const navigateToMore=()=>{
    navigate("/aktuelles")
}

  return (
    <div className={styles.home2}>
        <div className={styles.box1}>
            <img  className={styles.img1} src={home2img} alt='logo1'/>
            <div className={styles.container}>
              <div className={styles.text}>
                <h1 className={styles.textheading}>Mittelschule Da Vinci</h1>
                <div className={styles.box1btn}>
                    <div className={styles.darkbtn}>
                        <Button  styleType={'Button'} btntext={"Die Klassen"}/>
                         <Button  styleType={'Button'} btntext={"Die Lehrer"}/>
                    </div>
                    <div className={styles.lightbtn}>
                        <Button styleType={'primaryButton1'} btntext={"Alle Termine"}/>
                        <Button styleType={'primaryButton1'} btntext={"Bildergalerie"}/>
                    </div>
                </div>
            </div>
            </div>
        </div>

      <div className={styles.box2}>
        <div className={styles.imgcontainer}>
          <img className={styles.imgbox2} src={imgbox2} alt='box2img'/>
        </div>
        <div className={styles.textcontainer}>
          <div className={styles.headingcont}>
            <h1 className={styles.heading}>Über die Schule</h1>
            <span className={styles.line}></span>
          </div>
          <p  className={styles.text2}>Unsere Schule befindet sich im Herzen der Stadt. Ohne unser Schulgebäude verlassen zu müssen, können die Kinder nach Unterrichtsende den Hort der Gemeinde besuchen. Der Schulstandort bietet neben unserer Volksschule auch Zugang zur Mittelschule und zur Hans-Hofer-Schule. Alle drei Schulen teilen sich eine großzügig gestaltete Sportanlage.</p>
          <p className={styles.text2}>An der Volksschule Ebreichsdorf, die 1971 erbaut wurde, werden derzeit 13 Klassen geführt. Der Schulgarten wird gemeinsam mit den Kindern und unseren Schulpartnern seit 2021 in kleinen Schritten ökologisch neu gestaltet. Eine gelebte Vision für die Kinder unserer Kinder!</p>
          <div className={styles.box2btn}>
            <span className={styles.box2btnspan}>
            <Button Button btntext={"Erfahren Sie mehr"}/>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.box3}>
        <div className={styles.heading}>
          <span className={styles.line3}></span>
          <h1 className={styles.heading3}>Neuigkeiten </h1>
          <span className={styles.line3}></span>
        </div>
        <div className={styles.cards}>
        {
          cardarray.map((card) => (
            <span key={card.id} className={styles.card}>
              <Card title={card.title} cardclick={cardclickfunction} />
            </span>
          ))
        }
        </div>
        <div className={styles.button3}>
        <Button Button btntext={"Mehr sehen >>"} handelClick = {navigateToMore}/>
        </div>
      </div>
    </div>
  )
}

export default Home2