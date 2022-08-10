import { useParams } from "react-router";

interface RouterParam {
    coinId: string;
}

function Coin() {
    const { coinId } = useParams<RouterParam>();
    return <h1>Coin : {coinId} </h1>;
}

export default Coin