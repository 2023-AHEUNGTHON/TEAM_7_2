import styled from "styled-components"
import { Link } from "react-router-dom";
const Div=styled.div`
position:absolute;
bottom:25px;
right:300px;
z-index:1;
`;
function GiftBtn(){
    return(
    <Link to="/gift0">
    <Div>
    <img src={`${process.env.PUBLIC_URL}/img/gift.svg`} />
    </Div>
    </Link>
    )

}export default GiftBtn;