import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";


const SuccessPage=()=>{

    const location=useLocation();
    const {user,from}=location.state||{};

    const name=localStorage.getItem('userName');

    return(
        <div>
            <center>
                {name}-{user.name}님 로그인 성공
            </center>
            &nbsp;&nbsp;&nbsp;
            <Link to="/read/1">상세페이지 이동</Link>
             &nbsp;&nbsp;&nbsp;
            <Link to="/">랜딩페이지로</Link>
        </div>
    )
}

export default SuccessPage;