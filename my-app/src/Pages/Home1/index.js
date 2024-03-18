import React from 'react'
import styles from "./Body.module.scss"
import imgbox1 from "../../components/Images/imgbox1.png"
import imgbox2 from "../../components/Images/imgbox2.png"
import box3img1 from "../../components/Images/box3img1.png"
import box3img2 from "../../components/Images/box3img2.png"
import box3img3 from "../../components/Images/box3img3.png"
import Button from '../../components/Button/index'

const Home1 = ({props,isLogin,isMenuVisible}) => {

  const images = [
    {name:box3img1},
    {name:box3img2},
    {name:box3img3},

  ]

  return (
    <div  className={styles.body}>
      {/* Banner */}
        <div className={styles.box1}>
            <img  className={styles.img1} src={imgbox1} alt='logo1'/>
            <div className={styles.container}>
              <div className={styles.text}>
                <h1 className={styles.textheading}>Sed ut perspiciatis unde</h1>
                <p className={styles.textpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className={styles.box1btn}>
                  <Button  styleType={'Button'} btntext={"Entdecken Sie die Natur"}/>
                  {/* <Button className={styles.btn}/> */}
                  <Button styleType={'primaryButton1'} btntext={"Abenteuerlesung"}/>
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
          <Button Button btntext={"Erfahren Sie mehr"}/>
        </div>
      </div>

      <div className={styles.box3}>
        <div className={styles.heading}>
          <span className={styles.line3}></span>
          <h1 className={styles.heading3}>Neueste Fotogalerie</h1>
          <span className={styles.line3}></span>
        </div>
        <div className={styles.images}>
              {images.map((img) => (
                <img key={img.name} className={styles.img} src={img.name} alt="imglogo" />
              ))}        
            </div>
        <div className={styles.button3}>
        <Button Button btntext={"Mehr sehen >>"}/>
        </div>
      </div>
    </div>
  )
}

export default Home1