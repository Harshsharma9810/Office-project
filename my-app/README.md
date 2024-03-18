<!-- WITHOUT DATA NOT FOUND FUNCTION

import React, { useState } from 'react'
import styles from "./Aktuelles.module.scss"
import Button from '../../../components/Button'
import darrow from "../../../components/Images/darrow.png"
import search2 from "../../../components/Images/search2.png"
import InputBox from '../../../components/InputBox'
import BigCard from '../../../components/BigCard/BigCard'

const Aktuelles = ({title}) => {
    const [isOpen,setIsOpen] = useState(false)
    const options = ['Child 1','Child 2','Child 3']
    const [searchText,setsearchText] = useState("")
    const [filteredCard, setFilteredCard] = useState([]);
    const [dataNotFound, setDataNotFound] = useState(false);

    const cardtitle = [
        {id:1,title:"Tiergarten Schönbrunn"},
        {id:2,title:"Camelus dromedarius"},
        {id:3,title:"Ursus maritimus"},
        {id:4,title:"Antilope cervicapra"},
        {id:5,title:"Boiga irregularis"},
        {id:6,title:"Felis catus"},
        {id:7,title:"Blattodea"},
        {id:8,title:" TiergartenCrocodylus palustris"},
    ]

    const filterFunction = () => {
        const filteredCards = cardtitle.filter(card=>card.title.toLowerCase().includes(searchText.toLowerCase().trim()))
        setFilteredCard(filteredCards)
        setDataNotFound(filteredCards.length === 0);
};

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
                                {
                                    options.map(option=>(<li className={styles.droplist} key={option}>{option}</li>))
                                }
                            </div>
                        )
                    }
                </div>


                <div className={styles.search}>
                    <div className={styles.imgbox}>
                        <img src={search2} className={styles.imgsearch2} alt="search2" />
                    </div>
                    <input className={styles.input} type="text" placeholder='Suchbegriff'  value={searchText} 
                        onChange={(e)=>{setsearchText(e.target.value)}}></input>
                    
                </div>
                <Button styleType={'primaryButton2'} btntext={"Suchen"} handelClick={filterFunction}/>
        </div>
        <div className={styles.cards}> 
           
            {/* {filteredCard.length > 0 ?
                filteredCard.map(card => (
                <BigCard key={card.id} title={card.title} />
                )) :
                cardtitle.map(card => (
                <BigCard key={card.id} title={card.title} />
                ))
            } */}

                    {dataNotFound ? 
                    <div>Data Not found</div> :
                    filteredCard.length > 0 ?
                        filteredCard.map(card => (
                        <BigCard key={card.id} title={card.title} />
                        )) :
                        cardtitle.map(card => (
                        <BigCard key={card.id} title={card.title} />
                        ))
                    }
                    
                

        </div>
    </div>
  )
}

export default Aktuelles -->

.
.
.
.
.
.
.
.
.
<!-- 
WITH DATA NOT FOUND FUNCTION

import React, { useState } from 'react'
import styles from "./Aktuelles.module.scss"
import Button from '../../../components/Button'
import darrow from "../../../components/Images/darrow.png"
import search2 from "../../../components/Images/search2.png"
import InputBox from '../../../components/InputBox'
import BigCard from '../../../components/BigCard/BigCard'

const Aktuelles = ({title}) => {
    const [isOpen,setIsOpen] = useState(false)
    const options = ['Child 1','Child 2','Child 3']
    const [searchText,setsearchText] = useState("")
    const [filteredCard, setFilteredCard] = useState([]);
    const [dataNotFound, setDataNotFound] = useState(false);

    const cardtitle = [
        {id:1,title:"Tiergarten Schönbrunn"},
        {id:2,title:"Camelus dromedarius"},
        {id:3,title:"Ursus maritimus"},
        {id:4,title:"Antilope cervicapra"},
        {id:5,title:"Boiga irregularis"},
        {id:6,title:"Felis catus"},
        {id:7,title:"Blattodea"},
        {id:8,title:" TiergartenCrocodylus palustris"},
    ]

    const filterFunction = () => {
        const filteredCards = cardtitle.filter(card=>card.title.toLowerCase().includes(searchText.toLowerCase().trim()))
        setFilteredCard(filteredCards)
        setDataNotFound(filteredCards.length === 0);

};

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
                                {
                                    options.map(option=>(<li className={styles.droplist} key={option}>{option}</li>))
                                }
                            </div>
                        )
                    }
                </div>


                <div className={styles.search}>
                    <div className={styles.imgbox}>
                        <img src={search2} className={styles.imgsearch2} alt="search2" />
                    </div>
                    <input className={styles.input} type="text" placeholder='Suchbegriff'  value={searchText} 
                        onChange={(e)=>{setsearchText(e.target.value)}}></input>
                    
                </div>
                <Button styleType={'primaryButton2'} btntext={"Suchen"} handelClick={filterFunction}/>
        </div>
        <div className={styles.cards}> 
           
            {/* {filteredCard.length > 0 ?
                filteredCard.map(card => (
                <BigCard key={card.id} title={card.title} />
                )) :
                cardtitle.map(card => (
                <BigCard key={card.id} title={card.title} />
                ))
            } */}

                    {dataNotFound ? 
                    <div>Data Not found</div> :
                    filteredCard.length > 0 ?
                        filteredCard.map(card => (
                        <BigCard key={card.id} title={card.title} />
                        )) :
                        cardtitle.map(card => (
                        <BigCard key={card.id} title={card.title} />
                        ))
                    }
        </div>
    </div>
  )
}

export default Aktuelles -->





To make /aktuelles a nested route of /home2, you need to adjust the route paths accordingly in your code. Here's the modified code to achieve this:

javascript
Copy code
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import Fotogallerie from '../components/Fotogallerie/Fotogallerie';
import Login from '../components/Login/Login';
import Home2 from '../Pages/Home2';
import Home1 from '../Pages/Home1';
import Header from '../components/Header/Header';
import ProtectedRoutes from './ProtectedRoutes';
import Aktuelles from '../Pages/Home2/Aktuelles/Aktuelles';
import Carddetail from '../Pages/Home2/Aktuelles/Carddetail/Carddetail';

const Routee = ({ isMenuVisible, setisMenuVisible }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const temp = localStorage.getItem('isLogin');
    if (temp === 'true') {
      setIsLogin(true);
    }
  }, []);

  const menuItems1 = [
    { text: 'Heim', link: '/heim', dropdown: false },
    { text: 'Unsere Schule', icon: <MdOutlineArrowDropDown />, dropdown: true },
    { text: 'Unsere Klassen', icon: <MdOutlineArrowDropDown />, dropdown: true },
    { text: 'Fotogallerie', dropdown: false, link: '/foto' },
    { text: 'Uber uns', dropdown: false },
  ];

  const menuItems2 = [
    { text: 'Aktuelles', dropdown: false, link: '/home2/aktuelles' },
    { text: 'Termine', dropdown: false },
    { text: 'Unsere Schule', icon: <MdOutlineArrowDropDown />, dropdown: true },
    { text: 'Bildergalerie', dropdown: false },
  ];

  const menuItems = isLogin === false ? menuItems1 : menuItems2;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header
              menuItems={menuItems}
              setIsLogin={setIsLogin}
              isLogin={isLogin}
              isMenuVisible={isMenuVisible}
              setisMenuVisible={setisMenuVisible}
            />
            <Home1 />
          </>
        }
      />

      <Route
        path="/foto"
        element={
          <>
            <Header
              menuItems={menuItems}
              isMenuVisible={isMenuVisible}
              setisMenuVisible={setisMenuVisible}
            />
            <Fotogallerie />
          </>
        }
      />

      <Route
        path="/login"
        element={
          <>
            <Header
              isMenuVisible={isMenuVisible}
              setisMenuVisible={setisMenuVisible}
              menuItems={menuItems}
            />
            <Login setIsLogin={setIsLogin} isLogin={isLogin} menuItems={menuItems} />
          </>
        }
      />

      <Route
        path="/home2"
        element={
          <>
            <Header
              setIsLogin={setIsLogin}
              isLogin={isLogin}
              menuItems={menuItems}
              isMenuVisible={isMenuVisible}
              setisMenuVisible={setisMenuVisible}
            />
            <ProtectedRoutes isLogin={isLogin}>
              <Home2 />
              <Route path="aktuelles" element={<Aktuelles />} />
              <Route path="aktuelles/carddetail" element={<Carddetail />} />
            </ProtectedRoutes>
          </>
        }
      />
    </Routes>
  );
};

export default Routee;
In this modified version, I've made /aktuelles a nested route under /home2. Now, when you visit /home2, Home2 component will be rendered, and when you visit /home2/aktuelles, Aktuelles component will be rendered as its child component.


<Link key={card.id} to={"/home2/"+card.id}>
                      <BigCard resData={restaurant}/>
                    </Link>













THIS IS A HOVER UL WORKING FINE 12.00PM 15MARCH

<ul>
  {menuItems?.map((item, index) => (
    <li
      key={index}
      className={item.className}
      onMouseEnter={() => item.dropdown && toggleDropdown(index)}
      onMouseLeave={() => item.dropdown && toggleDropdown(index)}
    >
      {item.link ? (
        <Link to={item.link} className={styles.routli}>
          {item.text}
        </Link>
      ) : (
        <>
          {item.text}
          {item.icon}
          {item.dropdown && (
            <>
              {index === 1 && isOpen1 && (
                <div className={styles.mapli}>
                  {options.map((option) => (
                    <li className={styles.dropli} key={option}>
                      {option}
                    </li>
                  ))}
                </div>
              )}
              {index === 2 && isOpen2 && (
                <div className={styles.mapli}>
                  {options.map((option) => (
                    <li className={styles.dropli} key={option}>
                      {option}
                    </li>
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
      {/* {item.icon} */}
    </li>
  ))}
</ul>









maayank

import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./HeaderStyle.scss";
import { IoMenu } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import UberUns from "../../pages/Uberuns/UberUns";

const Header = ({ isActive, setIsActive, isLogin, listData, setIsLogin }) => {
  const options = ["child1", "child2", "child3"];
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);  const clickHandler = () => {
    if (isLogin === true) {
      localStorage.setItem("isLogin", false);
      console.log("zxxxx , if ha yhe");
      navigate("/");
      setIsLogin(false);
    } else {
      console.log("zxxxx , else ha yhe");
      navigate("/login");
    } // Use navigate to navigate
  };

  const sideMenuToogleHandler = () => {
    setIsActive((prevState) => !prevState);
  };
 return (
    <div className="Header_Container">
      <div className="Logo_Header">
        <div className="Logo_header_img">
          <img src="/Group 86.png" alt="logoImg" />
        </div>
      </div>
      <div className="Search_List_Container">
        <div className="top-Container">
          <div className="triangle"></div>
          <div className="search_Container">
            <div className="inputContainer">
              <img src="search 1.png" alt="searchImg" />
              <Input />
            </div>  <div className="locationDetails">
              <img src="pin 1.png" alt="locationImg" />
              <p>Schulgasse 2, 2483 Ebreichsdorf</p>
            </div> <div className="phoneDetails">
              <img src="/phone-call 1.png" alt="" />
              <p>02254 / 725280</p>
            </div>
          </div>
        </div>
        <div className="List_Container" style={{ listStyle: "none" }}>  <ul>
            {listData?.map((item, index) => (
              <li key={index}>
                {item.to ? (
                  <Link
                    to={item.to}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {item.text}
                  </Link>
                ) : (
                  <div>
                    <span
                      onMouseEnter={() =>
                        item.text === "Unsere Schule"
                          ? setIsOpen(true)
                          : setIsOpen1(true)
                      }
                      onMouseLeave={() =>
                        item.text === "Unsere Schule"
                          ? setIsOpen(false)
                          : setIsOpen1(false)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {item.text} <MdArrowDropDown />
                    </span>
                    {item.options &&
                      (item.text === "Unsere Schule" ? isOpen : isOpen1) && (
                        <ul className="drop-down-menu">
                          {item?.options?.map((option, optionIndex) => (
                            <li
                              key={optionIndex}
                              style={{ marginBottom: "2px" }}
                            >
                              <Link
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "none",
                                }}
                                to="#"
                              >
                                {option}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="nav_button">
            {console.log(isLogin, "islogin value")}
            <Button
              btn={isLogin ? "Logout" : "Login / sign-up"}
              className="primary"
              onClick={clickHandler}
            />
          </div>
        </div>
      </div>
      <div className="moblie-menu-icons">
        <IoMenu
          style={{
            marginTop: "4px",
          }}
          size={50}
          color="#007eba"
          onClick={sideMenuToogleHandler}
        />
      </div>
    </div>
  );
};

export default Header;





To achieve dropdown functionality using only CSS hover, you can use CSS to control the visibility of the dropdown menu when hovering over the parent li elements. Here's the modified code:

jsx
Copy code
<ul className={styles.menu}>
  {menuItems?.map((item, index) => (
    <li key={index} className={`${styles.menuItem} ${item.className}`}>
      {item.link ? (
        <Link to={item.link} className={styles.routli}>
          {item.text}
        </Link>
      ) : (
        <>
          {item.text}
          {item.icon}
          {item.dropdown && (
            <ul className={`${styles.dropdown} ${item.isOpen ? styles.show : ''}`}>
              {options.map((option, i) => (
                <li className={styles.dropli} key={i}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </li>
  ))}
</ul>
And then in your CSS:

css
Copy code
.menu {
  list-style-type: none;
  padding: 0;
}

.menuItem {
  position: relative;
}

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
}

.dropdown li {
  padding: 10px;
}

.show {
  display: block;
}

.menuItem:hover .dropdown {
  display: block;
}
This code will display the dropdown menu when you hover over the parent li elements, utilizing CSS for the hover effect instead of JavaScript states and click events.




 {isLogin ?
                <>
                  <p>Impressum</p>
                  <p>FAQ</p>
                </> : 
            <form className={styles.form}>
              <input type='text' className={styles.inp} placeholder='lhr Name'/>
              <input type='text' className={styles.inp}  placeholder='Deine E-mail'/>
              <submit className={styles.submit}>Abonniere jetzt</submit>
            </form>