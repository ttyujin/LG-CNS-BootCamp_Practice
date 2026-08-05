import {useState} from "react";
import LogoutButton from "../../components/rendering/LogoutButton";
// import LoginButton from 

const RenderingPage =()=>{
    
    //script
    const [flag,setFlag]=useState(false);
    //ui
    return(
        <div>
            <Greeting flag={flag}/>
            {
                flag?
                    <LogoutButton isLogin={setFlag}/>
                :
                   
                <LoginButton isLogin={}/>
            }
        </div>
    )
}

export default RenderingPage;