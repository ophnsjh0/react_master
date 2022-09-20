import { Switch, Route, useLocation, useParams, useRouteMatch } from "react-router";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import { Link } from "react-router-dom";
import ApxChart from "react-apexcharts";
import ApxChart2 from "react-apexcharts";
import styled from "styled-components";

// const ChartTab = styled.div`
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     margin: 10px 0px;
//     gap: 10px;  
// `;

// const Tab = styled.span`
//     text-align: center;
//     text-transform: uppercase;
//     font-size: 5px;
//     background-color: white;
//     padding: 2px 0px;
//     border-radius: 5px;
//     color: black;
// `

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

interface ChartProp {
    coinId: string;
}

function Chart({ coinId }: ChartProp) {
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId),
        {
            refetchInterval: 10000,
        });
    return <div>
        {/* <ChartTab>
            <Tab isActive={lineMatch !== null}>
                <Link to={`/${coinId}/chart/line`}>Line</Link>
            </Tab>
            <Tab isActive={candleMatch !== null}>
                <Link to={`/${coinId}/chart/candle`}>Candle</Link>
            </Tab>
        </ChartTab>
        <Switch>
            <Route path={`/${coinId}/chart/line`}>
                <LineChart />
            </Route>
            <Route path={`/${coinId}/chart/candle`}>
                <CandleChart />
            </Route>
        </Switch> */}
        {isLoading ? "Loading chart ..." :
            <ApxChart
                type="line"
                series={[
                    {
                        name: "price",
                        data: data?.map((price) => price.close) as number[],
                    },
                ]}
                options={{
                    theme: {
                        mode: "dark",
                    },
                    chart: {
                        width: 500,
                        height: 500,
                        toolbar: {
                            show: false,
                        },
                        background: "transparent",
                    },
                    stroke: {
                        curve: 'smooth',
                        width: 4,
                    },
                    grid: {
                        show: false,
                    },
                    yaxis: {
                        show: false,
                    },
                    xaxis: {
                        axisTicks: {
                            show: false,
                        },
                        axisBorder: {
                            show: false,
                        },
                        labels: {
                            show: false,
                        },
                        type: "datetime",
                        categories: data?.map((price) => price.time_close),
                    },
                    fill: {
                        type: "gradient",
                        gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
                    },
                    colors: ["#0fbcf9"],
                    tooltip: {
                        y: {
                            formatter: (value) => `$${value.toFixed(4)}`
                        }
                    }
                }}
            />} </div>
}

export default Chart;