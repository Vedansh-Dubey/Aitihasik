import './App.css';
import Navbar1 from './components/Navbar/Navbar';
import Homepage from './pages/Homepage'
import Quizpage from './pages/Quizpage';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/quiz' element={<Quizpage />} />
      </Routes>
    </>
  );
}

export default App;
