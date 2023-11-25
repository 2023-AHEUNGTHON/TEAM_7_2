import {useNavigate,useLocation, Link } from "react-router-dom";
import React,{useState} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Backspace from "../components/Backspace";
import Sub from "../components/Sub";
import Button2 from "../components/Button2";

const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
`;
const Input=styled.input`
    width:338px;
    height:45px;
    border-radius:10px;
    gap:10px;
    padding: 8px, 16px, 8px, 16px;
    font-size:14px;
    font-color:#909090;
    border: 1px solid #F1F1F1;
    background: linear-gradient(0deg, #F1F1F1, #F1F1F1),
    linear-gradient(0deg, #FAFAFA, #FAFAFA);

`;
const Div=styled.div`
    font-color:#909090;
    font-size:11px;
    margin-top:10px;
    margin-left:5px;

    &:focus{
        outline : none;
    };
    
`;

const Setting = styled.div`
  margin: 0 0 350px 8%;
`;

function Gift() {
    const [placeName,setPlaceName]=useState("");
    const location=useLocation();
    const navigate=useNavigate();
    // const location=useLocation();
    // const latitud=location.state.lat;
  
    const ChangeHandler = (event) => {
        const newName = event.target.value
        console.log(newName);
        setPlaceName(newName);
      };
   

    const isButtonDisabled = placeName.length === 0;

    const handleSubmit = (event) => {
        if (isButtonDisabled) {
          event.preventDefault();
        } else {
          navigate('/gift1',{
            state:{
                PN: placeName,
                ADD:location.state.Address,
                Lat:location.state.Latitude,
                Lng:location.state.Longitude,
                Ui:location.state.UserId
            }
          });
        }
        
      };

    return (
    <>

      <Link to="/gift0">
        <Backspace/>
      </Link>
      <Setting>
        <Header head="장소의 이름을 정해주세요"/>
        <Sub explan="지정하신 장소를 부를 이름을 정해세요."/>
        <Sub explan="ex) 숭실대 조만식기념관 옆 나무계단"/>
        <Input 
        type="text" 
        onChange={ChangeHandler} 
        placeholder="  장소의 이름을 입력하세요."/>
        <Div>*정해주신 장소의 이름이 지도 상에서 보이게 돼요.</Div>
        <Button2 onClick={handleSubmit} text="다음으로" />
        {/* <Link to="/gift1">
          
        </Link>
         */}
    </Setting>
    </>
    )
}

export default Gift;

