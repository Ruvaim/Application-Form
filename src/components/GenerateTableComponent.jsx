import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormState } from '../Context/FormProvider';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// const { cards } = FormState();

// function createData(ID, Username, Address, Course, Work) {
//   return { ID, Username, Address, Course, Work };
// }

// const cards = [
//   {
//     clgLocation: 'Madeena Colony',
//     clgName: 'Aimca',
//     companyLocation: 'Dubai',
//     companyName: 'Google',
//     confirmPassword: '123456789',
//     courseName: 'BCA',
//     description: 'this is just an description',
//     dob: 'Sun Mar 23 2003 00:00:00 GMT+0530 (India Standard Time)',
//     email: 'ruvaim@gmail.com',
//     firstName: 'Mohammed',
//     grade: '9',
//     id: '001',
//     lastName: 'kashimji',
//     middleName: 'Ruvaim',
//     password: '123456789',
//     universityName: 'KUD',
//     uuid: '001',
//     workDetail: 'Software Engineer',
//   },
//   {
//     clgLocation: 'fslkdjakl',
//     clgName: 'kslajdfkl',
//     companyLocation: 'lskdfjalk',
//     companyName: 'lksjfdkl',
//     confirmPassword: 'lsdkjflk',
//     courseName: 'lksfjdl',
//     description: 'lksjdf',
//     dob: 'Sun Mar 23 2003 00:00:00 GMT+0530 (India Standard Time)',
//     email: 'ruvaim@gmail.com',
//     firstName: 'lksdajfl',
//     grade: '9',
//     id: '002',
//     lastName: 'lksdjfl',
//     middleName: 'lsdkfjlk',
//     password: '123456789',
//     universityName: 'lkdsfjlj',
//     uuid: '002',
//     workDetail: 'lksfdjl',
//   },
//   {
//     clgLocation: 'fslkdjakl',
//     clgName: 'kslajdfkl',
//     companyLocation: 'lskdfjalk',
//     companyName: 'lksjfdkl',
//     confirmPassword: 'lsdkjflk',
//     courseName: 'lksfjdl',
//     description: 'lksjdf',
//     dob: 'Sun Mar 23 2003 00:00:00 GMT+0530 (India Standard Time)',
//     email: 'ruvaim@gmail.com',
//     firstName: 'kksdajfl',
//     grade: '9',
//     id: '003',
//     lastName: 'lksdjfl',
//     middleName: 'lsdkfjlk',
//     password: '123456789',
//     universityName: 'lkdsfjlj',
//     uuid: '003',
//     workDetail: 'lksfdjl',
//   },
// ];

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   cards.map((card) =>
//     createData(
//       card.id,
//       card.firstName,
//       card.companyLocation,
//       card.courseName,
//       card.workDetail
//     )
//   ),
// ];

const GenerateTableComponent = () => {
  const { cards, generateTableToggle } = FormState();

  return (
    <>
      {cards && generateTableToggle && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="right">Username</StyledTableCell>
                <StyledTableCell align="right">Location</StyledTableCell>
                <StyledTableCell align="right">Course Name</StyledTableCell>
                <StyledTableCell align="right">Work Details</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cards.map((card) => (
                <StyledTableRow key={card.uuid}>
                  <StyledTableCell component="th" scope="row">
                    {card.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {card.firstName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {card.companyLocation}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {card.courseName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {card.workDetail}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default GenerateTableComponent;
