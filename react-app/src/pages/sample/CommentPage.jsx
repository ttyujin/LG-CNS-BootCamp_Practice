import api      from '../../api/axios' ;
import Comment  from '../../components/sample/Comment';
import { useState, useEffect } from 'react';

export const CommentPage = () => {
    // script
    console.log(`debug >>>> CommentPage load event `);
    let[comments,setComments]=useState([]) ;

    const loadData = async () => {
        await api.get('/comment')
                .then( response => {
                    console.log(`debug >>>> response `, response.data ); 
                    setComments(response.data) ;
                })
                .catch( err => {
                    console.log(`debug >>>> err `, err);
                });
    }
    useEffect(()=>{
        loadData();
    },[]);


    // UI
    return(
        <div>
            {                                     //옵셔널 체이닝: 값이 있으면 들어가 보고, 없으면 에러 내지 말고 그냥 undefined
                comments?.map( (comment, idx) => { //?는 옵셔널 체이닝으로 오류 발생시 화면이 깨지는것이 아닌 undefined가 나온다.
                    return <Comment 
                                key={idx}
                                data={comment} />
                }) ??[] //코드를 안정적으로 만들기 위해서 ??[] -> try/catch나 throws만 사용하는 것이 아닌 옵셔널 체이닝을 사용한다.
            }
        </div>
    );

}

// export default CommentPage ;

