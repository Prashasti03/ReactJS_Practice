// form control components - 2 types of components
// 1. contoled components - handled by React components
// 2. uncontoled components - handled by React DOM

import Controlled from "./Controlled";
import Multielements from "./Multielements";
import Uncontrolled from "./Uncontrolled";

function App(){
  return(
    <>
      {/* <Controlled/> */}
      <Multielements/>
      <Uncontrolled/>
    </>
  )
}

export default App;