import { TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";

const DateCalendar = () => {
  const [dateStart, setDateStart] = useState(dayjs());
  // const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date())

  const onChangeDate = (newdate) => {
    setDateStart(newdate);
    // console.log(dateStart);
    // console.log(dateStart);
    // console.log(dateStart.$d.getTime());
    // console.log(new Date());
  };

  const onAcceptDate = (date) => {
    console.log(date);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="Date Start"
        value={dateStart}
        onChange={onChangeDate}
        onClick={onAcceptDate}
      />
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="Date End"
        value={dateEnd}
        onChange={onChangeDate}
        onClick={onAcceptDate}
      />
    </LocalizationProvider>
  );
};

export default DateCalendar;
