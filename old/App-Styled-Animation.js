import styled, {keyframes} from 'styled-components';

const Wrapper = styled.div`
  display : flex; 
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const RotateAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius: 0px;
  }
  50%{
    border-radius: 100px;
    /* width : 500px;
    height : 500px; */
  }
  100%{
    transform:rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height : 200px;
  width : 200px; 
  background-color : tan;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${RotateAnimation} 1s linear infinite;
  ${Emoji}{
    &:hover{
      font-size : 96px;
    }
    &:active{
      opacity: 0;
    }
  }
`;

function App() {
  return <Wrapper>
    <Box>
      <Emoji>😍</Emoji>
    </Box>
      <Emoji>😍</Emoji>
  </Wrapper>
}

export default App;
