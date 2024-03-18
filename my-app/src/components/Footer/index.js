import React from 'react'
import styles from './Footer.module.scss'
import locfoot from "../Images/locfoot.png"
import callfoot from "../Images/callfoot.png"
const index = ({isLogin}) => {
  const quicklinks1 = ["Heim","Unsere Schule","Fotogallerie","Unsere Klassen","Uber Uns"]
const quicklinks2 = ["Aktuelles","Termine","Unsere Schule","Bildergalerie"]


const quicklinks  = (isLogin===false ? quicklinks1:quicklinks2);
  console.log(isLogin,"fromssdsdsd");
  return (
    <footer>
      <div className={styles.Mainfoot}>
        <div className={styles.footer}> 
          <div className={styles.box1}>
            <h2>In Kontakt kommen</h2>
            <div className={styles.boxnumber}>
               <img src={locfoot} className={styles.loc} alt='foot'/>
              <span className={styles.number}>{isLogin ===true ? "( 055 ) 1452-1519" : "02254 / 725280"}</span>
          </div>
            <div className={styles.boxaddress}>
              <img src={callfoot} className={styles.loc} alt='foot'/>

              <span className={styles.address}>{isLogin ===true ? "Vicolo Capela Sistina, 1452 Floren" : "Schulgasse 2,2483 Ebreichhsdorf"}</span>
            </div>
        </div>

          <div className={styles.box2}>
            <h2>{isLogin ? "Inhalt" : "Quicklinks"}</h2>
            <ul className={styles.list}>
              {quicklinks?.map(option=>(<li className={styles.listitem} key={option}>{option}</li>))}
              {/* <li className={styles.listitem}>Helm</li>
              <li className={styles.listitem}>Unsere Schule</li>
              <li className={styles.listitem}>Fotogallerie</li>
              <li className={styles.listitem}>Unsere Klassen</li>
              <li className={styles.listitem}>Uber Uns</li> */}
            </ul>
          </div>

          <div className={styles.box3}>
            <div className={styles}>
            <h2>{isLogin ? "Newsletter" : "Newsletter"}</h2>
            <form className={styles.form}>
              <input type='text' className={styles.inp} placeholder='lhr Name'/>
              <input type='text' className={styles.inp}  placeholder='Deine E-mail'/>
              <submit className={styles.submit}>Abonniere jetzt</submit>
            </form>
          </div>
          </div>
          </div>
        <div className={styles.bottom}>{isLogin ? "Kontakt | Sitemap | AGB" : "Impressum | Privatsphäre"}</div>
        </div>
    </footer>
  )
}

export default index