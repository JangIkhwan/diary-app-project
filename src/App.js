import { useState } from "react";
import { DiaryList } from "./components/DiaryList";
import { DiaryListTemplate } from "./components/DiaryListTemplate";
import { Navbar } from "./components/Navbar";

const initData = []; 

function generateData(){
  for(let i = 0; i < 10; i++){
    initData.push({
      id : i,
      date : "2023/07/01",
      title: "제목" + i,
      text : "여름이었다"
    });
  }
  console.log(initData);
};

generateData();

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
    ,
    {
      id : 4,
      date : "2023/07/03",
      title : "제목4",
      text : "여름이었다"
    }
    ,
    {
      id : 5,
      date : "2023/07/03",
      title : "제목5",
      text : "여름이었다"
    }
  ]);

  return(
    <>
      <Navbar>

      </Navbar>
      <DiaryListTemplate>
        <DiaryList data={data}/>
      </DiaryListTemplate>
    </>
  );
};

export default App;