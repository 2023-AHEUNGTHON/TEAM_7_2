import styled from "styled-components";
import { Link } from "react-router-dom";
import Main from "./Main"; // 다른 지도로 바꿔줘야 함 (캐러셀 있는 지도로 변경)
import ModalBg from "../components/ModalBg";
import Button2 from "../components/Button2";
import QuizBox from "../assets/modal/quizbox.png";

const Modal = styled.div`
  position: fixed;
  z-index: 3;
  top: 73vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContent = styled.div`
  width: 24.5625rem;
  height: 32.0625rem;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  text-align: center;
`;

const Header = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #262626;
  text-align: start;
  margin-left: 8%;
`;

const ImgBox = styled.div`
  height: 7rem;
  margin-top: 5rem;
  margin-bottom: 3rem;
`;

const FlexBox = styled.div`
  display: flex;
  margin-left: 8%;
  margin-bottom: 0.875rem;
`;

const Red = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #fa7268;
`;

const Black = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #262626;
`;

const List = styled.li`
  font-size: 0.875rem;
  font-weight: 500;
  color: #505050;
  text-align: start;
  margin-bottom: 0.5rem;
`;

const LaterBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #c5c5c5;
  margin-top: 20px;
  margin-bottom: 15px;
`;

function QuizModal() {
  return (
    <>
      <ModalBg />
      <Modal>
        <ModalContent>
          <Header>잠시만요!</Header>
          <Header>이 글귀는 퀴즈를 맞춰야만 볼 수 있어요</Header>
          <ImgBox>
            <img src={QuizBox} alt="퀴즈 박스" />
          </ImgBox>
          <FlexBox>
            <Red>숭멋사</Red>
            <Black>님께서 퀴즈를 출제했어요.</Black>
          </FlexBox>
          <ul>
            <List>이 글귀는 퀴즈가 포함되어 있어요.</List>
            <List>퀴즈를 맞추지 못하면 해당 글귀를 읽지 못해요.</List>
            <List>걱정마세요! 힌트도 제공해요.</List>
          </ul>
          <Link to="/quizanswer">
            <Button2 text="퀴즈 풀러 가기" />
          </Link>
          <Link to="/main">
            <LaterBtn>다음에 풀기</LaterBtn>
          </Link>
        </ModalContent>
      </Modal>

      <Main />
    </>
  );
}

export default QuizModal;
