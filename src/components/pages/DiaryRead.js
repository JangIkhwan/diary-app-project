import React from "react";
import { Link, useParams } from "react-router-dom";

const DiaryRead = ({data})=>{
    const { diaryId } = useParams();
    const diary = data.filter(datum => datum.id === parseInt(diaryId));
    const {date, title, content} = diary[0];

    console.log(diary);

    return (
        <div className="DiaryRead">
            <div className="insert-container">
                <form>
                <h2>나의 일기</h2> 
                    <div>
                        <label>날짜 </label>
                        <input type="text" value={date} readOnly/>
                    </div>
                    <div>
                        <label>제목 </label>
                        <input type="text" value={title} readOnly/>
                    </div>
                    <div>
                        <label>내용</label>
                        <textarea rows="10" readOnly> 
                        {content} 
                    </textarea>
                    </div>
                    <div>
                        <Link to="/">
                            <button type="button">수정</button>
                        </Link>
                        <Link to="/">
                            <button type="button">삭제</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default DiaryRead;
