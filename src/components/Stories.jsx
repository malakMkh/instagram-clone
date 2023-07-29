import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { styled } from 'styled-components';
import { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useEffect } from 'react';

const Stories = () => {
  // State variable to hold the width of the window
  const [width, setWidth] = useState(window.innerWidth);
  // Function to update the width state on window resize
  function handleResize() {
    setWidth(window.innerWidth);
  }

  // Component for the previous arrow icon
  const PrevArrow = ({ currentSlide, slideCount, ...arrowProps }) => (
    <ArrowBackIosIcon {...arrowProps} />
  );

  // Component for the next arrow icon
  const NextArrow = ({ currentSlide, slideCount, ...arrowProps }) => (
    <ArrowForwardIosIcon {...arrowProps} />
  );
  // Effect hook to add a resize event listener when the component mounts

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);
  // Settings for the Slider component
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: width < 400 ? 4 : width < 768 ? 5 : 7,
    slidesToScroll: width < 400 ? 3 : width < 768 ? 4 : 5,
    autoplay: false,
    prevArrow: width < 770 ? <></> : <PrevArrow />, // Show PrevArrow component if width >= 770, otherwise hide
    nextArrow: width < 770 ? <></> : <NextArrow />, // Show NextArrow component if width >= 770, otherwise hide
  };
  return (
    <Container {...settings}>
      <UserStory>
        <img
          src="https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg"
          alt="user"
        />
        <p>Add Story</p>
      </UserStory>

      <UserStory>
        <img
          src="https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg"
          alt="user"
        />
        <p> User</p>
      </UserStory>
      <UserStory>
        <img
          src="https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg"
          alt="user"
        />
        <p> User</p>
      </UserStory>
      <UserStory>
        <img
          src="https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg"
          alt="user"
        />
        <p> User</p>
      </UserStory>
      <UserStory>
        <img
          src="https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg"
          alt="user"
        />
        <p> User</p>
      </UserStory>
      <UserStory>
        <img
          src="https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg"
          alt="user"
        />
        <p> User</p>
      </UserStory>
      <UserStory>
        <img
          src="https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg"
          alt="user"
        />
        <p> User</p>
      </UserStory>
      <UserStory>
        <img
          src="https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg"
          alt="user"
        />
        <p> User</p>
      </UserStory>
    </Container>
  );
};

const Container = styled(Slider)`
  border: none;
  border-radius: 4px;
  width: 60%;
  margin: 20px 0 20px 110px;
  padding: 10px 0;
 height:90px;
 
  svg {
    color: rgba(0, 0, 0, 0.9);
  }

  
  }
`;

const UserStory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: min-content;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  margin-left: 7px;

  img {
    max-width: 60px;
    max-height: 60px;
    border-radius: 50%;
    border: 3px solid #faa61a;
  }
`;

export default Stories;
