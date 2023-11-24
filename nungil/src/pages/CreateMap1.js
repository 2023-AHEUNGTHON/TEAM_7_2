import React, { useState, useEffect } from "react";
import axios from "axios";
import useCurrentLocation from "../hooks/useCurrentLocation";
import { useLocation, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Backspace from "../components/Backspace";
import Sub from "../components/Sub";
import Button2 from "../components/Button2";

const Setting = styled.div`
  margin: 0 0 350px 8%;
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
  width: 11.0625em;
  height: 2.8125em;
  padding: 6px 4px -4px 0px;
  font-size: 1.25em;
  color: #000000;
  border: none;
  border-bottom: 1.5px solid;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

const FormText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #909090;
  font-size: 1.25rem;
  margin-bottom: 0;
`;
const FormUnderText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #909090;
  font-size: 1.25rem;
  margin: 10px 0 0 0;
`;

const CenterBox = styled.div`
  text-align: center;
`;

// 위치를 가져오는 데 사용할 옵션 설정
const geolocationOptions = {
  enableHighAccuracy: false,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

function CreateMap1() {
  const [place, setPlace] = useState("");
  const location = useLocation();
  const userName = new URLSearchParams(location.search).get("userName");
  const navigate = useNavigate();

  const { location: currentLocation, error: currentError } =
    useCurrentLocation(geolocationOptions);

  useEffect(() => {
    // 오류가 발생했을 때 처리
    if (currentError) {
      console.error("Error occurred:", currentError);
    }

    // currentLocation이 정의되었을 때만 값을 읽음, 여기 위도 경도 post 보내면 될듯
    if (currentLocation) {
      console.log("Latitude(위도):", currentLocation.latitude);
      console.log("Longitude(경도):", currentLocation.longitude);
    }
  }, [currentLocation, currentError]);

  const placeChangeHandler = (event) => {
    setPlace(event.target.value);
  };

  const isButtonDisabled = place.length === 0; // 이름이 비어있으면 버튼 비활성화

  // 버튼 클릭 시 동작
  const handleSubmit = (event) => {
    if (isButtonDisabled) {
      event.preventDefault();
    } else {
      axios
        .post("https://api.nungil.shop/api/user/register", {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          placeTheme: place,
          userName: userName,
        })
        .then((res) => {
          console.log("통신 성공", res);
          navigate(`/createmap2?userId=${encodeURIComponent(res)}`);
        })
        .catch((err) => {
          console.log("통신 에러", err);
        });

      console.log(userName, place); // 값 확인용 데이터
      
      // 데이터 이동하는지 보기 위해 임시로 1 대입, res로 수정하면 될듯
      // navigate("/createmap2"); // router에서 제공하는 navigate Hook (페이지 이동)
    }
  };

  return (
    <>
      <Link to="/createmap">
        <Backspace />
      </Link>
      <Setting>
        <FlexBox>
          <BoldPage>2</BoldPage>
          <Page>/2</Page>
        </FlexBox>
        <Header head="장소 테마 정하기" />
        <Sub explan="추천 받고 싶은 장소의 테마를 정해주세요" />
        <form>
          <FormText>{userName} 님은</FormText>
          <FlexBox>
            <Input
              type="text"
              placeholder="소소한 여행 플레이스"
              onChange={placeChangeHandler}
            />
            <FormText>(을)를</FormText>
          </FlexBox>
          <FormUnderText>선물 받고 싶어요.</FormUnderText>
        </form>
      </Setting>
      <CenterBox>
        {/* <Link to="/createmap2"> */}
        <Button2 text="다음으로" onClick={handleSubmit} />
        {/* </Link> */}
      </CenterBox>
    </>
  );
}

export default CreateMap1;
