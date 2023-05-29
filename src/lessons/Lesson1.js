import React, { useState } from 'react';
import Sender from '../Sender';

const Lesson1 = ({ new_list, wordList }) => {
  const initialState = {};
  wordList.forEach((item, index) => {
    const key = `word${index + 1}`;
    initialState[key] = '';
  });

  const [words, setWords] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const totalQuestions = wordList.length;

  const handleSubmit = () => {
    let correctAnswers = 0;
    wordList.forEach((item, index) => {
      const key = `word${index + 1}`;
      if (words[key].toLowerCase() === item[key]) {
        correctAnswers++;
      }
    });

    const percentage = (correctAnswers / totalQuestions) * 100;
    setSubmitted(true);
    setScore(percentage);
  };

  const handleInputChange = (event, wordKey) => {
    const updatedWords = { ...words, [wordKey]: event.target.value };
    setWords(updatedWords);
  };

  const handleReset = () => {
    setWords(initialState);
    setSubmitted(false);
    setScore(0);
  };
 
const massiv_strok = new_list
 

  const lesson = 32323553535351;
  
  return (
    <div>
      <div className='main1'>
        <h1>
        {massiv_strok.map((str, index) => (
          index < massiv_strok.length - 1 ? (
            <React.Fragment key={index}>
              {str}
              <input
                type="text"
                value={words[`word${index + 1}`]}
                onChange={(event) => handleInputChange(event, `word${index + 1}`)}
                disabled={submitted}
              />
            </React.Fragment>
          ) : (
            str
          )
        ))}
{/* {massiv_strok} */}


        </h1>
        <button onClick={handleSubmit} disabled={submitted}>
          Submit
        </button>
        <button onClick={handleReset} disabled={!submitted}>
          Обновить
        </button>
        {submitted && (
          <div>
            <p>Результаты:</p>
            {wordList.map((item, index) => (
              <p key={index}>
                Q{index + 1}: {words[`word${index + 1}`].toLowerCase() === item[`q${index + 1}`].toLowerCase() ? 'true' : 'false'}
              </p>
            ))}
            <p>Количество правильных ответов: {score}%</p>
          </div>
        )}
      </div>
      <div className='sender1'>
        <Sender lesson={lesson} score={score} />
      </div>
    </div>
  );
};

export default Lesson1;
