import styled from "styled-components";
import { Link } from "react-router-dom";
import Backspace from "../components/Backspace";
import Button2 from "../components/Button2";

const Logo = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #e0e0e0;
`;

const Question = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #262626;
  margin-bottom: 50px;
`;

const InputBox = styled.input`
  border: none;
  border-bottom: 1.5px solid #909090;
  font-size: 1rem;
  font-weight: 500;
  color: #262626;
  outline: none;

  &::placeholder {
    color: #b0b0b0;
  }
`;

const Info = styled.p`
  font-size: 0.6875rem;
  font-weight: 500;
  color: #ef4a3e;
  margin-bottom: 50px;
`;

const MainBox = styled.div`
  margin-left: 8%;

`

function QuizAnswer() {
  return (
    <>
      <Link to="/quizmodal">
        <Backspace />
      </Link>
      <MainBox>
      <Logo>Q.</Logo>
      <Question>
        [동물퀴즈] 숭실대학교의 상징 동물은 말입니다. 마스코트의 이름은
        무엇일까요?
      </Question>
      <InputBox type="text" placeholder="정답을 입력하세요"></InputBox>
      <Info>글자 수는 3개이고, '슝_이' 입니다.</Info>
      <Button2 text="답변 제출하기" />
      </MainBox>
    </>
  );
}

export default QuizAnswer;
