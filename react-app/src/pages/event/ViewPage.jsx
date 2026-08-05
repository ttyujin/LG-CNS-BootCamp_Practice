import {useParams} from "react-router-dom";

const ViewPage=()=>{
    const {id}=useParams();
    console.log(`debug>>>>ViewPage useParams:id,${id}`);

}

export default ViewPage;