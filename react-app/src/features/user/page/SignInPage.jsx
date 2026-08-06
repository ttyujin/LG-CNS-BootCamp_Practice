import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { touchRippleClasses } from '@mui/material';
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

const SignInPage = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const moveUrl = useNavigate();

  const keyHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /* 
  CRUD
  axios:get(),post(),put()|patch(),delete();
  QueryString(url 뒤에 직접 바인딩) -> router에서도 확인이 가능하다!!!

  api.get('url?email=xxxxx&password=xxxxx);
  api.get('url',{
      params:{
      email:form.email,
      password:form.password
      }
      })
  */

  const signInHandler = async (e) => {
    e.preventDefault();

    await api.get(`/users?email=${form.email}&password=${form.password}`)
      .then(response => {
        console.log(`debug >>>> axios request success : `, response);
        if (response.status === 200) {
          localStorage.setItem('user', response.data[0].email);

          moveUrl('/blogs/index');
        }
      })
      .catch(error => {
        console.log(`debug >>>> axios request error : `, error);
      });
  }


  return (
    <Container>
      <FormWrapper>
        <Title>SignIn</Title>
        <form onSubmit={signInHandler}>
          <Input
            type='email'
            name='email'
            placeholder="이메일 입력하세요"
            value={form.email}
            onChange={(keyHandler)}
          />
          <Input
            type='password'
            name='password'
            placeholder="패스워드 입력하세요"
            value={form.password}
            onChange={(keyHandler)}
          />
          <Button type='submit'>로그인하기</Button>
        </form>
        <TextLink to='/'>다시 회원가입</TextLink>
      </FormWrapper>
    </Container>
  )
}

export default SignInPage;