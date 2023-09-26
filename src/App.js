import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import EditForm from './Pages/EditForm';
import TestForm from './components/TestForm';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/edit/:uuid" element={<EditForm />} />
      </Routes> */}
      <TestForm />
    </>
  );
}

export default App;
