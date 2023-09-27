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
import { TempFormState } from '../Context/TempFormProvider';

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

const GenerateTableComponent = () => {
  const { tempCards, generateTableToggle } = TempFormState();

  return (
    <>
      {tempCards && generateTableToggle && (
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
              {tempCards.map((card) => (
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
