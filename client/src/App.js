import { useState } from 'react';
import './App.css';
import Navbar1 from './components/Navbar/Navbar';
import Homepage from './pages/Homepage'
import Quizpage from './pages/Quizpage';
import { Routes, Route } from 'react-router-dom'
import { Ruler } from './pages/Ruler';
import { Forts } from './pages/Forts';

function App() {
  const [questions, setQuestions] = useState([]);
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path='/' element={<Homepage questions={questions} setQuestions={setQuestions}/>} />
        <Route path='/quiz' element={<Quizpage questions={questions} setQuestions={setQuestions} />} />
        <Route path='/rulers' element={<Ruler />} />
        <Route path='/forts' element={<Forts />} />
      </Routes>
    </>
  );
}

export default App;
