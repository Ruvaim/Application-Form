import './App.css';
import CardComponent from './components/CardComponent';
import FormComponent from './components/FormComponent';
import GenerateTableComponent from './components/GenerateTableComponent';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Container maxWidth="md">
        <FormComponent />
        <CardComponent />
        <GenerateTableComponent />
      </Container>
    </>
  );
}

export default App;
