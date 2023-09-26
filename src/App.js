import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import EditForm from './Pages/EditForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/edit/:uuid" element={<EditForm />} />
      </Routes>
    </>
  );
}

export default App;
