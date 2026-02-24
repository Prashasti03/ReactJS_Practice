// Context API is a way to essentially create global variables that can be passed around in  React App
// this is alternative way for prop drilling or passing props from grand parent component to parent to grand child
// Context API provides a way to share values b/w components without having to explicitly pass props through every level of tree

import Parentcomp from "./Parentcomp"

function App() {

  return (
    <>
      <Parentcomp/>
    </>
  )
}

export default App
