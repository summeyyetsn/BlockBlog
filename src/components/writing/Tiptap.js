import React, { useState } from 'react'
import parser from "html-react-parser"
import Writing from './Writing';
import './Writing.css';

const TipTap = ({ onDescChange }) => {
  const handleDescChange = (newDesc) => {
    onDescChange(newDesc);
  }
  return (
    <div>
      <Writing setDesc={handleDescChange}/>
      {/* <div className='ProseMirror'>
        {parser(desc)}
      </div> */}
    </div>
  )
}

export default TipTap
