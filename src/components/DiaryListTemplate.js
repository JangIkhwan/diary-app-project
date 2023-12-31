import React from 'react';
import './styles/DiaryListTemplate.scss'
import {Link} from "react-router-dom";

export const DiaryListTemplate = ({children})=>{
    return(
      <div className="container">
        <div className="title">
            <span>My Diary</span>
        </div>
        <div className="insertBar">
          <Link to="/insert" >
            <button type='button'>+ 새 일기 작성하기</button>
          </Link>
        </div>
        <div className='searchBar'>
          <input type='text'></input>
          <button type='button'>검색</button>
        </div>
        <div className="content">
            {children}
        </div>      
      </div>  
    );
};
