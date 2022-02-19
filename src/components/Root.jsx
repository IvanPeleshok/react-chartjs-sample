import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateRangePicker, allowedRange } from "./common/DateRangePicker/DateRangePicker";
import { getPlotData } from "../store/reducers/Plot/PlotThunks";
import { setRangeDate } from "../store/reducers/RangeDate/RangeDateSlice";
import { setCountry } from "../store/reducers/Сountry/СountrySlice";
import { Dropdown } from "./common/Dropdown/Dropdown";
import { FlexContainer } from "./common/FlexContainer";
import { Button } from "rsuite";
import { Chart } from "./common/Chart";
import { thirtyDaysAgo } from "../utils/thirtyDaysAgo";


export function Root() {
    const dispatch = useDispatch();
    const chartRef = useRef(null);

    const { country, selectedCountry } = useSelector((state) => state.countryReducer);
    const { categories } = useSelector((state) => state.categoriesReducer);
    const { selectedRange } = useSelector((state) => state.rangeDateReducer);
    const { plot } = useSelector((state) => state.plotReducer);

    useEffect(() => {
        if (selectedCountry.id && selectedRange.length) {
            dispatch(getPlotData());
        }
    }, [selectedCountry, selectedRange]);

    const selectCountry = (item) => {
        dispatch(setCountry(item));
    };

    const selectRange = (range) => {
        dispatch(setRangeDate(range));
    };

    const onDownloadPNG = () => {
        if (chartRef.current) {
            const link = document.createElement("a");
            link.download = "chart.png";
            link.href = chartRef.current.toBase64Image();
            link.click();
        }
    };

    return (
        <>
            <FlexContainer>
                <FlexContainer>
                    <h5>Top History</h5>
                </FlexContainer>

                <FlexContainer>
                    <Button onClick={onDownloadPNG}>PNG</Button>

                    <Dropdown defaultItem={selectedCountry} items={country} onSelect={selectCountry} />

                    <DateRangePicker
                        placeholder="Select Date Range"
                        disabledDate={allowedRange(thirtyDaysAgo(), new Date())}
                        onOk={selectRange}
                        placement={"autoVerticalEnd"}
                        value={selectedRange}
                    />
                </FlexContainer>
            </FlexContainer>

            <Chart plot={plot} categories={categories} ref={chartRef} />
        </>
    );
}
