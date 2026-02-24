import Cards from "./Cards";
import Sdata from "./Sdata";

// Here user is giving the values of props keys as attributes of Cards element
// here attribute name should be same as props keys name
// these values will go to Cards.jsx

// whenever we fetch data from the database, it always comes in an array.
// thsat array consists of mulyiple objects
// e.g. arr =[{col1:val1, col2:val2...coln:valn}, {}, {}, ..., {}]
// to retrieve val1 -> 1. x=arr[0], 2. x.col1



function App(){
  function ncard(val) {
    return(
      <Cards key={val.id} imgsrc={val.imgsrc} channel={val.channel} title={val.vtitle} vlink={val.vlink}></Cards>
    )
  }

  return(
    <>
    {/* data entered manually */}
      {/* <Cards imgsrc='Smart Way to Get a Job.png' channel='ITVedant' title='Smart Way to Get a Job' vlink='https://youtu.be/IFwdOawuu6E?si=78hdl7IhRUNZwocw'></Cards>
      <Cards imgsrc='img2.png' channel='ITVedant' title='Perfect Answer of Tell Me About Yourself' vlink='https://youtu.be/TuBCEgyF0UM?si=A7YJ1HLqolDhLq6U'></Cards>
      <Cards imgsrc='img3.jpg' channel='ITVedant' title='What is SQL' vlink='https://youtu.be/818TISqOvQ8?si=cQtGe1lkL8nydc4U'></Cards>
      <Cards imgsrc='img4.png' channel='ITVedant' title='Key Difference Between a Resume and a CV' vlink='https://youtu.be/6aTnqZdYejU?si=dStMgRvSkyJr_W_G'></Cards>
      <Cards imgsrc='img5.jpg' channel='ITVedant' title='Top 5 Mistakes in Tech Interviews' vlink='https://youtu.be/rvrVKEflLBY?si=aSXhwpeRzQXePFoZ'></Cards> */}

        {/* When data comes from the database */}
      {/* <Cards imgsrc={Sdata[0].imgsrc} channel={Sdata[0].channel} title={Sdata[0].vtitle} vlink={Sdata[0].vlink}></Cards>
      <Cards imgsrc={Sdata[1].imgsrc} channel={Sdata[1].channel} title={Sdata[1].vtitle} vlink={Sdata[1].vlink}></Cards>
      <Cards imgsrc={Sdata[2].imgsrc} channel={Sdata[2].channel} title={Sdata[2].vtitle} vlink={Sdata[2].vlink}></Cards>
      <Cards imgsrc={Sdata[3].imgsrc} channel={Sdata[3].channel} title={Sdata[3].vtitle} vlink={Sdata[3].vlink}></Cards>
      <Cards imgsrc={Sdata[4].imgsrc} channel={Sdata[4].channel} title={Sdata[4].vtitle} vlink={Sdata[4].vlink}></Cards> */}

      {/* when we don't know how many records are there in the database */}
      {/* for that we have created a function named ncard above */}
      {/* and we are going to use map function of JS to retrieve elements of Sdata (i.e., each object) and pass it to ncard function, until all the objects of Sdata are called */}
      {Sdata.map(ncard)}   {/*Here ncard is a callbavk function, i.e. function called as an argument for another function. i.e. map is a function and ncard (also a function) is called as an argument inside the map function*/}

    </>
  )
}

export default App;