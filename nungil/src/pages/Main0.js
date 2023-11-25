import styled from "styled-components";
import {useLocation,useNavigate} from "react-router-dom";
import ModalBg from "../components/ModalBg";

import Explan from "../assets/modal/explan.png";
import Button2 from "../components/Button2";
import MainTest from "./MainTest";

const Modal = styled.div`
  position: fixed;
  z-index: 3;
  top: 40vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContent = styled.div`
  width: 21.75rem;
  height: 30.4375rem;
  background-color: #fff;
  border-radius: 15px;
  text-align: center;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
`;

const Black = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #505050;
`;

const Red = styled.p`
  font-size: 0.8125rem;
  font-weight: 700;
  color: #fa7268;
`;

const LaterBtn = styled.button`
  width: 338px;
  height: 45px;
  left: 7px;
  padding: 14px, 40px, 14px, 40px;
  border-radius: 10px;
  gap: 10px;
  border: none;
  color: #9B9B9B;
  font-weight: 600;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

function Main0() {
  const location=useLocation();
  const navigate=useNavigate();


  const params = new URLSearchParams(location.search);

  let userId = params.get("userId");

  console.log("params.get('name') >>> ", userId);

  const handleSubmit = () => {
    navigate('/gift',{
        state:{
          ui:userId
        }
  });
}
  const handleSubmit2 = () => {
    navigate('/MainTest',{
        state:{
          ui:userId
        }
  });
}

  return (
    <>
      <ModalBg />
      <Modal>
        <ModalContent>
          <Header>당신의 장소를 선물하세요</Header>
          <FlexBox>
            <Black>당신의 </Black>
            <Red>소소한 여행지 </Red>
            <Black>를 </Black>
            <Red>숭멋사</Red>
            <Black>님에게 선물하세요!</Black>
          </FlexBox>
          <FlexBox>
            <Black>
              위치를 추가하고, 짤막한 이야기로 추억을 나눌 수 있어요.
            </Black>
          </FlexBox>
          <img src={Explan} alt="설명" />
          <Button2 onClick={handleSubmit} text="장소 선물하러 가기" />
          <LaterBtn onClick={handleSubmit2}> 다음에 할게요</LaterBtn>
        </ModalContent>
      </Modal>
      <MainTest />
    </>
  );
}

export default Main0;