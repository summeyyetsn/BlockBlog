import React from 'react'
import WritingNavbar from '../../components/Navbar/writingNavbar/WritingNavbar/WritingNavbar';
import TipTap from '../../components/writing/Tiptap';
import styles from './WritingPage.module.css';

const WritingPage = () => {
  return (
    <div>
      <div className={styles['Writing-page-container']}>
        <div className={styles['Writing-page-top']}>
            <WritingNavbar/>
        </div>
        <div className={styles['Writing-page-bottom']}>
            <TipTap/>
        </div>
      </div>
    </div>
  )
}

export default WritingPage


