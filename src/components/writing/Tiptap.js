import React, { useState } from 'react'
import parser from "html-react-parser"
import Writing from './Writing';
import './Writing.css';

const TipTap = () => {
  const [desc, setDesc] = useState("");
  return (
    <div>
      <Writing setDesc={setDesc}/>
      {/* <div className='ProseMirror'>
        {parser(desc)}
      </div> */}
    </div>
  )
}

export default TipTap
