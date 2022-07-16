import { Container } from '@mui/system';
import React, { useState } from 'react'
import styled from 'styled-components'

const Quizpage = () => {
    const questions = [
        {
            questionText: 'What is the capital of France?',
            questionImg: 'https://static.sanatanprabhat.org/wp-content/uploads/sites/7/2021/04/11210300/RS971_shivaji_maharaj_colour_Goa.jpg',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?', questionImg: 'https://static.sanatanprabhat.org/wp-content/uploads/sites/7/2021/04/11210300/RS971_shivaji_maharaj_colour_Goa.jpg',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?', questionImg: 'https://static.sanatanprabhat.org/wp-content/uploads/sites/7/2021/04/11210300/RS971_shivaji_maharaj_colour_Goa.jpg',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?', questionImg: 'https://static.sanatanprabhat.org/wp-content/uploads/sites/7/2021/04/11210300/RS971_shivaji_maharaj_colour_Goa.jpg',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];

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
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
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
top:50%;
transform: translate(-50% ,-50%);
  background-color: #252d4a;
  width: 40%;
  min-height: 200px;
  color: white;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
    flex-direction: column;
  justify-content: space-evenly;

  .score-section {
  display: flex;
  font-size: 24px;
  align-items: center;
}
.question-img{
    width: 15rem;
    height: 15rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.question-section {
  width: 100%;
  position: relative;
}

.question-count {
  margin-bottom: 20px;
}

.question-count span {
  font-size: 28px;
}

.question-text {
  margin-bottom: 12px;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

button {
  width: 100%;
  font-size: 16px;
  color: #ffffff;
  background-color: #252d4a;
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: flex-start;
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
  background-color: #555e7d;
}

button:focus {
  outline: none;
}

button svg {
  margin-right: 5px;
}
`

export default Quizpage