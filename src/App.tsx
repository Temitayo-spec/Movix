import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      {/* Display Login or SignUp Screen before the user is logged in */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  color: #000;
`;
