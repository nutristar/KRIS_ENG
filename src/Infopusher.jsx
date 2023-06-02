import React, { useState } from 'react';
import axios from 'axios';

function Infopusher() {
  const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!firstName ) {                 //|| !lastName
      console.log('Поля не заполнены');
      return; }
    const urlParams = new URLSearchParams({ firstName });    //, lastName
    const url = `https://dalm3fumlh.execute-api.eu-central-1.amazonaws.com/default/kris_eng_from_front_to_db?${urlParams}`;

    try {
      const response = await axios.get(url);
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setResponseMessage('');   }

    setFirstName('');
    // setLastName('');
  };

  return (
    <div>
      <h1>Insert your text with curely braces wraped words you`d like to be guessed</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          You text should be here:
          <textarea
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        {/* <label>   Фамилия: <textarea value={lastName} onChange={(event) => setLastName(event.target.value)}  />     </label> */}
        <button type="submit">Отправить</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
      
    </div>
  );
  
}

export default Infopusher;
