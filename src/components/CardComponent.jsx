import React from 'react';
import Grid from '@mui/material/Grid';
import { TempFormState } from '../Context/TempFormProvider';
import TempSingleCard from './TempSingleCard';

const CardComponent = () => {
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

  // const { cards } = FormState();
  // return (
  //   <>
  //     <Grid container spacing={2}>
  //       {cards &&
  //         cards.map((card, i) => (
  //           <Grid item md={4} sm={6} xs={12} key={i}>
  //             <SingleCard card={card} />
  //           </Grid>
  //         ))}
  //     </Grid>
  //   </>
  // );
  const { tempCards } = TempFormState();
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {tempCards &&
          tempCards.map((card) => (
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
              key={card.uuid}
              justifyContent="center"
              alignItems="center"
            >
              <TempSingleCard card={card} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default CardComponent;
