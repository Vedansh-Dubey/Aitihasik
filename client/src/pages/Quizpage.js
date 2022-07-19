import { Container } from '@mui/system';
import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios'
const Quizpage = () => {
  const [questions, setQuestions] = useState([
    {
      "questionText": "Chhatrapati Shivaji Maharaj (1674-1680 AD) was the ruler of which dynasty?",
      "questionImg": "https://static.sanatanprabhat.org/wp-content/uploads/sites/7/2021/04/11210300/RS971_shivaji_maharaj_colour_Goa.jpg",
      "answerOptions": [
          {
              "answerText": "Nanda",
              "isCorrect": false
          },
          {
              "answerText": "Haryanka",
              "isCorrect": false
          },
          {
              "answerText": "Maurya",
              "isCorrect": false
          },
          {
              "answerText": "Maratha",
              "isCorrect": true
          }
      ]
    }
  ]);
  const getQuiz = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API}/quiz`);
    console.log(data);
    setQuestions(data)
  }

  useEffect(() => {
    getQuiz();
  }, [])


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <Container maxWidth={'lg'}>
      <QuizWrap >
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-img'><img src={questions[currentQuestion].questionImg} alt="" />{ }</div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption,index) => (
                <button key={index}onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
      </QuizWrap>
    </Container>
  )
}

const QuizWrap = styled.div`
position: absolute;

left:50%;
top:55%;
transform: translate(-50% ,-50%);
  background-color: #252d4a;
  width: 100%;
  min-height: 200px;
  color: white;
  height: 100%;
  // border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
    flex-direction: column;
  justify-content: space-evenly;

  .score-section {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
padding-top: 10px;
    align-self: center;
    vertical-align: middle;
width: 100%;
    border-radius: 15px;
    color: black;
background-color: #BECEFF;

}
.question-img{
    width: 14rem;
    height: 15rem;
    img{
      border-radius: 1rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0% 15%;
    }
}
.question-section {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column ;
  align-items: center;
}

.question-count {
  margin-bottom: 20px;
}

.question-count span {
  font-size: 28px;
}

.question-text {
  margin: 1.2rem 0;
}

.timer-text {
  background: rgb(230, 153, 12);
  padding: 15px;
  margin-top: 20px;
  margin-right: 20px;
  border: 5px solid rgb(255, 189, 67);
  border-radius: 15px;
  text-align: center;
}

/* ANSWERS/RIGHT SECTION */
.answer-section {
  width: 80%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

button {
  margin-top: 5px;
  width: 100%;
  font-size: 16px;
  color: #ffffff;
  background-color: #252d4a;
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border: 5px solid #234668;
  cursor: pointer;
}

.correct {
  background-color: #2f922f;
}

.incorrect {
  background-color: #ff3333;
}

button:hover {
  background-color: #6579C2;
}

button:focus {
  outline: none;
}

button svg {
  margin-right: 5px;
}
`

export default Quizpage