import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const Navbar = () => {
  return (
    <NavBar>
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        alt="logo"
      />
      <div className="navigation">
        <div className="Icon">
          <div className="HomeIcon">
            {' '}
            <HomeIcon />
          </div>
          <div className="ChatIcon">
            <ChatBubbleOutlineOutlinedIcon />
          </div>
          <div className="PersonIcon">
            {' '}
            <PersonOutlineOutlinedIcon />
          </div>
        </div>
        <div className="input-field">
          <input type="texte" placeholder="Search" />
          <SearchIcon style={{ color: 'black', fontSize: 20 }} />
        </div>
      </div>
    </NavBar>
  );
};
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 50px;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 150px;
    padding: 10px;
    margin-left: 20px;
  }
  input {
    border: none;
    background-color: lightgray;
    width: 100%;
    border-radius: 8px;
    padding: 10px;
  }
  .input-field {
    display: flex;
    width: 150px;
    height: 25px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 8px;
    background-color: lightgray;
  }
  .Icon {
    display: flex;
  }
  .ChatIcon {
    padding-left: 15px;
    padding-right: 15px;
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export default Navbar;
