import './App.css';
import Navbar1 from './components/Navbar/Navbar';
import Homepage from './pages/Homepage'
import Quizpage from './pages/Quizpage';
import { Routes, Route } from 'react-router-dom'
import { Ruler } from './pages/Ruler';
function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/quiz' element={<Quizpage />} />
        <Route path='/rulers' element={<Ruler />} />
      </Routes>
    </>
  );
}

export default App;
