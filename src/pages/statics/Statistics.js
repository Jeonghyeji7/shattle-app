import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import DateRangePicker from "../../component/datepicker/DateRangePicker";
import "./Statistics.css";
import DataTable from "../../component/statisticsDataTable/DataTable";
import { useState } from "react";
import Layout from "../../component/Layout";

const Statistics = (props) => {

  //dateRangePicker
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [categoryId, setCategoryId] = useState(0);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setCategoryId(parseInt(value));
    setStartDate("")
    setEndDate("")
  };

  return (
    <>
    <Layout hasCertification={props.hasCertification}>
    <div className="statistics-container">
        <div className="title">운행통계</div>
        <div className="content">
          <div className="content-search">
            <div className="radio-group">
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="radio-buttons-group-label"
                  defaultValue="day"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value={0}
                    control={<Radio value={0} />}
                    label="일 별"
                    onChange={handleOnChange}
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio value={1} />}
                    label="월 별"
                    onChange={handleOnChange}
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio value={2} />}
                    label="년도 별"
                    onChange={handleOnChange}
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="date-range-group">
              <DateRangePicker
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
              />
            </div>

          </div>
          <DataTable id={categoryId} dateStart={startDate} dateEnd={endDate}/>
        </div>
      </div>
    </Layout>
     
    </>
  );
};

export default Statistics;
