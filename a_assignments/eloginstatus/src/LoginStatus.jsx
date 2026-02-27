import { useState } from "react"

export default function LoginStatus(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <>
            <div style={{marginLeft:'30px'}}>
                <h2>Login Status</h2>
                {/* Short Circuit Rendering */}
                {isLoggedIn && <p>You are logged in</p>}

                <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
            </div>        
        </>
    )
}

