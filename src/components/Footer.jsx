import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
      </ul>
      <p>© 2023 INSTAGRAM CLONE</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  text-align: center;
  font-size: 17px;
  color: black;
  background-color: lightgray;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    margin: 20px 0;

    li a {
      text-decoration: none;
      color: black;
      &:hover {
        color: white;
      }
    }
  }

  p {
    margin: 10px 0;
  }
`;

export default Footer;
