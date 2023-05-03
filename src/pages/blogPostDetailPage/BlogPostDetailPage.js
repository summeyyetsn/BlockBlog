// @@@@   COMPONENT IMPORTING           @@@@
import React, {useState} from 'react';
import MainNavbar from '../../components/Navbar/mainNavbar/MainNavbar';
import Profile from '../../components/profile/Profile';
import BlogPostCard from '../../components/BlogPost/blogPostCard/BlogPostCard';
import BlogPostOwner from '../../components/BlogPost/blogPostOwner/BlogPostOwner';

import styles from './BlogPostDetailPage.module.css';
import LatestPost from '../../components/latestPosts/LatestPosts';
// @@@@           ICON IMPORTING           @@@@
import {BsBookmarkStar,BsBookmarkStarFill,BsFillHeartFill,BsHeart} from 'react-icons/bs';
import BlogPostMain from "../../components/blogPostMain/BlogPostMain";




const BlogPostDetailPage = () => {



  return (
    <div>
        <div>
            <div class="blog-post-main-container">
                <header class={`${styles["bpm-navbar"]} ${styles["bpm-top"]} `}>
                    <MainNavbar/>
                </header>
                <div class={styles["bpm-content"]}>
                    <main class={`${styles["bpm-main-content"]} ${styles["bpm-right"]}`}>
                        <BlogPostOwner/>
                        {/* <BlogPostCard/> */}
                        <BlogPostMain/>
                    </main>
                    <aside className={`${styles["bpm-sidebar"]} ${styles["bpm-left"]}`}>
                        <Profile/>
                        <LatestPost/>
                    </aside>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogPostDetailPage
