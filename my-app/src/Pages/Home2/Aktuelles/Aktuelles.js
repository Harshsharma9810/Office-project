import React, { useState } from 'react'
import styles from "./Aktuelles.module.scss"
import Button from '../../../components/Button'
import darrow from "../../../components/Images/darrow.png"
import search2 from "../../../components/Images/search2.png"
import BigCard from '../../../components/BigCard/BigCard'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import InputBox from '../../../components/InputBox'
  
const cardtitle = [
    {id:1,title:"Tiergarten Schönbrunn"},
    {id:2,title:"Camelus dromedarius"},
    {id:3,title:"Ursus maritimus"},
    {id:4,title:"Antilope cervicapra"},
    {id:5,title:"Boiga irregularis"},
    {id:6,title:"Felis catus"},
    {id:7,title:"Blattodea"},
    {id:8,title:" TierCrocodylus palustris"},
]

const Aktuelles = ({title}) => {
    const navigate = useNavigate()
    const [isOpen,setIsOpen] = useState(false)
    const options = ['Child 1','Child 2','Child 3']
    const [searchText,setsearchText] = useState("")
    const [filteredCard, setFilteredCard] = useState(cardtitle);

    const filterFunction = () => {
        const filteredText = searchText.trim().replace(/\s+/g, ' ');
        const filteredCards = cardtitle.filter(card => card.title.toLowerCase().includes(filteredText.toLowerCase()));   
        if(filteredCards.length>0 || filteredText ){
            setFilteredCard(filteredCards)
        }
        else{
            setFilteredCard(cardtitle)
        }
    };

    const cardclickfunction=(title)=>{
        navigate("/aktuelles/carddetail")
    }

  return (
    <div className={styles.aktu}>
        
        <div className={styles.headingdiv}>
            <h1 className={styles.heading}>Aktuelles</h1>
            <p className={styles.line}></p>
        </div>

        <div className={styles.box2}>
                <div className={styles.dropdown}>
                    <div className={styles.droptext} onClick={()=>setIsOpen(!isOpen)}>
                        <span>Kategorie auswählen</span>
                        <img src={darrow} className={styles.dropimage} alt='drop'/>
                    </div>
                    {
                        isOpen && (
                            <div className={styles.dropdownmenu}>
                                {options.map(option=>(<li className={styles.droplist} key={option}>{option}</li>))}
                            </div>
                        )
                    }
                </div>

                <div className={styles.search}>   
                    <InputBox styleType={'inputBox2'} placeholder={"Suchbegriff"} value={searchText} handleChange={(value)=>setsearchText(value.trimStart())}/>
                    <div className={styles.searchbtn}>
                        <Button styleType={'primaryButton2'} btntext={"Suchen"} handelClick={filterFunction}/>
                    </div> 

                </div>

        </div>
        <div className={styles.cards}> 

        {
            filteredCard.length > 0 ?
                filteredCard.map(card => (
                    <BigCard key={card.id} title={card.title} cardclick={cardclickfunction}/>)) 
                    :
                <div className={styles.notfound}>
                No Data Found
            </div> 
            }
        </div>
    </div>
  )
}

export default Aktuelles