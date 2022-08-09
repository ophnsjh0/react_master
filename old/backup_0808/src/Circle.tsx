import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  fontSize: string;
  borderColor?: string;
  text?: string;
}

interface ContainerProps {
  Color: string;
  borderColor: string;
}

interface TextProps {
  font: string;
}

const Text = styled.span<TextProps>`
    font-size: ${(props) => props.font};
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
    border: 3px solid ${(props) => props.borderColor};
`;


function Circle({ bgColor, fontSize, text = "text", borderColor }: CircleProps) {
  return (
    <Container Color={bgColor} borderColor={borderColor ?? "black"}>
      <Text font={fontSize}>{text}</Text>
    </Container>
  );
}

export default Circle

