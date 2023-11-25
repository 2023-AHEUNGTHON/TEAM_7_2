import { Link } from "react-router-dom";
import styled from "styled-components";
import Cancel from "../assets/Icon/cancel.png";

const NavigationBar = styled.div`
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  left: 0;
  margin-left: 1%;
`

const NavigationMessage = styled.p`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #262626;
  margin-bottom: 0.5rem;
`

const Button = styled.button`
  background-color: transparent;
  border: 0;
  
  &:hover{
    cursor:pointer;
  }
`

function SaveLocation() {
  return (
    <>
      <NavigationBar>
        <Link to="/main">
        <Button>
          <Img src={Cancel} alt="취소" />
        </Button>
        </Link>
          <NavigationMessage>주소 지정하기</NavigationMessage>
      </NavigationBar>
      {/* <Map></Map>
      <Select></Select> */}
    </>
  );
}

export default SaveLocation;
