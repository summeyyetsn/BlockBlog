import React from 'react'
// @@@  IMPORTING COMPONENTS  @@@  
import MainNavbar from './components/Navbar/mainNavbar/MainNavbar';
import WritingNavbar from './components/Navbar/writingNavbar/WritingNavbar/WritingNavbar';
import LoginPageNavbar from './components/Navbar/loginPageNavbar/LoginPageNavbar';
import BlogPostCard from './components/BlogPost/blogPostCard/BlogPostCard';
import TagSlider from './components/tagSlider/TagSlider';
import BlogPostOwner from './components/BlogPost/blogPostOwner/BlogPostOwner';
import Profile from './components/profile/Profile';
import TipTap from './components/writing/Tiptap';
import Followers from './components/followers/Followers';
import Following from './components/following/Following';
import LatestPosts from './components/latestPosts/LatestPosts';

// @@@  IMPORTING PAGES  @@@ 
import MainPage from '../src/pages/mainPage/MainPage';
import WritingPage from './pages/writingPage/WritingPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import RecommendTopics from './components/recommentTopics/RecommendTopics';
import BlogPostMain from './components/blogPostMain/BlogPostMain';
import BlogPostDetailPage from './pages/blogPostDetailPage/BlogPostDetailPage';

const App = () => {
  return (
    <div>
      {/* @@@........ NAVBAR ............@@@ */}

      {/* <MainNavbar/> */}
      {/* <WritingNavbar/> */}
      {/* <LoginPageNavbar/> Çook eksikler var  */}

      {/* @@@........ BLOG POST ............@@@ */}

      {/* <BlogPostCard/> */}
      {/* <BlogPostOwner/> */}

      {/* @@@........ OTHER COMPONENTS ............@@@ */}
      {/* <Profile/> */}
      {/* <TipTap/> */}
      {/* <TagSlider/> */}
      {/* <Followers/> */}
      {/* <Following/> */}
      {/* <LatestPosts/> */}
      {/* <RecommendTopics/> */}
      {/* <BlogPostMain/> */}

      {/* @@@........ PAGES ............@@@ */}
      {/* <MainPage/> */}
      {/* <WritingPage/> */}
      {/* <ProfilePage/> */}
      <BlogPostDetailPage/>
      


    </div>
  )
}

export default App
