import React from 'react';
import styled from 'styled-components';
import AddCircleIcon from '@material-ui/icons/AddCircle';
const SideBar = () => {
  return (
    <div>
      <Container className="new-post">
        <div className="btn">
          <AddCircleIcon />
          <p>Add a Post</p>
          <div className="box"></div>
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  position: fixed;
  top: 40%;
  right: 20%;

  .btn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid hsl(147, 7%, 75%);
    border-radius: 15px;
    cursor: pointer;
    transition: transform 0.3s;

    .box {
      position: absolute;
      z-index: 0;
      height: 100%;
      width: 100%;
      transform: scale(0);
      opacity: 0;
      background: linear-gradient(135deg, #dd2a7b, #faa61a, #d62976);
      transition: all 0.3s;
      border-radius: 15px;
    }

    svg,
    p {
      z-index: 1;
      background: transparent;
      font-weight: bold;
    }

    svg {
      font-size: 30px;
      margin-right: 5px;
    }

    &:hover {
      transform: scale(1.1);
      svg,
      p {
        color: white;
      }

      .box {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`;

export default SideBar;
