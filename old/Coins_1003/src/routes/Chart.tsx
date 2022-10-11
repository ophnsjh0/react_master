import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import LineChart from "react-apexcharts";
import CandleChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";
import { useState } from "react";
import styled from "styled-components";

const ChartTab = styled.div` 
`;

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
    const [ line, setLine ] = useState(false);
    const toggleChart = () => setLine(current => !current);
    const isDark = useRecoilValue(isDarkAtom);
    return (
        <div>
            
            <ChartTab>
            <button onClick={toggleChart}>{line ? "Candle Chart" : "Line Chart" } </button>
                { line ? 
                    <LineChart
                        type="line"
                        series={[
                            {
                                name: "price",
                                data: data?.map((price) => price.close) as number[],
                            },
                        ]}
                        options={{
                            theme: {
                                mode: isDark ? "dark" : "light",
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
                    />
                    : <CandleChart                  
                    type="candlestick"
                    series={[
                        {
                            data: [{
                                x: new Date(1538778600000),
                                y: [6629.81, 6650.5, 6623.04, 6633.33]
                              },
                              {
                                x: new Date(1538780400000),
                                y: [6632.01, 6643.59, 6620, 6630.11]
                              },
                              {
                                x: new Date(1538782200000),
                                y: [6630.71, 6648.95, 6623.34, 6635.65]
                              },
                              {
                                x: new Date(1538784000000),
                                y: [6635.65, 6651, 6629.67, 6638.24]
                              },
                              {
                                x: new Date(1538785800000),
                                y: [6638.24, 6640, 6620, 6624.47]
                              },
                              {
                                x: new Date(1538787600000),
                                y: [6624.53, 6636.03, 6621.68, 6624.31]
                              },
                              {
                                x: new Date(1538789400000),
                                y: [6624.61, 6632.2, 6617, 6626.02]
                              },
                              {
                                x: new Date(1538791200000),
                                y: [6627, 6627.62, 6584.22, 6603.02]
                              },
                              {
                                x: new Date(1538793000000),
                                y: [6605, 6608.03, 6598.95, 6604.01]
                              },
                              {
                                x: new Date(1538794800000),
                                y: [6604.5, 6614.4, 6602.26, 6608.02]
                              },
                              {
                                x: new Date(1538796600000),
                                y: [6608.02, 6610.68, 6601.99, 6608.91]
                              },
                              {
                                x: new Date(1538798400000),
                                y: [6608.91, 6618.99, 6608.01, 6612]
                              },
                              {
                                x: new Date(1538800200000),
                                y: [6612, 6615.13, 6605.09, 6612]
                              },
                              {
                                x: new Date(1538802000000),
                                y: [6612, 6624.12, 6608.43, 6622.95]
                              },
                            ]
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
                />
                }
            </ChartTab> 
                
        </div>    
    );
}

export default Chart;