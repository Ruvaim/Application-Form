import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LoadEditForm from './components/LoadEditForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/edit/:uuid" element={<LoadEditForm />} />
      </Routes>
    </>
  );
}

export default App;
