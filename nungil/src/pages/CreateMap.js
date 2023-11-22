import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Backspace from "../components/Backspace";
import Sub from "../components/Sub";
import Tip from "../components/Tip";
import Button from "../components/Button";

const Setting = styled.div`
  margin: 0 0 360px 8%;
`;

const FlexBox = styled.div`
  display: flex;
`;

const BoldPage = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #000000;
`;

const Page = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #b1b1b1;
`;

const Input = styled.input`
  width: 21.125em;
  height: 2.8125em;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  padding: 0.5em 1em;
  background-color: #fafafa;
  color: #909090;
  font-size: 0.875em;
`;

const CenterBox = styled.div`
  text-align: center;
`;

function CreateMap() {
  return (
    <>
      <Backspace />
      <Setting>
        <FlexBox>
          <BoldPage>1</BoldPage>
          <Page>/2</Page>
        </FlexBox>
        <Header head="닉네임 입력하기" />
        <Sub explan="장소를 추천 받을 때 쓰일 닉네임을 입력해주세요." />
        <Sub explan="입력하신 닉네임은 타인에게 보이게 돼요." />
        <form>
          <Input type="text" placeholder="닉네임을 입력하세요" />
        </form>
        <Tip text="*최대 8자까지"></Tip>
      </Setting>
      <CenterBox>
        <Link to="/createmap1">
          <Button text="다음으로" />
        </Link>
      </CenterBox>
    </>
  );
}

export default CreateMap;
