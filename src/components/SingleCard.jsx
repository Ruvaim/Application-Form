import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import CreateIcon from '@mui/icons-material/Create';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormState } from '../Context/FormProvider';

const SingleCard = ({ card }) => {
  const { cards, setCards } = FormState();

  const handleDelete = (id) => {
    const updatedCards = cards.filter((c) => c.uuid !== id);
    localStorage.setItem('allCards', JSON.stringify([...updatedCards]));
    setCards([...updatedCards]);
  };

  // const handleEdit = (editId) => {
  //   setIsUpdating(true);
  //   setUpdatingElemId(editId);
  //   const currentCard1 = cards.find((c) => c.uuid === editId);
  //   const {
  //     firstName,
  //     middleName,
  //     lastName,
  //     email,
  //     password,
  //     confirmPassword,
  //     dob,
  //     id,
  //     clgName,
  //     universityName,
  //     clgLocation,
  //     courseName,
  //     grade,
  //     companyName,
  //     companyLocation,
  //     workDetail,
  //     description,
  //   } = currentCard1;

  //   setUserInfo({
  //     ...userInfo,
  //     firstName,
  //     middleName,
  //     lastName,
  //     email,
  //     password,
  //     confirmPassword,
  //     // dob: oldDob,
  //   });
  //   setCollegeInfo({
  //     ...collegeInfo,
  //     id,
  //     clgName,
  //     universityName,
  //     clgLocation,
  //     courseName,
  //     grade,
  //   });
  //   setWorkInfo({
  //     ...workInfo,
  //     companyName,
  //     companyLocation,
  //     workDetail,
  //     description,
  //   });

  //   setTempCard(currentCard1);
  //   console.log('Update', tempCard);
  // };

  const firstLetter = card.firstName.slice(0, 1);

  return (
    <Card sx={{ maxWidth: 345, mb: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {firstLetter}
          </Avatar>
        }
        action={
          <>
            <Tooltip title="Edit" arrow>
              <IconButton
                aria-label="edit"
                // onClick={() => handleEdit(card.uuid)}
              >
                <CreateIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete" arrow>
              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(card.uuid)}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        }
        title={card.firstName + ' ' + card.middleName + ' ' + card.lastName}
        subheader={card.workDetail + ' At ' + card.companyName}
      />

      <CardContent>
        <Typography variant="body2" color="text.primary">
          <b>ID: </b>
          {card.id}
        </Typography>
        <Typography variant="body2" color="text.primary">
          <b>Email:</b> {card.email}
        </Typography>
        <Typography variant="body2" color="text.primary">
          <b>Work Details:</b> Working at {card.companyName} located in{' '}
          {card.companyLocation} at the position of {card.workDetail}
        </Typography>
        <Typography variant="body2" color="text.primary">
          <b>Description: </b> {card.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleCard;
