import { forwardRef, useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { SubCategories } from "../store/reducers/Categories/SubCategories";

export const Chart = forwardRef(({ plot, categories }, ref) => {
    const [plotData, setPlotData] = useState({ datasets: [], labels: [] });

    useEffect(() => {
        updatePlot();
    }, [plot]);

    const updatePlot = () => {
        if (Object.keys(plot).length) {
            const data = { datasets: [], labels: [] };

            for (let rank in plot) {
                for (let sub in plot[rank]) {
                    const values = plot[rank][sub];

                    if (!data.labels.length) {
                        data.labels = Object.keys(values);
                    }

                    const predicament = categories.find((category) => category.id == rank) || { name: "unknown" };
                    data.datasets.push({
                        data: Object.keys(values).map((key) => values[key] || 0),
                        label: predicament.name + " | " + SubCategories[sub],
                        borderColor: "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase(),
                        fill: true,
                        lineTension: 0.5,
                    });
                }
            }

            setPlotData(data);
        }
    };

    return <Line ref={ref} type="line" width={300} height={175} options={{}} data={plotData} />;
});
