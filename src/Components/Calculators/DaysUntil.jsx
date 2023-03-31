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
  const [height, setHeight] = useState('');

  function calculateBMI() {
    return ((703 * weight) / height ** 2).toFixed(2);
  }

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
            value={date}
            onChange={(date) => setDate(date)}
          />
        </LocalizationProvider>
        <FormGroup>
          <OutlinedInput
            id="outlined-adornment-height"
            endAdornment={<InputAdornment position="end">in</InputAdornment>}
            aria-describedby="outlined-height-helper-text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            inputProps={{
              'aria-label': 'height',
            }}
          />
          <FormHelperText id="outlined-height-helper-text">
            Height
          </FormHelperText>
        </FormGroup>
        <Button variant="contained">Submit</Button>
        <Button
          onClick={() => {
            setWeight('');
            setHeight('');
          }}
          variant="contained"
          sx={{ ml: 2, bgcolor: 'text.secondary' }}
        >
          Reset
        </Button>
      </Box>
      <Typography variant="p" component="p">
        {weight != '' && height != '' && `BMI:  ${calculateBMI()}`}
      </Typography>
    </>
  );
}
