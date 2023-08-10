import { DiaryList } from "../DiaryList";
import { DiaryListTemplate } from "../DiaryListTemplate";

const Home = ({data})=>{
    return (
        <>
            <DiaryListTemplate>
                <DiaryList data={data}/>
            </DiaryListTemplate>
        </>
    );
};

export default Home;
