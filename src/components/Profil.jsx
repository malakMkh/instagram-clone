import React from 'react';
import { styled } from 'styled-components';

const Profil = () => {
  return (
    <Container>
      <img alt="profilePic" />
      <Info>
        <p className="UserID">Malak</p>
        <Stats>
          <p>
            <strong>Statistic</strong> Posts
          </p>
          <p>
            <strong> Statistic</strong> Followers
          </p>
          <p>
            <strong> Statistic</strong> Following
          </p>
        </Stats>
        <Bio>
          <p className="name">
            <strong>Name</strong>
          </p>
          <p className="category">Softwar Engineering</p>
        </Bio>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  max-width: 720px;
  margin: 30px auto;
  padding-bottom: 40px;

  span {
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: tomato;
    }
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: contain;
    border: 1px solid #ebdddd;
  }

    margin: 20px auto;
    font-size: 11px;
    padding: 0;
  }
`;

const Info = styled.div`
  width: 60%;
  .UserID {
    font-size: 30px;
  }
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;
`;
const Bio = styled.div`
  p {
    margin: 2px 0;
  }
  .category {
    color: gray;
  }
`;

export default Profil;
