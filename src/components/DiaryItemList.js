import { DiaryItem } from "./DiaryItem"
import { styled } from "styled-components" 

const TitleBlock = styled.h2`
    padding: 20px 0;
    margin: 10px 0;
    border-radius: 10px 10px 0 0;
    height: 80px;
    text-align: center;
    background: skyblue;
    font-size: 1.5rem;
`;

const DiaryListBlock = styled.div`
    width : 500px;
    height: 100%;
    margin: 0 auto;
    color: white;
`;

export const DiaryList = ({data})=>{
    return(
        <DiaryListBlock>
            <TitleBlock>나의 다이어리</TitleBlock>
            {data.map((item)=>(
                <DiaryItem key={item.id} item={item}/>
            ))}
        </DiaryListBlock>
    );
}