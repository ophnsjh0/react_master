import styled from 'styled-components';

const Father = styled.div`
  display : flex;
`;

const Box = styled.div`
  background-color : ${(props) => props.bgcolor};
  width : 100px;
  height : 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`

const Text = styled.span`
  color : tomato;
  font-weight: 500;
`;

const Input = styled.input.attrs({ required: true, maxLength: 10})`
  background-color: tomato;
`;

function App() {
  return (
    // <div style={{ display : 'flex'}}>
    //   <div style={{ backgroundColor : 'teal', width : 100, height : 100}}></div>
    //   <div style={{ backgroundColor : 'tomato', width : 100, height : 100}}></div>
    // </div>
    <Father as="header">
      <Box bgcolor="teal">
        <Text>Hello</Text>
        <Text as="a" href="/">Hello</Text>
      </Box> 
      <Circle bgcolor="skyblue" />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
