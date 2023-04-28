import React from 'react'
import MainNavbar from '../../components/Navbar/mainNavbar/MainNavbar';
import BlogPostCard from '../../components/BlogPost/blogPostCard/BlogPostCard';
import Profile from '../../components/profile/Profile';
import Followers from '../../components/followers/Followers';
import Following from '../../components/following/Following';
import styles from './ProfilePage.module.css';


// import Slider from '../../components/Slider/Slider';
// const words = ["BlockChain", "React", "Foreign Language", "Learn Solidity","Hello World", "Blog Post"];
const ProfilePage = () => {
  return (
    <div>
        <div className={styles["container"]}>
            <header className={`${styles["navbar"]} ${styles["profilePage-top"]}`}>
                <MainNavbar/>
            </header>
            <div className={styles["content"]}>
            <main className={`${styles["main-content"]} ${styles["profilePage-right"]}`}>
                <BlogPostCard/>
                <BlogPostCard/>
            </main>
                <aside className={`${styles["sidebar"]} ${styles["profilePage-left"]}`}>
                    <Profile/>
                    <Following/>
                    <Followers/>
                </aside>
        </div>
    </div>
</div>
  )
}

export default ProfilePage
