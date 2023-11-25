import {useLocation,useNavigate} from "react-router-dom";
import React,{useState} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Backspace from "../components/Backspace";
import Sub from "../components/Sub";
import Button2 from "../components/Button2";

const Input=styled.input`
    width:338px;
    height:45px;
    border-radius:10px;
    gap:10px;
    padding: 8px, 16px, 8px, 16px;
    font-size:14px;
    color:#909090;
    border: 1px solid #F1F1F1;
    background: linear-gradient(0deg, #F1F1F1, #F1F1F1),
    linear-gradient(0deg, #FAFAFA, #FAFAFA);

`;
// const Label=styled.label`
    
//     font-size:14px;
//     color:#909090;
//     font-weight:600;

// `;
const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
`;

function Gift2() {
    const location=useLocation();
    const navigate=useNavigate();

    const [quiz,setQuiz]=useState("");
    const [ans,setAns]=useState("");

    const PN=location.state.pn;
    const LT=location.state.lt;

    console.log(PN,LT);

    const QuizChangeHandler = (event) => {
        const newName = event.target.value
        console.log(newName);
        setQuiz(newName);
    };

    const AnsChangeHandler = (event) => {
        const newName = event.target.value
        console.log(newName);
        setAns(newName);
    };
   

    const handleSubmit = () => {
        navigate('/gift22',{
            state:{
                pn:PN,
                lt:LT,
                ANS:ans,
                QUIZ:quiz,
                ADD:location.state.add,
                LAT:location.state.lat,
                LNG:location.state.lng,
                UI:location.state.ui
            }
          });
        
};
    return (
    <Wrapper>
    <Backspace/>
    <Header head="(선택) 퀴즈를 낼 수 있어요"/>
    <Sub explan="상대방이 퀴즈를 맞춰야지만 작성하신 글귀를 볼 수 있어요."/>
    <Sub explan="퀴즈는 단답식만 가능해요"/>
    <Sub explan="문제"/>
    <Input  
    type="text"
    onChange={QuizChangeHandler}
    placeholder="문제를 입력하세요."/>
    <Sub explan="정답"/>
        <Input 
        type="text"
        onChange={AnsChangeHandler} 
        placeholder="문제의 정답을 입력하세요."/>
        <Button2 onClick={handleSubmit} text="다음으로" />
    </Wrapper>
    )
}export default Gift2;

