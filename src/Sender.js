import React from 'react';
import axios from 'axios';

function Sender({ lesson, score }) {
  const handleResultSubmit = () => {
    const url = 'http://localhost:8000';

    // Отправка запроса на сервер с помощью Axios
    axios
      .get(url, {
        params: {
          lesson: lesson,
          score: score,
        },
      })
      .then(response => {
        console.log('Отправлен запрос:', response.data);
      })
      .catch(error => {
        console.error('Ошибка запроса:', error);
      });
  };

  return (
    <div>
      <button onClick={handleResultSubmit}>Отправить результат</button>
    </div>
  );
}

export default Sender;
