import styled from "styled-components";

interface CircleProps {
    bgColor: string;
    fontSize: string;
  }

interface ContainerProps {
    Color: string;
}

interface TextProps {
    font: string;
}

const Text = styled.span<TextProps>`
    font-size: ${(props)=> props.font};
    color : yellow;
`;

const Container = styled.div<ContainerProps>`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.Color};
    border-radius: 100px;
`;


function Circle({ bgColor, fontSize }: CircleProps) {
  return (
    <Container Color={bgColor} >
        <Text font={fontSize}>Hello</Text>
    </Container>
  );
}

export default Circle

