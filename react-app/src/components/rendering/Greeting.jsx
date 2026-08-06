import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";
import {useState} from "react";

const Greeting=(props)=>{
    {
        return props.flag ? <UserGreeting/>:<GuestGreeting/>
    }
}

export default Greeting;