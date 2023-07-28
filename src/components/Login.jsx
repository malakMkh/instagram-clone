import React from 'react';
import styled from 'styled-components';
const login = () => {
  return (
    <Container>
      <Form>
        <img
          src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="logo"
        />
        <input type="text" placeholder="UserName" />
        <input type="text" placeholder="UserID" />
        <input type="password" placeholder="UserPasssword" />
        <button> Log in</button>
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
export default login;
