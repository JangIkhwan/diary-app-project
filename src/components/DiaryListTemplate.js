import React from 'react';
import './styles/DiaryListTemplate.scss'

export const DiaryListTemplate = ({children})=>{
    return(
      <div className="container">
        <div className="title">
            <span>My Diary</span>
        </div>
        <div className="content">
            {children}
        </div>      
      </div>  
    );
};
