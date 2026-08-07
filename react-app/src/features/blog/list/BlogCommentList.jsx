import styled       from "styled-components";
import BlogCommnetItem from "../item/BlogCommetItem";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 16px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
    gap: 16px;
`;

const BlogCommnetList=({comments,handler})=>{

    return(
        <Wrapper>
            {
                comments.map((comment,idx)=>{
                    return <BlogCommnetItem
                                key={idx}
                                comment={comment}
                                handler={handler}/>
                })
            }
        </Wrapper>
    );

}

export default BlogCommnetList;