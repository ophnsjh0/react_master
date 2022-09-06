import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import ApxChart from "react-apexcharts";

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
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
    return <div>{isLoading ? "Loading chart ..." :
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