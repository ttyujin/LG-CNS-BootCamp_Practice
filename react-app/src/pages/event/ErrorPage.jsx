import {Link} from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const ErrorPage=()=>{

    const [searchParams]=useSearchParams();
    const category=searchParams.get('category');
    const sort=searchParams.get('sort');
    
    return(    
        <div>
            <center>
                로그인 실패({category},{sort})
            </center>
            &nbsp;&nbsp;&nbsp;
            <Link to="/">랜딩페이지로</Link>
        </div>
    )

}

export default ErrorPage;