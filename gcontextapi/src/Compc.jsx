import { useContext } from "react";
import { Bcode, Cname } from "./Parentcomp";

function Compc() {
  let bcode = useContext(Bcode);
  let cname = useContext(Cname);
  return (
    <>
      {/* <Bcode.Consumer>
        {(bcode) => {
          return (
            <Cname.Consumer>
              {(cname) => {
                return (
                  <>
                    <h3>
                      Hello {cname} {bcode}
                    </h3>
                  </>
                );
              }}
            </Cname.Consumer>
          );
        }}
      </Bcode.Consumer> */}

      <h3>
        Hello {cname} {bcode}
      </h3>

      <h1>This is from Component C</h1>
    </>
  );
}

export default Compc;
