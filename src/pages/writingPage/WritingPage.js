import React, {useState} from 'react'
import WritingNavbar from '../../components/Navbar/writingNavbar/WritingNavbar/WritingNavbar';
import TipTap from '../../components/writing/Tiptap';
import styles from './WritingPage.module.css';

const WritingPage = () => {
  const [desc, setDesc] = useState('');

  const handleDescChange = (newDesc) => {
    setDesc(newDesc);
  }
  return (
    <div>
      <div className={styles['Writing-page-container']}>
        <div className={styles['Writing-page-top']}>
            <WritingNavbar desc={desc}/>
        </div>
        <div className={styles['Writing-page-bottom']}>
            <TipTap onDescChange={handleDescChange}/>
        </div>
      </div>
    </div>
  )
}

export default WritingPage


