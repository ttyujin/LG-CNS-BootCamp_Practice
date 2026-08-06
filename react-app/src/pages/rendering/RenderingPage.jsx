import {useState} from "react";
import LogoutButton from "../../components/rendering/LogoutButton";
import Greeting from "../../components/rendering/Greeting";
import LoginButton from "../../components/rendering/LoginButton";

const RenderingPage =()=>{
    
    //script
    const [flag,setFlag]=useState(false);

    //ui
    return(
        <div>
            <Greeting flag={flag}/>
            {
                flag?
                    <LogoutButton setFlag={setFlag}/>
                :
                   
                    <LoginButton setFlag={setFlag}/>
            }
        </div>
    )
}

export default RenderingPage;