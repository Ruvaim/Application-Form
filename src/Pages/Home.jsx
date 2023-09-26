import React from 'react';
import FormComponent from '../components/FormComponent';
import CardComponent from '../components/CardComponent';
import GenerateTableComponent from '../components/GenerateTableComponent';
import { Container } from '@mui/material';

const Home = () => {
  return (
    <>
      <Container maxWidth="md">
        <FormComponent />
        <CardComponent />
        <GenerateTableComponent />
      </Container>
    </>
  );
};

export default Home;
