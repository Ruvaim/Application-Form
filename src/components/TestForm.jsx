import React from 'react';
import TextField from '@mui/material/TextField';

// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

// import DateFnsUtils from '@date-io/date-fns';

const TestForm = () => {
  const { handleSubmit, control, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField label="First Name" {...field} />}
        />

        <Controller
          name="middleName"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField label="Middle Name" {...field} />}
        />

        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField label="Last Name" {...field} />}
        />

        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField label="Email" type="email" {...field} />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField label="Password" type="password" {...field} />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField label="Confirm Password" type="password" {...field} />
          )}
        />

        <Controller
          name="dob"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField label="Date of Birth" type="date" {...field} />
          )}
        />

        <Controller
          name="id"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField label="ID" {...field} />}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );

  // return (
  //   <>
  //     <form>
  //       {/* 1) TextField */}
  //       <TextField
  //         placeholder="Enter Your First Name"
  //         label="First Name"
  //         variant="outlined"
  //         fullWidth
  //       />

  //       {/* 2) TextField */}
  //       <TextField
  //         placeholder="Enter Your Middle Name"
  //         label="Middle Name"
  //         variant="outlined"
  //         fullWidth
  //       />
  //       {/* 3) TextField */}
  //       <TextField
  //         placeholder="Enter Your Last Name"
  //         label="Last Name"
  //         variant="outlined"
  //         fullWidth
  //       />

  //       {/* 4) TextField */}
  //       <TextField
  //         placeholder="Enter Your E-mail Address"
  //         label="E-mail"
  //         variant="outlined"
  //         fullWidth
  //       />

  //       {/* 4) TextField */}
  //       <TextField
  //         placeholder="Enter Your Password"
  //         label="Password"
  //         variant="outlined"
  //         fullWidth
  //       />

  //       {/* 4) TextField */}
  //       <TextField
  //         placeholder="Enter Your Confirm Password"
  //         label="Confirm Password"
  //         variant="outlined"
  //         fullWidth
  //       />

  //       {/* <MuiPickersUtilsProvider>

  //         <KeyboardDatePicker
  //           disableToolbar
  //           variant="inline"
  //           format="MM/dd/yyyy"
  //           margin="normal"
  //           label="Date of Birth"
  //           value={null}
  //           fullWidth
  //         />
  //       </MuiPickersUtilsProvider> */}

  //       <h1>College Details</h1>
  //       {/* 4) TextField */}
  //       <TextField
  //         placeholder="Enter Your Id"
  //         label="Id"
  //         variant="outlined"
  //         fullWidth
  //       />

  //       {/* 4) TextField */}
  //       <TextField
  //         placeholder="Enter Your College Name"
  //         label="College Name"
  //         variant="outlined"
  //         fullWidth
  //       />

  //       {/* 4) TextField */}
  //       <TextField
  //         placeholder="Enter Your University Name"
  //         label="University Name"
  //         variant="outlined"
  //         fullWidth
  //       />

  //       {/* 4) TextField */}
  //       <TextField
  //         placeholder="Enter Your College Location"
  //         label="College Location"
  //         variant="outlined"
  //         fullWidth
  //       />

  //       {/* 4) TextField */}
  //       <TextField
  //         placeholder="Enter Your Course Name"
  //         label="Course Name"
  //         variant="outlined"
  //         fullWidth
  //       />

  //       {/* 4) TextField */}
  //       <TextField
  //         placeholder="Enter Your Grade"
  //         label="Grade"
  //         variant="outlined"
  //         fullWidth
  //       />

  //       <h2>Works Details</h2>

  //       {/* 4) TextField */}
  //       <TextField
  //         placeholder="Enter Your Company Name"
  //         label="Company Name"
  //         variant="outlined"
  //         fullWidth
  //       />

  //       {/* 4) TextField */}
  //       <TextField
  //         placeholder="Enter Your Company Location"
  //         label="Company Location"
  //         variant="outlined"
  //         fullWidth
  //       />

  //       {/* 4) TextField */}
  //       <TextField
  //         placeholder="Enter Your Work Detail"
  //         label="Work Detail"
  //         variant="outlined"
  //         fullWidth
  //       />

  //       {/* 4) TextField */}
  //       <TextField
  //         placeholder="Enter Your Description"
  //         label="Description"
  //         variant="outlined"
  //         fullWidth
  //       />
  //     </form>
  //   </>
  // );
};

export default TestForm;
