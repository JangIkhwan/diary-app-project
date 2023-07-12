import { useState } from "react";
import { DiaryList } from "./components/DiaryItemList";

const App = ()=>{
  const [data, setData] = useState([
    {
      id : 1,
      date : "2023/07/01", 
      title : "제목1",
      text : "여름이었다"
    }
    ,
    {
      id : 2,
      date : "2023/07/02",
      title : "제목2",
      text : "여름이었다"
    }
    ,
    {
      id : 3,
      date : "2023/07/03",
      title : "제목3",
      text : "여름이었다"
    }
  ]);

  const onInsert = ()=>{
    
  };

  return(
    <div>
      <DiaryList data={data}/>
    </div>
  );
};

export default App;