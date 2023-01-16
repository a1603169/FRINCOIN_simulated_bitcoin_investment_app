import React, { useState, useEffect } from "react";
import Axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./AttendancePage.module.css";

const AttendancePage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [attendanceDates, setAttendanceDates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get("example.com");
      setAttendanceDates(result.data.attendanceDates);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleAttendanceCheck = async (date) => {
    if (date < currentDate) {
      toast.error("Cannot check attendance for past dates!");
      return;
    }

    const result = await Axios.post("example.com", {
      date,
    });

    setAttendanceDates([...attendanceDates, date]);
    toast.success("Attendance checked for today!");
  };

  return (
    <div>
      {/* {isLoading ? (
        <p>Loading attendance data...</p>
      ) :  */}
      <center>
        <div className={classes.page_container}>
          <h1 className={classes.page_title}>Attendance Page</h1>
          <Calendar onClickDay={handleAttendanceCheck} />
          <div className={classes.page_attendance_report_para}>
            <p>Number of attendance checks: {attendanceDates.length}</p>
          </div>
        </div>
      </center>
    </div>
  );
};

export default AttendancePage;
