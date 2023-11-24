import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import CreateMap from "./pages/CreateMap";
import Gift from "./pages/Gift";
import Gift1 from "./pages/Gift1";
import Gift2 from "./pages/Gift2";
import Gift3 from "./pages/Gift3";
import Main from "./pages/Main";
import CreateMap1 from './pages/CreateMap1';
import CreateMap2 from "./pages/CreateMap2";
import Gift0 from "./pages/Gift0";
import Main0 from "./pages/Main0";
import ReadText from "./pages/ReadText";
import QuizModal from "./pages/QuizModal"; 
import QuizAnswer from "./pages/QuizAnswer";

import MainTest from "./pages/MainTest";

const Setting = styled.div`
  max-width: 393px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
`;

function App() {
  return (
    <Setting>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gift />} />
          <Route path="/createmap" element={<CreateMap />} />
          <Route path="/main" element={<Main />} />

          <Route path="/createmap1" element={<CreateMap1 />} />
          <Route path="/createmap2" element={<CreateMap2 />} />
          <Route path="/gift0" element={<Gift0 />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/gift1" element={<Gift1 />} />
          <Route path="/gift2" element={<Gift2 />} />
          <Route path="/gift3" element={<Gift3 />} />
          <Route path="/main0" element={<Main0 />} /> 
          <Route path="/readtext" element={<ReadText />} />

          <Route path="/quizmodal" element={<QuizModal />} />
          <Route path="/quizanswer" element={<QuizAnswer />} />
          
          <Route path="/maintest" element={<MainTest /> } />
        </Routes>
      </BrowserRouter>
    </Setting>
  );
}

export default App;
