import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Insert.scss";

const Insert = ({onInsert})=>{
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onChangeTitle = (e)=>{
        setTitle(e.target.value);
    }

    const onChangeContent = (e) =>{
        setContent(e.target.value)
    }
    
    const onSubmit = ()=>{
        const newTitle = title.trim();
        const newContent = content.trim();
        if(newTitle === "" || newContent === ""){
            alert("제목이나 내용을 입력하세요");
            return;
        }
        const dto = {
            title: title,
            content: content
        }    
        onInsert(dto);
        navigate("/");
    };

    return (
        <div className="Insert">
            <div className="insert-container">
                <form>
                    <h2>나의 일기</h2>
                    <div>
                        <label>제목 </label>
                        <input type="text" value={title} onChange={onChangeTitle}/>
                    </div>
                    <div>
                        <label>내용</label>
                        <textarea rows="10" onChange={onChangeContent}> 
                            {content} 
                        </textarea>
                    </div>
                    <div>
                        <button type="button" onClick={onSubmit}>저장하기</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Insert;
