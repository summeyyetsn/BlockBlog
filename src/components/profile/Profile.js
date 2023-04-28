import React from 'react'
import styles from './Profile.module.css';
import {TbCoffee} from 'react-icons/tb';

const Profile = () => {
  return (
    <div>
        <div className={styles["profile-right-div"]}>
          <div className={styles['profil-side']}>
            <div className={styles['prf-img']}></div>
            <span className={styles["text-profil"]}>Jhonny Bravo</span>
            <div className={styles["span-follow"]}> <span>84.2K Followers</span>  </div>
            <p className={styles["text-explanation"]}>Lorem ipsum dolor sit amet. Ea autem porro hic sint sunt aut eaque eius est veritatis iste ut consequatur odio aut omnis alias. </p>
            <button className={styles["button-follow"]}>Follow</button>
            <button className={styles["button-order-cofee"]}>Order Coffe  <TbCoffee /></button> 
          </div>
        </div>
    </div>
    
  )
}

export default Profile
