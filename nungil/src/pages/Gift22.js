import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import Backspace from "../components/Backspace";
import Sub from "../components/Sub";
import Tip from "../components/Tip";
import Button2 from "../components/Button2";

const Setting = styled.div`
  margin: 0 0 360px 8%;
`;

const Input = styled.input`
  width: 21.125em;
  height: 2.8125em;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  padding: 0.5em 1em;
  background-color: #fafafa;
  color: #262626;
  font-size: 0.875em;

  &::placeholder {
    color: #909090;
  }
`;

const CenterBox = styled.div`
  text-align: center;
`;

function Gift22() {
    const location=useLocation();

    const Pn=location.state.pn;
    const Lt=location.state.lt;
    const Ans=location.state.ANS;
    const Quiz=location.state.QUIZ;
    const Addr=location.state.ADD;
    const Lati=location.state.LAT;
    const Long=location.state.LNG;
    const User=location.state.UI;
    const [userName,setName]=useState("");

    

    console.log(Pn,Lt,Ans,Quiz,Addr);

    const nameChangeHandler = (event) => {
        const newName = event.target.value
        console.log(newName);
        setName(newName);
    };

  const isButtonDisabled = userName.length === 0; // 이름이 비어있으면 버튼 비활성화

  const handleSubmit = (event) => {
    if (isButtonDisabled) {
      event.preventDefault();
    } else {
        //통신
        //createMap에서 선물추가 누를때 거기서 userId 받아와야함.
         axios({
             method:"POST",
             url: `https://api.nungil.shop/api/place/register`,
             data:{
                 "placeName" : Pn,
	               "placeProvider" : userName,
	               "placeDescription" :Lt,
                 "address":Addr,
	               "latitude" : Lati,
	               "longitude" : Long,
	               "quiz" : Quiz,
	               "quizAnswer" : Ans,
                 "userId":User
             }
         }).then((res)=>{
             console.log("통신성공")
             console.log(res);
              <Link to='/gift3'/>
         }).catch(error=>{
             console.log("통신실패");
             console.log(error);
             throw new Error(error);
         });
        
    }
  };

  return (
    <>
      <Backspace />
      <Setting>
        <Header head="닉네임 입력하기" />
        <Sub explan="장소를 추천 받을 때 쓰일 닉네임을 입력해주세요." />
        <Sub explan="입력하신 닉네임은 타인에게 보이게 돼요." />
        <form>
          <Input
            type="text"
            placeholder="닉네임을 입력하세요"
            onChange={nameChangeHandler}
            value={userName}
            maxLength="8"
          />
        </form>
        <Tip text="*최대 8자까지"></Tip>
      </Setting>
      <CenterBox>
        <Link to='/gift3'>
        <Button2 text="장소선물 완료하기" type="submit" onClick={handleSubmit} />
        </Link>
      </CenterBox>
    </>
  );
}export default Gift22;
