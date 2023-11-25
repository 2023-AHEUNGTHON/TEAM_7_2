import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Backspace from "../components/Backspace";
import Sub from "../components/Sub";
import Button from "../components/Button";
import Present from "../assets/Icon/present.png";
import Copy from "../assets/Icon/copy.png";

const Setting = styled.div`
  margin: 0 0 0 8%;
`;

const FlexBox = styled.div`
  display: flex;
`;

const Icon = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  margin-left: 1%;
`;

const CenterText = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: #ababab;
`;

const Address = styled.div`
  width: 21.125em;
  height: 2em;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  padding: 0.5em 1em;
  background-color: #fafafa;
  color: #909090;
  margin: 0 auto 0 auto;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 9rem;
  height: 2.5rem;
`;

const Tip = styled.div`
  font-size: 0.675rem;
  font-weight: 600;
  color: #ababab;
  text-decoration: underline;
  margin-top: 17.875rem;
  cursor: pointer;
`;

const handleCopyClick = (textToCopy) => {
  navigator.clipboard.writeText(textToCopy);
};

function CreateMap2() {
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get("userId");

  const handleClick = () => {
    handleCopyClick("https://team-7-2.vercel.app/main0/" + userId); // 원하는 URL로 변경, 추후 동적으로 변경해줘야 함
  };
  return (
    <>
      <Link to="/createmap1">
        <Backspace />
      </Link>
      <Setting>
        <Header head="이제 장소를 선물 받을 준비가" />
        <FlexBox>
          <Header head="완료 되었어요" />
          <Icon src={Present} alt="선물 상자" />
        </FlexBox>
        <Sub explan="아래의 URL을 복사하여 SNS에 공유하고," />
        <Sub explan="친구들에게 장소를 선물 받으세요." />
      </Setting>
      <CenterText>공유 링크</CenterText>
      <Address onClick={handleClick}>
        <p>{"https://team-7-2.vercel.app/main0/" + userId}</p>
      </Address>
      <CenterBox>
        <ImgBox>
          <img src={Copy} alt="박스를 누르면 복사가 돼요!" />
        </ImgBox>
        <Tip onClick={handleClick}>복사가 안된다면 여기 클릭</Tip>
        <Link to="/createmap">
          <Button text="처음으로 돌아가기" />
        </Link>
      </CenterBox>
    </>
  );
}

export default CreateMap2;
