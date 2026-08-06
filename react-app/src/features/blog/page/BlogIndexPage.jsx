import styled from "styled-components";
import Button from "../../../components/styled/Button";
import BlogList from "../list/BlogList";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > *:not(:last-child) {
        margin-bottom: 16px;
    }
`;

const WelcomeMessage = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #333;
`;

const LogoutButton = styled(Button)`
    background-color: #f44336;
    color: white;

    &:hover {
        background-color: #d32f2f;
    }
`;

const CategoryRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin: 24px 0 16px;
    padding: 16px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
`;

const CategoryChip = styled.button`
    padding: 9px 18px;
    border-radius: 20px;
    border: 1px solid
        ${({ $active }) => ($active ? "#007bff" : "#dddddd")};

    background-color:
        ${({ $active }) => ($active ? "#007bff" : "#ffffff")};

    color:
        ${({ $active }) => ($active ? "#ffffff" : "#555555")};

    font-size: 14px;
    font-weight:
        ${({ $active }) => ($active ? "bold" : "normal")};

    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color:
            ${({ $active }) => ($active ? "#0056b3" : "#f2f7ff")};

        border-color: #007bff;
        color:
            ${({ $active }) => ($active ? "#ffffff" : "#007bff")};
    }
`;

const BlogIndexPage = () => {

    const CATEGORIES = ["전체", "개발", "생활", "취미", "일상"];

    const user = localStorage.getItem('user');

    const [blogs, setBlogs] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("전체");




    // const blogs=[
    //     {
    //         "title":"til 작성",
    //         "content":"component",
    //         "category":"front-end",
    //         "email":user
    //     },
    //     {
    //         "title":"링거(술)",
    //         "content":"java",
    //         "category":"back-end",
    //         "email":user
    //     }
    // ];


    //    Q)
    //     - axios 통신(get(blogs) , params X)
    //     - 데이터를 reactive state 관리(setXXXX)
    //     - 렌더링시점에 데이터 바인딩이 X, effect  필요함!!

    const loadData = async () => {

        await api.get('/blogs')
            .then(response => {

                console.log(
                    `debug >>>> axios request success`,
                    response
                );

                if (response.status === 200) {
                    setBlogs(response.data);
                }

            })
            .catch(error => {

                console.log(
                    `debug >>>> axios request error`,
                    error
                );

            });
    }


    useEffect(() => {
        loadData();
    }, []);


    // 글 작성하기 버튼



    // 로그아웃 버튼



    // 기상예보 버튼


    // 카테고리 버튼
    const categoryHandler = (category) => {

        setSelectedCategory(category);

    }
    const moveUrl = useNavigate();
    const writeHandler = (e) => {
        moveUrl('/blogs/write');
    };

    return (

        <Wrapper>

            <Container>


                {user &&
                    <WelcomeMessage>

                        {user}님 환영합니다.

                    </WelcomeMessage>
                }



                <Button
                    title='글 작성하기'
                    onClick={(e) => writeHandler(e)}
                />
                &nbsp;&nbsp;&nbsp;
                <Button
                    title='로그아웃'
                />
                &nbsp;&nbsp;&nbsp;
                <Button
                    title='기상예보'
                />


                <CategoryRow>





                    {
                        CATEGORIES.map((category, index) => (

                            <CategoryChip
                                key={index}
                                $active={
                                    category === selectedCategory
                                }
                                onClick={
                                    () => categoryHandler(category)
                                }
                            >

                                {category}

                            </CategoryChip>

                        ))
                    }



                </CategoryRow>

                <BlogList ary={blogs || []}></BlogList>


            </Container>

        </Wrapper>

    )

}

export default BlogIndexPage;