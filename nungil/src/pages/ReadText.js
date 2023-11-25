import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import {useLocation} from "react-router-dom";
import ModalBg from "../components/ModalBg";
import DialogBox from "../assets/modal/dialogbox.png";

const Modal = styled.div`
  position: fixed;
  z-index: 3;
  top: 40vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContent = styled.div`
  position: relative;
  width: 21.0625rem;
  height: 16.125rem;
  background-image: url(${DialogBox});
  background-size: cover;
  border-radius: 15px;
`;

const Text = styled.div`
  position: absolute;
  top: 25%;
  left: 10%;
  right: 10%;
  height: 7.5rem;

  color: #505050;
  font-size: 0.875rem;
  font-weight: 600;
`

const Name = styled.p`
  position: absolute;
  left: 10%;
  top: 73%;
  font-size: 0.75rem;
  font-weight: 600;
  color: #9B9B9B;
`
function ReadText() {
  const location=useLocation();
  const placeId=location.state.placeId;

  const [letter,setLetter]=useState();
  const [name,setName]=useState();
  axios.get(`https://api.nungil.shop/api/user/${placeId}/place`)
    .then((res)=>{
      console.log("통신성공")
      console.log(res.data);
      setLetter(res.data.placeDescription);
      setName(res.data.Provider);
  }).catch(error=>{
      console.log("통신실패");
      console.log(error);
      throw new Error(error);
  });

  return (
    <>
      <ModalBg />
      <Modal>
        <ModalContent>
            <Text>어흥올림픽화이팅
            </Text>
            <Name>숭멋사</Name>
        </ModalContent>
      </Modal>
     {/*백그라운드 사진 */}
    </>
  );
}

export default ReadText;
