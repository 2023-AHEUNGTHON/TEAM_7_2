import { Link } from "react-router-dom";
import styled from "styled-components";
import ModalBg from "../components/ModalBg";
import Gift2 from "./Gift2";
import MsgGift from "../components/MsgGift";

const Modal = styled.div`
  position: fixed;
  z-index: 3;
  top: 40vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContent = styled.div`
  position: relative;
  width: 14.6875rem;
  height: 10.5625rem;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LottieBox = styled.div`
  position: relative;
  width: 5.9375rem;
  height: 5.9375rem;
  margin-top: -25%;
`;

const CompleteHeader = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: #262626;
  margin: 0.3rem 0 0.5rem 0;
`;

const CompleteSub = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: #9b9b9b;
  margin: 0 0 1.25rem 0;
`;
const Btn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.875rem;
  font-weight: 700;
  color: #fa7268;

  &:hover {
    cursor: pointer;
  }
`;

function Gift3() {
  return (
    <>
      <ModalBg />
      <Modal>
        <ModalContent>
          <LottieBox>
            <MsgGift />
          </LottieBox>
          <CompleteHeader>장소 선물 완료</CompleteHeader>
          <CompleteSub>숭멋사 님에게 전달 완료 했어요.</CompleteSub>
          <Link to="/maintest">
            <Btn>확인</Btn>
          </Link>
        </ModalContent>
      </Modal>
      <Gift2 />
    </>
  );
}

export default Gift3;
