import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { Button } from '@mui/material';
import { FormState } from '../Context/FormProvider';
// import dayjs from 'dayjs';

const FormComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    userInfo,
    setUserInfo,
    collegeInfo,
    setCollegeInfo,
    workInfo,
    setWorkInfo,
    cards,
    setCards,
    generateTableToggle,
    setGenerateTableToggle,
  } = FormState();

  const {
    firstName,
    middleName,
    lastName,
    email,
    password,
    confirmPassword,
    dob,
  } = userInfo;
  const { id, clgName, universityName, clgLocation, courseName, grade } =
    collegeInfo;
  const { companyName, companyLocation, workDetail, description } = workInfo;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      firstName === '' ||
      middleName === '' ||
      lastName === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === '' ||
      dob === '' ||
      id === '' ||
      clgName === '' ||
      universityName === '' ||
      clgLocation === '' ||
      courseName === '' ||
      grade === '' ||
      companyName === '' ||
      companyLocation === '' ||
      workDetail === '' ||
      description === ''
    ) {
      // <Stack sx={{ width: '100%' }} spacing={2}>
      //   <Alert severity="error">Please fill all the fields</Alert>;
      // </Stack>;
      alert('Please fill all the fields');
    } else {
      if (password !== confirmPassword) {
        alert('Password Does not match');
      } else {
        const allValues = {
          ...userInfo,
          ...collegeInfo,
          ...workInfo,
          uuid: uniqid(),
        };
        const updatedCard = [...cards, allValues];
        setCards(updatedCard);
        setUserInfo({
          ...userInfo,
          firstName: '',
          middleName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          dob: '',
        });
        setCollegeInfo({
          ...collegeInfo,
          id: '',
          clgName: '',
          universityName: '',
          clgLocation: '',
          courseName: '',
          grade: 0,
        });
        setWorkInfo({
          ...workInfo,
          companyName: '',
          companyLocation: '',
          workDetail: '',
          description: '',
        });
      }
    }
    // else {
    //   if (password !== confirmPassword) {
    //     alert('Password Does not match');
    //   }
    //   const currentCard1 = cards.find((c) => c.uuid === updatingElemId);

    //   const allValues = {
    //     ...userInfo,
    //     ...collegeInfo,
    //     ...workInfo,
    //     uuid: uniqid(),
    //   };
    //   // currentCard1.forEach((myCard) => handleUserChange(myCard.firstName));
    //   setCards(
    //     cards.map((card) => {
    //       if (card.uuid === updatingElemId) {
    //         localStorage.setItem('allCards', JSON.stringify([...cards]));
    //       }
    //       return card;
    //     })
    //   );

    //   console.log('THIS', currentCard1);
    // }
  };
  useEffect(() => {
    localStorage.setItem('allCards', JSON.stringify([...cards]));
  }, [cards]);

  // handle user input fields
  const handleUserChange = (name) => (event) => {
    const value =
      name === 'dob'
        ? event.$D + (event.$M + 1) + event.$Y
        : event.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // handle college details input fields
  const handleClgChange = (name) => (event) => {
    const value = event.target.value;
    setCollegeInfo({ ...collegeInfo, [name]: value });
  };

  // handle work details input fields
  const handleWorkChange = (name) => (event) => {
    const value = name === 'dob' ? event.$d : event.target.value;
    setWorkInfo({ ...workInfo, [name]: value });
  };

  const generateTable = () => {
    setGenerateTableToggle(true);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 3 }} component="form">
      <form autoComplete="off">
        <h1>{`Please Share Your Details`}</h1>
        {/* First Name */}
        <FormControl required fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-first-name">
            First Name
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-first-name"
            label="First Name"
            value={firstName}
            onChange={handleUserChange('firstName')}
          />
        </FormControl>
        {/* Middle Name */}
        <FormControl sx={{ m: 1, minWidth: { xs: '100%', sm: '47%' } }}>
          <InputLabel htmlFor="outlined-adornment-middle-name">
            Middle Name
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-middle-name"
            label="Middle Name"
            value={middleName}
            onChange={handleUserChange('middleName')}
          />
        </FormControl>
        {/* Last Name */}
        <FormControl sx={{ m: 1, minWidth: { xs: '100%', sm: '47%' } }}>
          <InputLabel htmlFor="outlined-adornment-last-name">
            Last Name
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-last-name"
            label="Last Name"
            value={lastName}
            onChange={handleUserChange('lastName')}
          />
        </FormControl>
        {/* Email */}
        <FormControl required fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            label="Email"
            type="email"
            value={email}
            onChange={handleUserChange('email')}
          />
        </FormControl>
        {/* Password */}
        <FormControl required sx={{ m: 1 }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={password}
            onChange={handleUserChange('password')}
          />
        </FormControl>
        {/* Confirm Password */}
        <FormControl required sx={{ m: 1 }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-confirm-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirm-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={confirmPassword}
            onChange={handleUserChange('confirmPassword')}
          />
        </FormControl>
        {/* DOB */}
        <FormControl fullWidth sx={{ m: 1 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
              label="DOB"
              format="YYYY-MM-DD"
              value={dob}
              onChange={handleUserChange('dob')}
            />
          </LocalizationProvider>
        </FormControl>
        <h3>College Details</h3>
        {/* ID */}
        <FormControl
          required
          sx={{ m: 1, minWidth: { xs: '100%', sm: '47%' } }}
        >
          <InputLabel htmlFor="outlined-adornment-college-id">ID</InputLabel>
          <OutlinedInput
            id="outlined-adornment-college-id"
            label="id"
            value={id}
            onChange={handleClgChange('id')}
          />
        </FormControl>
        {/* Name */}
        <FormControl
          required
          sx={{ m: 1, minWidth: { xs: '100%', sm: '47%' } }}
        >
          <InputLabel htmlFor="outlined-adornment-college-name">
            College Name
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-college-name"
            label="College Name"
            value={clgName}
            onChange={handleClgChange('clgName')}
          />
        </FormControl>
        {/* University Name */}
        <FormControl required fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-university-name">
            University Name
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-university-name"
            label="University Name"
            value={universityName}
            onChange={handleClgChange('universityName')}
          />
        </FormControl>
        {/* Location */}
        <FormControl required fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-location">
            Location
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-location"
            label="location"
            value={clgLocation}
            onChange={handleClgChange('clgLocation')}
          />
        </FormControl>
        {/* Course Name */}
        <FormControl
          required
          sx={{ m: 1, minWidth: { xs: '100%', sm: '47%' } }}
        >
          <InputLabel htmlFor="outlined-adornment-course-name">
            Course Name
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-course-name"
            label="Course Name"
            value={courseName}
            onChange={handleClgChange('courseName')}
          />
        </FormControl>
        {/* Grade */}
        <FormControl
          required
          sx={{ m: 1, minWidth: { xs: '100%', sm: '47%' } }}
        >
          <TextField
            id="outlined-adornment-grade"
            label="Grade(CGPA) EX:9.5"
            type="number"
            value={grade}
            onChange={handleClgChange('grade')}
          />
        </FormControl>
        <h3>Work Experience Details</h3>
        {/* Name */}
        <FormControl required fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-company-name">
            Company Name
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-company-name"
            label="Company Name"
            value={companyName}
            onChange={handleWorkChange('companyName')}
          />
        </FormControl>
        {/* Location */}
        <FormControl required fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-work-location">
            Location
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-work-location"
            label="work-location"
            value={companyLocation}
            onChange={handleWorkChange('companyLocation')}
          />
        </FormControl>
        {/* Work details */}
        <FormControl fullWidth required sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-work-detail">
            Work Detail(EX: Software Engineer)
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-work-detail"
            label="work-detail"
            value={workDetail}
            onChange={handleWorkChange('workDetail')}
          />
        </FormControl>
        {/* Description */}
        <FormControl fullWidth required sx={{ m: 1 }}>
          <TextField
            id="outlined-textarea"
            label="Description"
            placeholder="Description"
            multiline
            rows={3}
            value={description}
            onChange={handleWorkChange('description')}
          />
        </FormControl>
        <Button
          variant="contained"
          type="submit"
          size="large"
          sx={{ width: '100%' }}
          onClick={handleSubmit}
        >
          {/* {`${isUpdating ? 'Update' : 'Submit'}`} */}
          Submit
        </Button>
        {!generateTableToggle && (
          <Button
            variant="contained"
            size="large"
            color="error"
            sx={{ mt: 3, width: '100%' }}
            onClick={generateTable}
          >
            Generate Table
          </Button>
        )}
      </form>
    </Box>
  );
};

export default FormComponent;