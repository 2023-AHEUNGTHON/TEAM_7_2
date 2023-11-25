import {useLocation,useNavigate} from "react-router-dom";

import React,{useState} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Backspace from "../components/Backspace";
import Sub from "../components/Sub";
import Button2 from "../components/Button2";
import Tip from "../components/Tip";

const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
`;

const Input=styled.input`
    width: 338px;
    height: 252px;
    top: 114px;
    padding: 26px, 184px, 213.9px, 25px;
    border-radius: 20px;
    gap: 10px;
    background-color:#FA72681A;
    opacity:0.9;
    border:none;
    font-size:14px;
    font-color:#9B9B9B;
`;

function Gift1() {
    const location=useLocation();
    //letter받기
    const [letter,setLetter]=useState("");
    //로케이션으로 placeName넘겨받기
    const placeName=location.state.PN;

    const navigate=useNavigate();

    const ChangeHandler = (event) => {
        const newName = event.target.value
        console.log(newName);
        setLetter(newName);
      };
   

    const isButtonDisabled = letter.length === 0;

    const handleSubmit = (event) => {
        if (isButtonDisabled) {
          event.preventDefault();
        } else {
          navigate('/gift2',{
            state:{
                pn : placeName,
                lt : letter,
                add:location.state.ADD,
                lat:location.state.Lat,
                lng:location.state.Lng,
                ui:location.state.Ui
            }
          });
        };
        
    };

    return (
    <Wrapper>
    <Backspace/>
    <Header head="글귀를 작성해주세요"/>
    <Sub explan="해당 장소에 얽힌 당신만의 이야기를 남겨주세요."/>
    <Sub explan="가벼운 이야기도 좋아요."/>
    <Input 
     type="text" 
     onChange={ChangeHandler}
     maxLength="100"
     placeholder="   이야기를 작성해주세요."/>
    <Tip text="최대 100자"/>
    <Button2 onClick={handleSubmit} text="다음으로" />

    </Wrapper>
    )
}

export default Gift1;

