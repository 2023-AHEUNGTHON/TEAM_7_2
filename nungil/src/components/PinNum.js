import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
const Div=styled.div`
position:absolute;
bottom:100px;
right:297px;
z-index:1;
`;

const Number=styled.div`
    position:absolute;
    z-index:1;
    font-size: 13px;
    font-weight: 600;
    text-align: center;
    color:#ffffff;
    bottom:13px;
    right:11px;
`;
function PinNum(){
    const [num,setNum]=useState();
    function ChangeHandler(){
        axios.get(`https://api.nungil.shop/api/user/${1}/places/count`
        ).then((res)=>{
        console.log(res);
        setNum(res);
        }).catch((Error)=>{
        console.log(Error);
        })
    }
    return(
        <Div>
        <img src={`${process.env.PUBLIC_URL}/img/Num.svg`} />
        <Number onChange={ChangeHandler}>{num}개</Number>
        </Div>
    )
}export default PinNum;