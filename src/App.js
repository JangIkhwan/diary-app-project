import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import { useRef } from "react";
import Insert from "./components/pages/Insert";
import DiaryRead from "./components/pages/DiaryRead";

function getFormattedDate(){
  var today = new Date();
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);
  var dateString = year + '-' + month  + '-' + day;

  return dateString;
}

const App = ()=>{
  const [data, setData] = useState([
    {
      id : 1,
      date : "2023/07/01", 
      title : "제목1",
      content : "여름이었다"
    }
    ,
    {
      id : 2,
      date : "2023/07/02",
      title : "제목2",
      content : "여름이었다"
    }
    ,
    {
      id : 3,
      date : "2023/07/03",
      title : "제목3",
      content : "여름이었다"
    }
    ,
    {
      id : 4,
      date : "2023/07/03",
      title : "제목4",
      content : "여름이었다"
    }
    ,
    {
      id : 5,
      date : "2023/07/03",
      title : "제목5",
      content : "여름이었다"
    }
  ]);

  const nextId = useRef(6);

  const onInsert = (dto)=>{
    var dateString = getFormattedDate();
    const datum = {
      id : nextId.current,
      date : dateString,
      title : dto.title,
      content: dto.content
    };

    setData(data.concat(datum));

    nextId.current += 1;
  };

  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/insert" element={<Insert onInsert={onInsert}/>} />
        <Route path="/read/:diaryId" element={<DiaryRead data={data}/>} />
      </Routes>
    </>
  );
};

export default App;