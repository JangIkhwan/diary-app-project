import "./styles/ListItem.scss";
import { Link } from "react-router-dom";

export const ListItem = ({item})=>{
    let link = `/read/${item.id}`;
    return(
        <div className="list-item">
            <Link to={link}>
                <span> {item.date} {item.title} </span>
            </Link>
        </div>
    );
};
