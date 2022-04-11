import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import "../../pages/statics/Statistics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import "./DataTable.css";

const Datatable = (props) => {
  const id = props.id;
  const start = props.dateStart;
  const end = props.dateEnd;
  console.log(id);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    const data = {
      selectedCategoryId: id,
      startDate: start,
      endDate: end,
    };
    try {
      setError(null);
      setUsers(null);
      setLoading(true);
      const response = await axios.post("/api/statistics/list", data, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      setUsers(response.data.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [id, start, end]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러 발생!!</div>;
  if (!users) return null;

  //액셀 제목 현재날짜로
  const excelToday = new Date();
  const cus_excelToday =
    excelToday.getFullYear() +
    "-" +
    excelToday.getMonth() +
    "-" +
    excelToday.getDate();
  //엑셀 다운로드
  const excelDownload = (arr) => {
    const ws = XLSX.utils.json_to_sheet(arr);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, `운행통계_${cus_excelToday}.xlsx`);
  };

  return (
    <>
      <div className="btn-box">
        <button className="re-btn" onClick={fetchUsers}>
          <FontAwesomeIcon icon={faSyncAlt} className="icon" />
        </button>
        <button className="excel-btn" onClick={() => excelDownload(users)}>
          <FontAwesomeIcon icon={faFileExport} className="icon" />
        </button>
      </div>

      <div className="content-table" style={{ height: 300, width: "100%" }}>
        <table className="table">
          <thead>
            <tr className="table-head">
              <th>수집일자</th>
              <th>Vehicle Type</th>
              <th>Vehicle Id</th>
              <th>시험 누적거리 (km)</th>
              <th>자율주행 누적거리 (km)</th>
              <th>Take Over 횟수</th>
              <th>시스템 에러 횟수</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data) => (
              <tr key={data} className="table-content">
                <td>{data.collectionDate}</td>
                <td>{data.vehicleType === "10" ? "아이오닉" : "WITHUS"}</td>
                <td>{data.vehicleId}</td>
                <td>{data.testAccumulatedDistance}</td>
                <td>{data.autopilotAccumulatedDistance}</td>
                <td>{data.numTakeOver}</td>
                <td>{data.numSysError}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Datatable;
