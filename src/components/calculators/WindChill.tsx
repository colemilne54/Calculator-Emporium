// 'use client';
//
// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';
// // import {
// //    OutlinedInput,
// //    Button,
// //    FormHelperText,
// //    InputAdornment,
// //    Typography,
// //    FormGroup,
// //    Box,
// //    Table,
// //    TableBody,
// //    TableCell,
// //    TableContainer,
// //    TableHead,
// //    TableRow,
// //    Paper,
// // } from '@mui/material';
//
// function calcWindChill(temp, wind) {
//    return (
//       35.74 +
//       0.6215 * temp -
//       35.75 * wind ** 0.16 +
//       0.4275 * temp * wind ** 0.16
//    ).toFixed(0);
// }
//
// function createData(wind, feels) {
//    return { wind, feels };
// }
//
// var tempArr = [];
//
// for (var i = 40; i >= -45; i -= 5) {
//    tempArr.push(i);
// }
//
// var windArr = [];
// var rows = [];
//
// for (var i = 5; i <= 60; i += 5) {
//    windArr.push(i);
//    var frost = [];
//    for (var temp in tempArr) {
//       frost.push(calcWindChill(tempArr[temp], i));
//    }
//    rows.push(createData(i, frost));
// }
//
// function FrostBiteChart() {
//    return (
//       <Table sx={{ minWidth: 650 }} aria-label="frostbite table">
//          <TableHead>
//             <TableRow>
//                <TableCell sx={{ backgroundColor: 'black', color: 'white' }}>
//                   Calm
//                </TableCell>
//                {tempArr.map((temp) => (
//                   <TableCell
//                      sx={{
//                         border: 1,
//                         borderColor: 'grey.300',
//                         backgroundColor: 'black',
//                         color: 'white',
//                      }}
//                   >
//                      {temp}
//                   </TableCell>
//                ))}
//             </TableRow>
//          </TableHead>
//          <TableBody>
//             {rows.map((row) => (
//                <TableRow key={row.wind}>
//                   <TableCell
//                      component="th"
//                      scope="row"
//                      sx={{
//                         borderRight: 1,
//                         borderColor: 'grey.300',
//                         backgroundColor: 'black',
//                         color: 'white',
//                      }}
//                   >
//                      {row.wind}
//                   </TableCell>
//                   {row.feels.map((feel) => (
//                      <TableCell
//                         align="right"
//                         sx={{
//                            border: 1,
//                            borderColor: 'grey.300',
//                            backgroundColor: 'primary.light',
//                         }}
//                      >
//                         {feel}
//                      </TableCell>
//                   ))}
//                </TableRow>
//             ))}
//          </TableBody>
//       </Table>
//    );
// }
//
// export default function WindChill() {
//    const [temp, setTemp] = useState('');
//    const [wind, setWind] = useState('');
//
//    function calculateWindChill() {
//       // https://www.weather.gov/ama/WindChill
//       return (
//          (
//             35.74 +
//             0.6215 * temp -
//             35.75 * wind ** 0.16 +
//             0.4275 * temp * wind ** 0.16
//          ).toFixed(2) + '°F'
//       );
//    }
//
//    return (
//       <>
//          <Typography variant="h4" component="h2">
//             Wind Chill
//          </Typography>
//          <Box
//             component="form"
//             sx={{
//                '& .MuiTextField-root': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
//          >
//             <FormGroup>
//                <OutlinedInput
//                   id="outlined-adornment-temp"
//                   endAdornment={
//                      <InputAdornment position="end">°F</InputAdornment>
//                   }
//                   aria-describedby="outlined-temp-helper-text"
//                   value={temp}
//                   onChange={(e) => setTemp(e.target.value)}
//                   onKeyPress={(event) => {
//                      if (!/[0-9]/.test(event.key)) {
//                         event.preventDefault();
//                      }
//                   }}
//                   inputProps={{
//                      'aria-label': 'temp',
//                   }}
//                />
//                <FormHelperText id="outlined-temp-helper-text">
//                   Temperature
//                </FormHelperText>
//             </FormGroup>
//             <FormGroup>
//                <OutlinedInput
//                   id="outlined-adornment-wind"
//                   endAdornment={
//                      <InputAdornment position="end">mph</InputAdornment>
//                   }
//                   aria-describedby="outlined-wind-helper-text"
//                   value={wind}
//                   onChange={(e) => setWind(e.target.value)}
//                   onKeyPress={(event) => {
//                      if (!/[0-9]/.test(event.key)) {
//                         event.preventDefault();
//                      }
//                   }}
//                   inputProps={{
//                      'aria-label': 'wind',
//                   }}
//                />
//                <FormHelperText id="outlined-wind-helper-text">
//                   Wind Speed
//                </FormHelperText>
//             </FormGroup>
//             <Button variant="contained">Submit</Button>
//             <Button
//                onClick={() => {
//                   setTemp('');
//                   setWind('');
//                }}
//                variant="contained"
//                sx={{ ml: 2, bgcolor: 'text.secondary' }}
//             >
//                Reset
//             </Button>
//          </Box>
//          <Typography variant="p" component="p">
//             {temp != '' && wind != '' && `${calculateWindChill()}`}
//          </Typography>
//          <FrostBiteChart />
//       </>
//    );
// }

export default function WindChill() {
   return (<></>)
}