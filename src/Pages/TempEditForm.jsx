import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TempFormState } from '../Context/TempFormProvider';
import { useNavigate, useParams } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const TempEditForm = ({ preloadedValues }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const { tempCards, setTempCards } = TempFormState();
  const { uuid } = useParams();

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: preloadedValues,
  });

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      return setPasswordMismatch(true);
    }

    setTempCards(
      tempCards.map((card) => {
        if (card.uuid === uuid) {
          return data;
        }
        return card;
      })
    );
    localStorage.setItem('allTempCards', JSON.stringify([...tempCards]));
    navigate('/');
  };

  return (
    <Box p={2} maxWidth={600} mx="auto">
      <Typography variant="h4" gutterBottom>
        Update Your Details
      </Typography>
      <Typography variant="h6" gutterBottom>
        Your Info
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          inputRef={register}
          name="firstName"
          // defaultValue={preloadedValues?.firstName}
          rules={{ required: 'First Name is required' }}
          render={({ field }) => (
            <TextField fullWidth label="First Name" {...field} sx={{ m: 1 }} />
          )}
        />
        {errors.firstName && (
          <div style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.firstName.message}
          </div>
        )}

        {/* Middle Name */}
        <Controller
          name="middleName"
          control={control}
          //   // defaultValue=""
          sx={{ m: 1 }}
          render={({ field }) => (
            <TextField
              label="Middle Name"
              {...field}
              sx={{ m: 1, minWidth: { sm: '100%', md: '47%' } }}
            />
          )}
        />
        {/* Last Name */}
        <Controller
          name="lastName"
          control={control}
          // defaultValue=""
          render={({ field }) => (
            <TextField
              label="Last Name"
              {...field}
              sx={{ m: 1, minWidth: { sm: '100%', md: '47%' } }}
            />
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={control}
          // defaultValue=""
          rules={{ required: 'Email is required' }}
          sx={{ m: 1 }}
          render={({ field }) => (
            <TextField
              fullWidth
              label="Email"
              type="email"
              {...field}
              sx={{ m: 1 }}
            />
          )}
        />
        {errors.email && (
          <dive style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.email.message}
          </dive>
        )}

        {/* Password */}
        <Controller
          name="password"
          control={control}
          // defaultValue=""
          rules={{ required: 'Password is required' }}
          render={({ field }) => (
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </InputAdornment>
                ),
              }}
              {...field}
              sx={{ m: 1 }}
            />
          )}
        />
        {errors.password && (
          <div style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.password.message}
          </div>
        )}

        {/* Confirm Password */}
        <Controller
          name="confirmPassword"
          control={control}
          // defaultValue=""
          rules={{ required: 'Confirm Password is required' }}
          render={({ field }) => (
            <TextField
              fullWidth
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </InputAdornment>
                ),
              }}
              {...field}
              sx={{ m: 1 }}
            />
          )}
        />
        {errors.confirmPassword && (
          <div style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.confirmPassword.message}
          </div>
        )}

        {/* DOB */}
        <Controller
          name="dob"
          control={control}
          // defaultValue=""
          rules={{ required: 'Date of birth is required' }}
          render={({ field }) => (
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              {...field}
              sx={{ m: 1 }}
            />
          )}
        />
        {errors.dob && (
          <div style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.dob.message}
          </div>
        )}

        <Typography variant="h6" gutterBottom>
          College Details
        </Typography>

        {/* ID */}
        <Controller
          name="id"
          control={control}
          // defaultValue=""
          rules={{ required: 'ID is required' }}
          render={({ field }) => (
            <TextField fullWidth label="ID" {...field} sx={{ m: 1 }} />
          )}
        />
        {errors.id && (
          <div style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.id.message}
          </div>
        )}

        {/* College Name */}
        <Controller
          name="collegeName"
          control={control}
          // defaultValue=""
          rules={{ required: 'College Name is required' }}
          render={({ field }) => (
            <TextField
              fullWidth
              label="College Name"
              {...field}
              sx={{ m: 1 }}
            />
          )}
        />
        {errors.collegeName && (
          <div style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.collegeName.message}
          </div>
        )}

        {/* University Name */}
        <Controller
          name="universityName"
          control={control}
          // defaultValue=""
          rules={{ required: 'University Name is required' }}
          render={({ field }) => (
            <TextField
              fullWidth
              label="University Name"
              {...field}
              sx={{ m: 1 }}
            />
          )}
        />
        {errors.universityName && (
          <div style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.universityName.message}
          </div>
        )}

        {/* College Location */}
        <Controller
          name="collegeLocation"
          control={control}
          // defaultValue=""
          rules={{ required: 'College Location is required' }}
          render={({ field }) => (
            <TextField
              fullWidth
              label="College Location"
              {...field}
              sx={{ m: 1 }}
            />
          )}
        />
        {errors.collegeLocation && (
          <div style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.collegeLocation.message}
          </div>
        )}

        {/* Course Name */}
        <Controller
          name="courseName"
          control={control}
          // defaultValue=""
          rules={{ required: 'Course Name is required' }}
          render={({ field }) => (
            <TextField fullWidth label="Course Name" {...field} sx={{ m: 1 }} />
          )}
        />
        {errors.courseName && (
          <div style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.courseName.message}
          </div>
        )}

        {/* Grade */}
        <Controller
          name="grade"
          control={control}
          // defaultValue=""
          rules={{ required: 'Grade is required' }}
          render={({ field }) => (
            <TextField fullWidth label="Grade" {...field} sx={{ m: 1 }} />
          )}
        />
        {errors.grade && (
          <div style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.grade.message}
          </div>
        )}

        <Typography variant="h6" gutterBottom>
          Work Details
        </Typography>

        {/* Company Name */}
        <Controller
          name="companyName"
          control={control}
          // defaultValue=""
          rules={{ required: 'Company Name is required' }}
          render={({ field }) => (
            <TextField
              fullWidth
              label="Company Name"
              {...field}
              sx={{ m: 1 }}
            />
          )}
        />
        {errors.companyName && (
          <div style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.companyName.message}
          </div>
        )}

        {/* Company Location */}
        <Controller
          name="companyLocation"
          control={control}
          // defaultValue=""
          rules={{ required: 'Company Location is required' }}
          render={({ field }) => (
            <TextField
              fullWidth
              label="Company Location"
              {...field}
              sx={{ m: 1 }}
            />
          )}
        />
        {errors.companyLocation && (
          <div style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.companyLocation.message}
          </div>
        )}

        {/* Work Detail */}
        <Controller
          name="workDetail"
          control={control}
          // defaultValue=""
          rules={{ required: 'Work Detail is required' }}
          render={({ field }) => (
            <TextField fullWidth label="Work Detail" {...field} sx={{ m: 1 }} />
          )}
        />
        {errors.workDetail && (
          <div style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.workDetail.message}
          </div>
        )}

        {/* Description */}
        <Controller
          name="description"
          control={control}
          // defaultValue=""
          rules={{ required: 'Description is required' }}
          render={({ field }) => (
            <TextField fullWidth label="Description" {...field} sx={{ m: 1 }} />
          )}
        />
        {errors.description && (
          <div style={{ color: 'red', position: 'bottom', fontSize: '12px' }}>
            {errors.description.message}
          </div>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Update
        </Button>
        <Snackbar
          open={passwordMismatch}
          autoHideDuration={3000}
          onClose={() => setPasswordMismatch(false)}
        >
          <Alert severity="error" onClose={() => setPasswordMismatch(false)}>
            Passwords do not match.
          </Alert>
        </Snackbar>
      </form>
    </Box>
  );
};

// export default TempEditForm;
