import { ListItem } from "./ListItem";
import "./styles/DiaryList.scss";

export const DiaryList = ({data})=>{
    return(
        <div className="list-container">
            {data.map((item)=>(
                <ListItem key={item.id} item={item}/>
            ))}
        </div>
    );
}