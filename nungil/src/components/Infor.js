import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


//클릭 x 
const Div=styled.div`
    position:absolute;
    width: 265px;
    height: 105px;
    background-color:#ffffff;
    bottom:100px;
    right:340px;
    z-index:1;
    border-radius:30px;
    padding: 10px;
    border: 1px solid #E0E0E0;
    color:#262626;
`;
//클릭
const Div2=styled.div`
    position:absolute;
    width: 265px;
    height: 105px;
    background-color:#303030;
    bottom:100px;
    right:340px;
    z-index:1;
    border-radius:30px;
    padding: 10px;
    border: 1px solid #303030;
    
`;
const Loc=styled.div`
    
    font-size: 13px;
    font-weight: 600;
    text-align: center;
    

    `;
const Add=styled.div`
    
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    color:#707070;
    `;
const ImgDiv=styled.div`
    margin-left:210px;
    margin-top:14px;
`;
const ImgDiv2=styled.div`
    margin-left:15px;
    margin-top:15px;
`;
//props로 클릭된 props 받아오기
function Infor(props){
    const navigate=useNavigate();
    const handleSubmit = () => {
        navigate('/readtext',{
            state:{
                placeId:props.placeId
            }
          });
        
};
    
    return(
        <>
        <Div>
            <ImgDiv2>
            <img src={`${process.env.PUBLIC_URL}/img/basicmarker.svg`}/>
            </ImgDiv2>
            <Loc>{props.placeName}</Loc>
            <Add>{props.address}</Add>
            <Link to='/readtext'>
            <ImgDiv onClick={handleSubmit}>
            <img src={`${process.env.PUBLIC_URL}/img/letter.svg`}/>
            </ImgDiv>
            </Link>
        </Div>
        
        </>
    )


}export default Infor;