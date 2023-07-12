import { styled } from "styled-components";

const DiaryItemBlock = styled.div`
    width: 480px;
    height : 80px;
    padding-left : 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    background: lightgray;
    &:nth-child(even){
        background: gray;
    }
`;

export const DiaryItem = ({item})=>{
    return(
        <DiaryItemBlock>
            <span> {item.date} {item.title} </span>
        </DiaryItemBlock>
    );
};