import React, {useState} from 'react'
import styles from './WritingNavbar.module.css';
import {SlArrowDown} from 'react-icons/sl';
import {TbDots} from 'react-icons/tb';

const WritingNavbar = (props) => {
  const { desc } = props;
  const downloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob([desc], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'my-text-file.txt';
    document.body.appendChild(element);
    element.click();
  };

  const handleSave = () => {
    console.log(desc); // desc değişkenine burada erişebilirsiniz
  }
   return (
    <div>
      <div className={styles["header-div-writing-page"]}>
        <div className={styles['header-left-writing-page']}>
          <div className={styles['logo-img-writing-page']}></div>
        </div>
        

            <div className={styles["header-right-writing-page"]}>
              <span onClick={downloadTxtFile} className={styles['publish-button-writing-page']}>Publish</span>
              <div className={styles["dib"]}>
                <div className={styles['three-dot-writing-page']}>
                  <TbDots/>
                </div>
                  
                

              </div>
                <div className={styles["div-notification-writing-page"]}>
                    <a href="" className={styles["href-design-writing-page"]}>
                      <div className={styles['notification-icon-writing-page']}></div>
                    </a>
                </div>

                <div className={styles["profil-img-side-writing-page"]}>
                        <div className={styles["profil-button-writing-page"]}></div>
                        <SlArrowDown className={styles['profile-arrow-down-writing-page']}/>
               </div>    
       </div>
   </div>
</div>
  )
}

export default WritingNavbar
