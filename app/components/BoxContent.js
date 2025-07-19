"use client";
import React, { use } from 'react';
import '../../styles/home.css'; 
const BoxContent = ({title,content}) => {
  return (
   <>
   <div className="box">
          <div className="box-Title">{title}</div>
          <div className="box-Content">
            {content}
          </div>
          <div className="readMore"> 
          <button >Read More</button>
          </div>
        </div>
   </>
  );
};

export default BoxContent;