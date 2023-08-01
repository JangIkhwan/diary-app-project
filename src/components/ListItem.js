import "./styles/ListItem.scss";

export const ListItem = ({item})=>{
    return(
        <div className="list-item">
            <span> {item.date} {item.title} </span>
        </div>
    );
};