import styled from "styled-components";


const Title = styled.h1`
    color: ${(props) => props.theme.accentColor};
    font-size: ${(props) => props.theme.fontsize};
`;

function Coins() {
    return <Title>Coin ~ Hello</Title>
}

export default Coins