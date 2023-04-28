import React, {useState, useRef, useEffect} from 'react'
import styles from './MainNavbar.module.css';
import {IoSearchOutline} from 'react-icons/io5';
import {RiArrowDropDownLine} from 'react-icons/ri';

const MainNavbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbarHeight = navbarRef.current.offsetHeight;
      const navbarOpacity = parseFloat(window.getComputedStyle(navbarRef.current).getPropertyValue('opacity'));
      
      if (prevScrollPos > currentScrollPos) {
        // Yukarı kaydırma
        if (currentScrollPos > navbarHeight && navbarOpacity === 0) {
          navbarRef.current.style.opacity = '1';
        }
      } else {
        // Aşağı kaydırma
        if (currentScrollPos > navbarHeight && navbarOpacity === 1) {
          navbarRef.current.style.opacity = '0';
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

   return (
    <nav>
        <div className={styles["header-div"]} ref={navbarRef}>
            <div className={styles['header-left']}>
            <div className={styles['logo-img']}></div>
            <div className={styles['header-search']}>
                <IoSearchOutline className={styles['search-icon']}/>
                <input type='text' placeholder='Search Post' className={styles['search-box']}></input>
            </div>
            </div>
        

            <div className={styles["header-right"]}>
              <div className={styles["dib"]}>
                <div className={styles['write-side']}>
                  <div className={styles['write-icon']}></div>
                  <span className={styles['write-icon-text']}>Write</span>
                </div>

              </div>
                <div className={styles["dib div-notification"]}>
                    <a href="" className={styles["href-design"]}>
                      <div className={styles['notification-icon']}></div>
                    </a>
                </div>

                <div className={styles["profil-img-side"]}>
                        <div className={styles["profil-button"]}></div>
                        <RiArrowDropDownLine className={styles['profile-arrow-down']}/>
               </div>    
            </div>
        </div>
    </nav>
  )
}

export default MainNavbar
