import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import { Button, Container } from '@mui/material';
import { FormState } from '../Context/FormProvider';
import { DatePicker } from '@mui/x-date-pickers';

const EditForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { cards, setCards } = FormState();

  const navigate = useNavigate();

  useEffect(() => {
    const currentCard = cards.find((c) => c.uuid === uuid);
    const {
      firstName,
      middleName,
      lastName,
      email,
      password,
      confirmPassword,
      dob,
      id,
      clgName,
      universityName,
      clgLocation,
      courseName,
      grade,
      companyName,
      companyLocation,
      workDetail,
      description,
    } = currentCard;
    setFirstNameTemp(firstName);
    setMiddleNameTemp(middleName);
    setLastNameTemp(lastName);
    setEmailTemp(email);
    setPasswordTemp(password);
    setConfirmPasswordTemp(confirmPassword);
    setDobTemp(dob);
    setIdTemp(id);
    setClgNameTemp(clgName);
    setUniversityNameTemp(universityName);
    setClgLocationTemp(clgLocation);
    setCourseNameTemp(courseName);
    setGradeTemp(grade);
    setCompanyNameTemp(companyName);
    setCompanyLocationTemp(companyLocation);
    setWorkDetailTemp(workDetail);
    setDescriptionTemp(description);
  }, []);

  const [firstNameTemp, setFirstNameTemp] = useState('');
  const [middleNameTemp, setMiddleNameTemp] = useState('');
  const [lastNameTemp, setLastNameTemp] = useState('');
  const [emailTemp, setEmailTemp] = useState('');
  const [passwordTemp, setPasswordTemp] = useState('');
  const [confirmPasswordTemp, setConfirmPasswordTemp] = useState('');
  const [dobTemp, setDobTemp] = useState('');
  const [idTemp, setIdTemp] = useState('');
  const [clgNameTemp, setClgNameTemp] = useState('');
  const [universityNameTemp, setUniversityNameTemp] = useState('');
  const [clgLocationTemp, setClgLocationTemp] = useState('');
  const [courseNameTemp, setCourseNameTemp] = useState('');
  const [gradeTemp, setGradeTemp] = useState(0);
  const [companyNameTemp, setCompanyNameTemp] = useState('');
  const [companyLocationTemp, setCompanyLocationTemp] = useState('');
  const [workDetailTemp, setWorkDetailTemp] = useState('');
  const [descriptionTemp, setDescriptionTemp] = useState('');

  const { uuid } = useParams();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // handle firstName fields
  const handleFirstName = (e) => {
    setFirstNameTemp(e.target.value);
  };
  // handle MiddleName fields
  const handleMiddleName = (e) => {
    setMiddleNameTemp(e.target.value);
  };
  // handle LastName fields
  const handleLastName = (e) => {
    setLastNameTemp(e.target.value);
  };
  // handle Email fields
  const handleEmail = (e) => {
    setEmailTemp(e.target.value);
  };
  // handle Password fields
  const handlePassword = (e) => {
    setPasswordTemp(e.target.value);
  };
  // handle ConfirmPassword fields
  const handleConfirmPassword = (e) => {
    setConfirmPasswordTemp(e.target.value);
  };
  // handle Dob fields
  const handleDob = (e) => {
    setDobTemp(e.$Y + (e.$M + 1) + e.$D);
  };
  // handle Id fields
  const handleId = (e) => {
    setIdTemp(e.target.value);
  };
  // handle ClgName fields
  const handleClgName = (e) => {
    setClgNameTemp(e.target.value);
  };
  // handle UniversityName fields
  const handleUniversityName = (e) => {
    setUniversityNameTemp(e.target.value);
  };
  // handle ClgLocation fields
  const handleClgLocation = (e) => {
    setClgLocationTemp(e.target.value);
  };
  // handle CourseName fields
  const handleCourseName = (e) => {
    setCourseNameTemp(e.target.value);
  };
  // handle Grade fields
  const handleGrade = (e) => {
    setGradeTemp(e.target.value);
  };
  // handle CompanyName fields
  const handleCompanyName = (e) => {
    setCompanyNameTemp(e.target.value);
  };
  // handle CompanyLocation fields
  const handleCompanyLocation = (e) => {
    setCompanyLocationTemp(e.target.value);
  };
  // handle WorkDetail fields
  const handleWorkDetail = (e) => {
    setWorkDetailTemp(e.target.value);
  };
  // handle Description fields
  const handleDescription = (e) => {
    setDescriptionTemp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      firstNameTemp,
      middleNameTemp,
      lastNameTemp,
      emailTemp,
      passwordTemp,
      confirmPasswordTemp,
      dobTemp,
      idTemp,
      clgNameTemp,
      universityNameTemp,
      clgLocationTemp,
      courseNameTemp,
      gradeTemp,
      companyNameTemp,
      companyLocationTemp,
      workDetailTemp,
      descriptionTemp,
    };
    if (
      firstNameTemp === '' ||
      emailTemp === '' ||
      passwordTemp === '' ||
      confirmPasswordTemp === '' ||
      dobTemp === '' ||
      idTemp === '' ||
      clgNameTemp === '' ||
      universityNameTemp === '' ||
      clgLocationTemp === '' ||
      courseNameTemp === '' ||
      gradeTemp === '' ||
      companyNameTemp === '' ||
      companyLocationTemp === '' ||
      workDetailTemp === '' ||
      descriptionTemp === ''
    ) {
      // <Stack sx={{ width: '100%' }} spacing={2}>
      //   <Alert severity="error">Please fill all the fields</Alert>;
      // </Stack>;
      alert('Please fill all the fields');
    } else {
      if (passwordTemp !== confirmPasswordTemp) {
        alert('Password Does not match');
      } else {
        const curCard = cards.find((c) => c.uuid === uuid);

        curCard.firstName = obj.firstNameTemp;
        curCard.middleName = obj.middleNameTemp;
        curCard.lastName = obj.lastNameTemp;
        curCard.email = obj.emailTemp;
        curCard.password = obj.passwordTemp;
        curCard.confirmPassword = obj.confirmPasswordTemp;
        curCard.dob = obj.dobTemp;
        curCard.id = obj.idTemp;
        curCard.clgName = obj.clgNameTemp;
        curCard.universityName = obj.universityNameTemp;
        curCard.clgLocation = obj.clgLocationTemp;
        curCard.courseName = obj.courseNameTemp;
        curCard.grade = obj.gradeTemp;
        curCard.companyName = obj.companyNameTemp;
        curCard.companyLocation = obj.companyLocationTemp;
        curCard.workDetail = obj.workDetailTemp;
        curCard.description = obj.descriptionTemp;

        setCards(
          cards.map((card) => {
            if (card.uuid === uuid) {
              return { ...card, curCard };
            }
            return card;
          })
        );
        navigate('/');
      }
    }

    localStorage.setItem('allCards', JSON.stringify([...cards]));
  };

  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 3 }} component="form">
          <form autoComplete="off">
            <h1>{`Please Update Your Details`}</h1>
            {/* First Name */}
            <FormControl required fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-first-name">
                First Name
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-first-name"
                label="First Name"
                value={firstNameTemp}
                onChange={(e) => handleFirstName(e)}
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
                value={middleNameTemp}
                onChange={(e) => handleMiddleName(e)}
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
                value={lastNameTemp}
                onChange={(e) => handleLastName(e)}
              />
            </FormControl>
            {/* Email */}
            <FormControl required fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                label="Email"
                type="email"
                value={emailTemp}
                onChange={(e) => handleEmail(e)}
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
                value={passwordTemp}
                onChange={(e) => handlePassword(e)}
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
                value={confirmPasswordTemp}
                onChange={(e) => handleConfirmPassword(e)}
              />
            </FormControl>
            {/* DOB */}
            <FormControl fullWidth sx={{ m: 1 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <DateField
                  label="DOB"
                  format="DD-MM-YYYY"
                  value={dobTemp}
                  onChange={(e) => handleDob(e)}
                /> */}
                <DatePicker
                  label="Date of birth"
                  value={dobTemp}
                  onChange={(e) => handleDob(e)}
                />
              </LocalizationProvider>
            </FormControl>
            <h3>College Details</h3>
            {/* ID */}
            <FormControl
              required
              sx={{ m: 1, minWidth: { xs: '100%', sm: '47%' } }}
            >
              <InputLabel htmlFor="outlined-adornment-college-id">
                ID
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-college-id"
                label="id"
                value={idTemp}
                onChange={(e) => handleId(e)}
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
                value={clgNameTemp}
                onChange={(e) => handleClgName(e)}
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
                value={universityNameTemp}
                onChange={(e) => handleUniversityName(e)}
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
                value={clgLocationTemp}
                onChange={(e) => handleClgLocation(e)}
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
                value={courseNameTemp}
                onChange={(e) => handleCourseName(e)}
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
                value={gradeTemp}
                onChange={(e) => handleGrade(e)}
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
                value={companyNameTemp}
                onChange={(e) => handleCompanyName(e)}
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
                value={companyLocationTemp}
                onChange={(e) => handleCompanyLocation(e)}
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
                value={workDetailTemp}
                onChange={(e) => handleWorkDetail(e)}
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
                value={descriptionTemp}
                onChange={(e) => handleDescription(e)}
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
          </form>
        </Box>
      </Container>
    </>
  );
};

export default EditForm;
