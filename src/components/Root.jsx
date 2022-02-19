import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DateRangePicker from "rsuite/DateRangePicker";
import { getPlotData } from "../store/reducers/Plot/PlotThunks";
import { setRangeDate } from "../store/reducers/RangeDate/RangeDateSlice";
import { setCountry } from "../store/reducers/Сountry/СountrySlice";
import { Dropdown } from "./common/Dropdown";
import { FlexContainer } from "./common/FlexContainer";
import { Chart } from "./Chart";
import { Button } from "rsuite";
import "./Root.scss";

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
                        className="range-date-picker"
                        character="-"
                        placeholder="Select Date Range"
                        disabledDate={DateRangePicker.allowedRange(
                            new Date((new Date().getTime() - 60*60*24*29*1000)), new Date()
                        )}
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
