import styles from './Header.module.scss';
import InputBox from '../InputBox';
import logo1 from '../Images/logo1.png';
import pin from '../Images/pin.png';
import call from '../Images/call.png';
import { IoMenu } from 'react-icons/io5';
import {useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/index';

const Header = ({isMenuVisible, setisMenuVisible, menuItems, isLogin, setIsLogin,options }) => {
  console.log(menuItems,"from headertop")
  const navigate = useNavigate();
  // const options = ['Child 1', 'Child 2', 'Child 3'];
  const [isOpen1, setIsOpen1] = useState(false); 
  const [isOpen2, setIsOpen2] = useState(false);
 
  
  const toggleDropdown = (index) => {
    if (index === 1) {
      setIsOpen1(!isOpen1);
    } else if (index === 2) {
      setIsOpen2(!isOpen2);
    }

  };

  const openIcons = (event) => {
    console.log(isMenuVisible,"sdsd")
    setisMenuVisible(!isMenuVisible);
    event.preventDefault(); 
  };
  
  const navigateLogin = () => {
    navigate('/login');
    if(isLogin===true){
      localStorage.removeItem("isLogin");
        setIsLogin(false);
        navigate('/')
    }
    
  };



  // const navigateLogin = () => {
    //correvt code
  //   navigate('/login');
  //   if(isLogin===true){
  //     localStorage.removeItem("isLogin");
  //       setIsLogin(false);
  //       navigate('/')
  //   }
  // };

 

  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.boxleft} onClick={() => navigate('/')}>
          <img className={styles.logo1} src={logo1} alt="logo" />
          <div className={styles.text}>
            <p className={styles.text1}>Schullogo </p>
            <p className={styles.text2}>Hier</p>
          </div>
        </div>

        <div className={styles.boxright}>
          <div className={styles.boxrightup}>
            <div className={styles.arrright}>
              <div className={styles.arrowright}></div>
              <div className={styles.Search}>
                <div className={styles.boxrb}>
                  <div className={styles.boxrb1}>
                    <InputBox styleType={'inputBox1'} placeholder={"Suche hier....."}/>
                  </div>
                  <div className={styles.boxrb1}>
                    <img className={styles.loc} src={pin} alt="pin" />
                    {/* <span className={styles.address}>Schulgasse 2,2483 Ebreichhsdorf</span> */}
                    <span className={styles.address}>{isLogin ===true ? "Vicolo Capela Sistina, 1452 Floren" : "Schulgasse 2,2483 Ebreichhsdorf"}</span>
                  </div>
                  <div className={styles.boxrb2}>
                    <img className={styles.loc} src={call} alt="call" />
                    <span className={styles.address1}>{isLogin ===true ? "(055)145-119" : "02254 / 725280"}</span>
                    {/* <span className={styles.address1}>02254 / 725280</span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.boxrightlow}>
              
            {/* <ul>
               my Ul onclick wolking fine 
            {menuItems?.map((item, index) => (
              <li key={index} className={item.className} onClick={() => item.dropdown && toggleDropdown(index)}>
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
              </li>
            ))}
          </ul> */}

              <ul>
              {/* THIS IS HOVER DROPDWON MENU WORKING PEFECTLY FINE 15MAR 1.00PM  */}
                {menuItems?.map((item, index) => (
                  <li key={index} 
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
                            {(index === 1 ? isOpen1 : isOpen2 ) && (
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
                  </li>
                ))}
              </ul> 


              <div>
                <Button btntext={isLogin===true ? 'Logout' : 'Login'} handelClick={navigateLogin}/>
              </div>
            </div>
          </div>
          <div className={styles.hamburgermenu}>
            <a className={styles.hamimg} href="#" onClick={openIcons}>
              {!isMenuVisible ? <IoMenu size={40} /> : <IoMenu size={40} />}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;





