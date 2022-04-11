import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { ko } from "date-fns/esm/locale";
import './DateRangePicker.css'

const DateRangePicker = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="big-range-box">
        <div className="small-range-box">
          <div className="label">시작일</div>
          <DatePicker
            value={startDate}
            inputFormat={"yyyy-MM-dd"}
            mask={"____-__-__"}
            locale={ko}
            startDate={startDate}
            endDate={endDate}
            onChange={(newValue) => {
              setStartDate(newValue);
            }}
            renderInput={(params) => <TextField size="small" {...params} />}
          />
          </div>
          <div className="small-range-box">
          <div className="label">종료일</div>
          <DatePicker
            value={endDate}
            inputFormat={"yyyy-MM-dd"}
            mask={"____-__-__"}
            locale={ko}
            startDate={startDate}
            endDate={endDate}
            minDate={startDate} //최소날짜
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
            renderInput={(params) => <TextField size="small" {...params} />}
          />
        </div>
        </div>
      </LocalizationProvider>
    </>
  );
};

export default DateRangePicker;
