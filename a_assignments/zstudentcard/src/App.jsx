import Sdata from "./Sdata";
import StudInfo from "./StudInfo";

function App() {
  function scard(val){
    return(
      <StudInfo key={val.id} imgsrc={val.imgsrc} name={val.name} rollno={val.rollno} subject={val.subject} marks={val.marks} grade={val.grade} resultStatus={val.resultStatus}></StudInfo>
    )
  }

  return(
    <>
      {Sdata.map(scard)}
    </>
  )
}

export default App;