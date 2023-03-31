import React, { useState } from 'react';
import dayjs from 'dayjs';
import {
  OutlinedInput,
  Button,
  FormHelperText,
  InputAdornment,
  Typography,
  FormGroup,
  Box,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function DaysUntil() {
  const [date, setDate] = useState(dayjs(new Date()));
  
  function dateDifference() {
    const today = dayjs(new Date());
    console.log(today.diff(date, 'd'));
    return today.diff(date, 'd');
  }

  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setDate(event.target.value);
    dateDifference();
  };

  return (
    <>
      <Typography variant="h4" component="h2">
        Days Until
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
            label="Countdown Date"
            // value={date}
            onChange={handleChange}
          />
        </LocalizationProvider>
        <br />
        <Button variant="contained">Submit</Button>
      </Box>
      <Typography variant="p" component="p">
        {dateDifference}
      </Typography>
    </>
  );
}
