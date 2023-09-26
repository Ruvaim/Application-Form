import React from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  InputLabel,
  Switch,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// import DateFnsUtils from '@date-io/date-fns';

const TestForm = () => {
  return (
    <>
      <form>
        {/* 1) TextField */}
        <TextField
          placeholder="Enter Your First Name"
          label="First Name"
          variant="outlined"
          fullWidth
        />

        {/* 2) TextField */}
        <TextField
          placeholder="Enter Your Middle Name"
          label="Middle Name"
          variant="outlined"
          fullWidth
        />
        {/* 3) TextField */}
        <TextField
          placeholder="Enter Your Last Name"
          label="Last Name"
          variant="outlined"
          fullWidth
        />

        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your E-mail Address"
          label="E-mail"
          variant="outlined"
          fullWidth
        />

        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your Password"
          label="Password"
          variant="outlined"
          fullWidth
        />

        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your Confirm Password"
          label="Confirm Password"
          variant="outlined"
          fullWidth
        />

        <MuiPickersUtilsProvider>
          {/* 5) Date Picker */}
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label="Date of Birth"
            value={null}
            fullWidth
          />
        </MuiPickersUtilsProvider>
        <h1>College Details</h1>
        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your Id"
          label="Id"
          variant="outlined"
          fullWidth
        />

        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your College Name"
          label="College Name"
          variant="outlined"
          fullWidth
        />

        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your University Name"
          label="University Name"
          variant="outlined"
          fullWidth
        />

        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your College Location"
          label="College Location"
          variant="outlined"
          fullWidth
        />

        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your Course Name"
          label="Course Name"
          variant="outlined"
          fullWidth
        />

        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your Grade"
          label="Grade"
          variant="outlined"
          fullWidth
        />

        <h2>Works Details</h2>

        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your Company Name"
          label="Company Name"
          variant="outlined"
          fullWidth
        />

        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your Company Location"
          label="Company Location"
          variant="outlined"
          fullWidth
        />

        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your Work Detail"
          label="Work Detail"
          variant="outlined"
          fullWidth
        />

        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your Description"
          label="Description"
          variant="outlined"
          fullWidth
        />
      </form>
    </>
  );
};

export default TestForm;
