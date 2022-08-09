import styled from 'styled-components';

const Wrapper = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  width : 100vw; 
  height : 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Text = styled.span`
  font-size : 35px; 
  font-weight : 700;
  color : ${(props) => props.theme.textColor};
`;

function App() {
  return
  <Wrapper>
    <Text> Hello </Text>
  </Wrapper>
}

export default App;
