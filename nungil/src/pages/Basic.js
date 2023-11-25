import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import BasicImg from "../assets/Icon/basicImg.png";
import Basic1 from "../assets/Icon/basic1.png";
import Logo from "../assets/Icon/logo.png";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #fa7268;
  text-align: center;
  overflow-x: hidden;
`;

const LogoBox = styled.div`
  height: 125px;
  margin: 50px auto 0px auto;
`;

const TextBox = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: #fff;
`;
const ImgBox = styled.div`
  position: fixed;
  bottom: 0;
`;

function Basic() {
  const navigate = useNavigate();

  const ClickHandler = () => {
    navigate("/createmap");
  };
  
  return (
    <Background onClick={ClickHandler}>
      <LogoBox>
        <img src={Logo} alt="로고" />
      </LogoBox>
      <TextBox>
        <p>눈길 닿는 곳곳으로</p>
        <p>선물하는 추억</p>
      </TextBox>
      <ImgBox>
        <img src={BasicImg} alt="기본" />
      </ImgBox>
    </Background>
  );
}

export default Basic;
