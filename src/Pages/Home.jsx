import React from 'react';
import CardComponent from '../components/CardComponent';
import GenerateTableComponent from '../components/GenerateTableComponent';
import { Container } from '@mui/material';
import MyForm from '../components/MyForm';

const Home = () => {
  return (
    <>
      <Container maxWidth="md">
        <MyForm />
        <CardComponent />
        <GenerateTableComponent />
      </Container>
    </>
  );
};

export default Home;
