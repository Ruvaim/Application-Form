import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const MyForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box p={2} maxWidth={600} mx="auto">
      <Typography variant="h6" gutterBottom>
        Registration Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{ required: 'First Name is required' }}
          render={({ field }) => (
            <TextField
              label="First Name"
              {...field}
              sx={{ m: 1, minWidth: { xs: '100%', sm: '47%' } }}
            />
          )}
        />
        {errors.firstName && (
          <span style={{ color: 'red', position: 'bottom' }}>
            {errors.firstName.message}
          </span>
        )}
        <Controller
          name="middleName"
          control={control}
          defaultValue=""
          sx={{ m: 1 }}
          render={({ field }) => (
            <TextField
              label="Middle Name"
              {...field}
              sx={{ m: 1, minWidth: { xs: '100%', sm: '47%' } }}
            />
          )}
        />
        {/* Last Name */}
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Last Name"
              {...field}
              sx={{ m: 1, minWidth: { xs: '100%', sm: '47%' } }}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: 'Email is required' }}
          sx={{ m: 1 }}
          render={({ field }) => (
            <TextField label="Email" type="email" {...field} />
          )}
        />
        {errors.email && (
          <span style={{ color: 'red' }}>{errors.email.message}</span>
        )}
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: 'Password is required' }}
          render={({ field }) => (
            <TextField label="Password" type="password" {...field} />
          )}
        />
        {errors.password && (
          <span style={{ color: 'red' }}>{errors.password.message}</span>
        )}
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          rules={{ required: 'Confirm Password is required' }}
          render={({ field }) => (
            <TextField label="Confirm Password" type="password" {...field} />
          )}
        />
        {errors.confirmPassword && (
          <span style={{ color: 'red' }}>{errors.confirmPassword.message}</span>
        )}
        <Controller
          name="dob"
          control={control}
          defaultValue=""
          rules={{ required: 'Date of birth is required' }}
          render={({ field }) => (
            <TextField label="Date of Birth" type="date" {...field} />
          )}
        />
        {errors.dob && (
          <span style={{ color: 'red' }}>{errors.dob.message}</span>
        )}
        <Controller
          name="id"
          control={control}
          defaultValue=""
          rules={{ required: 'ID is required' }}
          render={({ field }) => <TextField label="ID" {...field} />}
        />
        {errors.id && <span style={{ color: 'red' }}>{errors.id.message}</span>}
        <Controller
          name="collegeName"
          control={control}
          defaultValue=""
          rules={{ required: 'College Name is required' }}
          render={({ field }) => <TextField label="College Name" {...field} />}
        />
        {errors.collegeName && (
          <span style={{ color: 'red' }}>{errors.collegeName.message}</span>
        )}
        <Controller
          name="universityName"
          control={control}
          defaultValue=""
          rules={{ required: 'University Name is required' }}
          render={({ field }) => (
            <TextField label="University Name" {...field} />
          )}
        />
        {errors.universityName && (
          <span style={{ color: 'red' }}>{errors.universityName.message}</span>
        )}
        <Controller
          name="collegeLocation"
          control={control}
          defaultValue=""
          rules={{ required: 'College Location is required' }}
          render={({ field }) => (
            <TextField label="College Location" {...field} />
          )}
        />
        {errors.collegeLocation && (
          <span style={{ color: 'red' }}>{errors.collegeLocation.message}</span>
        )}
        {/* Repeat the above pattern for other fields (collegeLocation, courseName, universityName, grade, companyName, companyLocation, workDetail, description) */}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default MyForm;
