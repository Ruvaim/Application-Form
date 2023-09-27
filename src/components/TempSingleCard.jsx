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
import { Link } from 'react-router-dom';
import { TempFormState } from '../Context/TempFormProvider';

const TempSingleCard = ({ card }) => {
  const { tempCards, setTempCards } = TempFormState();

  const handleDelete = (id) => {
    const updatedCards = tempCards.filter((c) => c.uuid !== id);
    localStorage.setItem('allTempCards', JSON.stringify([...updatedCards]));
    setTempCards([...updatedCards]);
  };

  return (
    <Card sx={{ maxWidth: 345, mb: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {card?.firstName.slice(0, 1)}
          </Avatar>
        }
        action={
          <>
            <Link to={`/edit/${card.uuid}`}>
              <Tooltip title="Edit" arrow>
                <IconButton aria-label="edit">
                  <CreateIcon />
                </IconButton>
              </Tooltip>
            </Link>
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

export default TempSingleCard;
