import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInformation } from '../Redux/UserInformation';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userID, setUserID] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const UserInformation = useSelector((store) => store.UserInformations);
  const ExistedUsers = Object.keys(UserInformation);
  const CheckLogin = (e) => {
    e.preventDefault();
    if (ExistedUsers.indexOf(userID) !== -1) {
      let warn = document.querySelector('.warning');
      warn.classList.add('active');

      setTimeout(() => {
        warn.classList.remove('active');
      }, 3000);

      return;
    }
    navigate('/home');
    dispatch(getUserInformation([userID, userName, password]));
  };
  /* This code uses useEffect to disable a button when any of the values userID, userName, or password is missing or not defined,
  and re-enables the button as soon as all these values are provided. This could be useful for validating a form or preventing the
  user from submitting incomplete information. */
  useEffect(() => {
    let btn = document.querySelector('button');
    if (!userID || !userName || !password) {
      btn.setAttribute('disabled', 'true');
    } else {
      btn.removeAttribute('disabled');
    }
  }, [userID, userName, password]);

  return (
    <Container>
      <Form>
        <img
          src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="logo"
        />
        <input
          type="text"
          placeholder="UserName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="UserID"
          onChange={(e) => setUserID(e.target.value)}
        />
        <input
          type="password"
          placeholder="UserPasssword"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={CheckLogin}> Log in</button>
      </Form>
      <div className="warning">Username already exist</div>
    </Container>
  );
};
//Create a container component that'll render a <div> tag with some styles
const Container = styled.div`
  background: linear-gradient(135deg, #dd2a7b, #faa61a, #d62976);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .warning {
    position: absolute;
    bottom: 20px;
    opacity: 0;
    color: green;
    background: white;
    font-size: 15px;
    padding: 10px 5px;
    width: 260px;
    text-align: center;
    font-weight: bold;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }

  .warning.active {
    bottom: 60px;
    opacity: 1;
  }
`;
//Create a Form component that'll render a <form> tag with some styles
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 6px 8px 10px -9px black;
  width: 300px;
  height: 310px;

  img {
    width: 170px;
    margin-bottom: 20px;
    margin-top: 15px;
  }
  input {
    margin: 10px;
    border: 1px solid #757676;
    border-radius: 10px;
    height: 30px;
    width: 70%;
    outline: 0;
    padding: 7px 10px;
  }
  button {
    margin-bottom: 20px;
    margin-top: 10px;
    width: 70%;
    padding: 7px 10px;
    outline: none;
    border: none;
    background-color: royalblue;
    color: white;
    cursor: pointer;
    border-radius: 15px;
    font-weight: bold;

    &:hover {
      background: linear-gradient(135deg, white, blue, white);
    }
  }
`;
export default Login;
