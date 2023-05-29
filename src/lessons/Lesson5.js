import React, { useState } from 'react';
import Sender from '../Sender';
const Lesson5 = () => {
  const initialState = {
    word1: '',
    word2: '',
    word3: '',
    word4: '',
    word5: '',
    word6: '',
    word7: '',
    word8: '',
    word9: '',
  };

  const [words, setWords] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const totalQuestions = 8;
    let correctAnswers = 0;
    if (words.word1.toLowerCase() === 'раму') {
      correctAnswers++;
    }
    if (words.word2.toLowerCase() === 'машину') {
      correctAnswers++;
    }
    if (words.word3.toLowerCase() === 'велосипед') {
      correctAnswers++;
    }
    if (words.word4.toLowerCase() === 'велосипед') {
      correctAnswers++;
    }
    if (words.word5.toLowerCase() === 'обрез') {
      correctAnswers++;
    }
    if (words.word6.toLowerCase() === 'обрез') {
      correctAnswers++;
    }
    if (words.word7.toLowerCase() === 'бэмвэ') {
      correctAnswers++;
    }
    if (words.word8.toLowerCase() === 'жопу') {
      correctAnswers++;
    }

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

  const [score, setScore] = useState(0);
  const lesson = 32323553535351;
  return (
    <div >
        <div className='main1>'>
      <h1>
        Мама мыла
        <input
          type="text"
          value={words.word1}
          onChange={(event) => handleInputChange(event, 'word1')}
          disabled={submitted}
        />
        Папа мыл
        <input
          type="text"
          value={words.word2}
          onChange={(event) => handleInputChange(event, 'word2')}
          disabled={submitted}
        />
        Вася мыл
        <input
          type="text"
          value={words.word3}
          onChange={(event) => handleInputChange(event, 'word3')}
          disabled={submitted}
        />
        Кристина мыла
        <input
          type="text"
          value={words.word4}
          onChange={(event) => handleInputChange(event, 'word4')}
          disabled={submitted}
        />
        Мойша мыл
        <input
          type="text"
          value={words.word5}
          onChange={(event) => handleInputChange(event, 'word5')}
          disabled={submitted}
        />
        Абрам мыл
        <input
          type="text"
          value={words.word6}
          onChange={(event) => handleInputChange(event, 'word6')}
          disabled={submitted}
        />
        Сериога мыл
        <input
          type="text"
          value={words.word7}
          onChange={(event) => handleInputChange(event, 'word7')}
          disabled={submitted}
        />
        Natasha мылa
        <input
          type="text"
          value={words.word8}
          onChange={(event) => handleInputChange(event, 'word8')}
          disabled={submitted}
        />
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
          <p>Q1: {words.word1.toLowerCase() === 'раму' ? 'true' : 'false'}</p>
          <p>Q2: {words.word2.toLowerCase() === 'машину' ? 'true' : 'false'}</p>
          <p>Q3: {words.word3.toLowerCase() === 'велосипед' ? 'true' : 'false'}</p>
          <p>Q4: {words.word4.toLowerCase() === 'велосипед' ? 'true' : 'false'}</p>
          <p>Q5: {words.word5.toLowerCase() === 'обрез' ? 'true' : 'false'}</p>
          <p>Q6: {words.word6.toLowerCase() === 'обрез' ? 'true' : 'false'}</p>
          <p>Q7: {words.word7.toLowerCase() === 'бэмвэ' ? 'true' : 'false'}</p>
          <p>Q8: {words.word8.toLowerCase() === 'жопу' ? 'true' : 'false'}</p>
          <p>Количество правильных ответов: {score}%</p>
        </div>
      )}</div>
<div className='sender1'><Sender lesson={lesson} score={score} /></div>
    </div>
  );
};

export default Lesson5;
























// import React, { useState } from 'react';

// const App = () => {
//   const initialState = {
//     word1: '',
//     word2: '',
//     word3: '',
//     word4: '',
//     word5: '',
//     word6: '',
//     word7: '',
//     word8: '',
//     word9: '',
//   };

//   const [words, setWords] = useState(initialState);
//   const [q1, setQ1] = useState(false);
//   const [q2, setQ2] = useState(false);
//   const [q3, setQ3] = useState(false);
//   const [q4, setQ4] = useState(false);
//   const [q5, setQ5] = useState(false);
//   const [q6, setQ6] = useState(false);
//   const [q7, setQ7] = useState(false);
//   const [q8, setQ8] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
// //   const [score, setScore] = useState(0);

//   const handleSubmit = () => {
//     if (words.word1.toLowerCase() === 'раму') {
//       setQ1(true);
//     }
//     if (words.word2.toLowerCase() === 'машину') {
//       setQ2(true);
//     }
//     if (words.word3.toLowerCase() === 'велосипед') {
//       setQ3(true);
//     }
//     if (words.word4.toLowerCase() === 'велосипед') {
//       setQ4(true);
//     }
//     if (words.word5.toLowerCase() === 'обрез') {
//       setQ5(true);
//     }
//     if (words.word6.toLowerCase() === 'обрез') {
//       setQ6(true);
//     }
//     if (words.word7.toLowerCase() === 'бэмвэ') {
//       setQ7(true);
//     }
//     if (words.word8.toLowerCase() === 'жопу') {
//       setQ8(true);
//     }
    

//     // setScore(100*(q1, q2, q3, q4, q5, q6, q7, q8)/8);
    
//     setSubmitted(true);
//   };

//   const handleInputChange = (event, wordKey) => {
//     const updatedWords = { ...words, [wordKey]: event.target.value };
//     setWords(updatedWords);
//   };
//   const score=(q1+ q2+ q3+ q4+ q5+ q6+ q7+ q8)/8*100
//   const handleReset = () => {
//     setWords(initialState);
//     setQ1(false);
//     setQ2(false);
//     setQ3(false);
//     setQ4(false);
//     setQ5(false);
//     setQ6(false);
//     setQ7(false);
//     setQ8(false);
//     setSubmitted(false);
//     // setScore();
//   };

//   return (
//     <div>
//       <h1>
//         Мама мыла
//         <input
//           type="text"
//           value={words.word1}
//           onChange={(event) => handleInputChange(event, 'word1')}
//           disabled={submitted}
//         />
//         Папа мыл
//         <input
//           type="text"
//           value={words.word2}
//           onChange={(event) => handleInputChange(event, 'word2')}
//           disabled={submitted}
//         />
//         Вася мыл
//         <input
//           type="text"
//           value={words.word3}
//           onChange={(event) => handleInputChange(event, 'word3')}
//           disabled={submitted}
//         />
//         Кристина мыла
//         <input
//           type="text"
//           value={words.word4}
//           onChange={(event) => handleInputChange(event, 'word4')}
//           disabled={submitted}
//         />
//         Мойша мыл
//         <input
//           type="text"
//           value={words.word5}
//           onChange={(event) => handleInputChange(event, 'word5')}
//           disabled={submitted}
//         />
//         Абрам мыл
//         <input
//           type="text"
//           value={words.word6}
//           onChange={(event) => handleInputChange(event, 'word6')}
//           disabled={submitted}
//         />
//         Сериога мыл
//         <input
//           type="text"
//           value={words.word7}
//           onChange={(event) => handleInputChange(event, 'word7')}
//           disabled={submitted}
//         />
//         Natasha мылa
//         <input
//           type="text"
//           value={words.word8}
//           onChange={(event) => handleInputChange(event, 'word8')}
//           disabled={submitted}
//         />
//       </h1>
//       <button onClick={handleSubmit} disabled={submitted}>
//         Submit
//       </button>
//       <button onClick={handleReset} disabled={!submitted}>
//         Обновить
//       </button>
//       {submitted && (
//         <div>
//           <p>Результаты:</p>
//           <p>Q1: {q1.toString()}</p>
//           <p>Q2: {q2.toString()}</p>
//           <p>Q3: {q3.toString()}</p>
//           <p>Q4: {q4.toString()}</p>
//           <p>Q5: {q5.toString()}</p>
//           <p>Q6: {q6.toString()}</p>
//           <p>Q7: {q7.toString()}</p>
//           <p>Q8: {q8.toString()}</p>
//           <p>Количество правильных ответов:    { score}%</p>
//           {/* {(q1+ q2+ q3+ q4+ q5+ q6+ q7+ q8)/8*100} */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
