import React from "react";
import { DateRangePicker as DateRangePickerRsuite } from "rsuite";
import "./DateRangePicker.scss";

export function DateRangePicker({placeholder, placement, value, onOk, disabledDate}) {
    return (
        <DateRangePickerRsuite
            className="range-date-picker"
            character="-"
            placeholder={placeholder}
            disabledDate={disabledDate}
            onOk={onOk}
            placement={placement}
            value={value}
        />
    );
}

export const { allowedRange } = DateRangePickerRsuite;
