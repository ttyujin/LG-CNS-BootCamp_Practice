import React, { useState }  from 'react';
import styled               from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import api from "../../../api/axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const FormWrapper = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.1);
  width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0,123,255,0.3);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;
const TextLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpPage = () => {

    const[form,setForm]=useState({
        name:'',
        email:'',
        password:''
    });

    //기존값을 유지하면서 입력값 처리
    const keyHandler=(e)=>{
        const{name,value}=e.target;
        setForm({...form,[name]:value});
    };

    const moveUrl=useNavigate();

    const signUpHandler=async(e)=>{
        e.preventDefault();
        console.log(`debug>>>>SignUpPage signUpHandler event`);
        
        const data = {...form};
        /*
        1) axios(/users)통신을 통해서 json-server 데이터를 전달하고 저장
        2) post,get,put-patch,delete
        3) 가입 성공시(200) -SignInPage 이동
        4) 가입 실패시 (4xx) - 현재 페이지에 에러 메세지를 출력
        */

       //json-server version
        await api.post('/users',data)
                .then(response=>{
                    console.log(`debug>>>axios response success`,response);
                    if(response.status===201){
                        moveUrl('/users/signIn');
                    }
                })
                .catch(error=>{
                    console.log(`debug>>>axios request error`,error);
                })
    }


    return(
            <Container>
                        <FormWrapper>
                            <Title>회원가입</Title>
                            <form onSubmit={signUpHandler}>
                                <Input  type='text' 
                                        name='name'
                                        placeholder="이름 입력하세요"
                                        value={form.name}
                                        onChange={keyHandler}/>
                                <Input  type='email' 
                                        name='email'
                                        placeholder="이메일 입력하세요"
                                        value={form.email}
                                        onChange={keyHandler}/>
                                <Input  type='password' 
                                        name='password'
                                        placeholder="패스워드 입력하세요"
                                        value={form.password}
                                        onChange={keyHandler}/>

                                <Button type='submit'>가입하기</Button>
                            </form>
                            <TextLink to='/users/signIn'>이미회원이시면 로그인</TextLink>
                        </FormWrapper>
                    </Container>
    )
}
export default SignUpPage;


// import { useState } from "react";
// import styled from "styled-components";

// const SignUpPage = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//     });

//     // input 값이 변경될 때 실행
//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     // form 제출 시 실행
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         console.log("회원가입 정보:", formData);
//     };

//     return (
//         <Container>
//             <Title>styled-component</Title>

//             <FormTitle>form</FormTitle>

//             <SignUpForm onSubmit={handleSubmit}>
//                 <FormGroup>
//                     <Label htmlFor="name">이름</Label>
//                     <Input
//                         id="name"
//                         name="name"
//                         type="text"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="이름을 입력하세요"
//                     />
//                 </FormGroup>

//                 <FormGroup>
//                     <Label htmlFor="email">이메일</Label>
//                     <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="이메일을 입력하세요"
//                     />
//                 </FormGroup>

//                 <FormGroup>
//                     <Label htmlFor="password">패스워드</Label>
//                     <Input
//                         id="password"
//                         name="password"
//                         type="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         placeholder="패스워드를 입력하세요"
//                     />
//                 </FormGroup>

//                 <SubmitButton type="submit">
//                     회원가입
//                 </SubmitButton>
//             </SignUpForm>
//         </Container>
//     );
// };

// export default SignUpPage;

// // styled-components 영역

// const Container = styled.div`
//     width: 400px;
//     margin: 50px auto;
// `;

// const Title = styled.h2`
//     margin-bottom: 20px;
//     font-size: 24px;
// `;

// const FormTitle = styled.h3`
//     padding-bottom: 8px;
//     margin-bottom: 20px;
//     border-bottom: 2px dotted black;
// `;

// const SignUpForm = styled.form`
//     display: flex;
//     flex-direction: column;
//     gap: 16px;
// `;

// const FormGroup = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 6px;
// `;

// const Label = styled.label`
//     font-size: 15px;
//     font-weight: bold;
// `;

// const Input = styled.input`
//     padding: 10px;
//     border: 1px solid #cccccc;
//     border-radius: 4px;
//     font-size: 14px;

//     &:focus {
//         outline: none;
//         border-color: #333333;
//     }
// `;

// const SubmitButton = styled.button`
//     padding: 12px;
//     border: none;
//     border-radius: 4px;
//     background-color: #333333;
//     color: white;
//     font-size: 15px;
//     cursor: pointer;

//     &:hover {
//         background-color: #555555;
//     }
// `;