import React, {useState, useRef, useEffect} from 'react'
import styles from './MainNavbar.module.css';

import {IoSearchOutline} from 'react-icons/io5';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {IoBookmarksOutline,IoSettingsOutline} from 'react-icons/io5';
import {HiOutlineDocumentText} from 'react-icons/hi';
import {AiOutlineUser} from 'react-icons/ai';

const MainNavbar = () => {

  const [open, setOpen] = useState(false);
  const menuItems = [
    { name: "Profile", icon: <AiOutlineUser className='profile-menu-icons' /> },
    { name: "Library", icon: <IoBookmarksOutline className='profile-menu-icons'/> },
    { name: "Stories", icon: <HiOutlineDocumentText className='profile-menu-icons'/> },
    { name: "Settings", icon: <IoSettingsOutline className='profile-menu-icons'/> },
  ];

  const menuRef = useRef();
  const imgRef = useRef();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleMenuClick = (name) => {
    console.log(`Clicked on ${name} menu item`);
    setOpen(false);
  };

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

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

                {/* <div className={styles["profil-img-side"]}>
                  <div className={styles["profil-button"]}></div>
                  <RiArrowDropDownLine className={styles['profile-arrow-down']}/>
               </div>     */}

                <div className={styles['profile-dropdown-menu-container']}>
                  <div className={styles["profile-dropdown-menu"]}>
                    <div ref={imgRef} className={styles["profile-image"]} onClick={handleClick}></div>
                    {open && (
                      <ul className={styles["profile-menu-text-container"]} ref={menuRef}>
                        {menuItems.map((item) => (
                          <li className={styles['profile-menu-text']} key={item.name} onClick={() => handleMenuClick(item.name)}>
                            {item.icon}
                            <span>{item.name}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>


            </div>
        </div>
    </nav>
  )
}

export default MainNavbar
