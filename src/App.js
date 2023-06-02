import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Infopusher from './Infopusher';

import Lesson1 from './lessons/Lesson1';
import Lesson2 from './lessons/Lesson2';
import Lesson3 from './lessons/Lesson3';
import Lesson4 from './lessons/Lesson4';
import Lesson5 from './lessons/Lesson5';
import './App.css';

const text_list = ['Last summer, I ', ' my days exploring new places and creating unforgettable memories. I ', ' several beautiful countries, including France, Italy, and Spain. I have always ', ' of seeing the Eiffel Tower, so I ', ' to Paris and ', ' at its grandeur. During my trip, I also indulged in delicious French pastries and ', ' along the charming streets of Montmartre. In Italy, I ', ' ancient ruins in Rome and savored authentic pasta dishes. Moreover, I have never ', ' more alive than when I ', ' in front of the majestic Colosseum. Continuing my journey, I ', ' to the vibrant city of Barcelona in Spain, where I ', ' the energetic atmosphere of La Rambla and ', ' the stunning architecture of Antoni Gaudí. Throughout my travels, I have ', ' incredible people from different cultures and made lifelong friends. By the end of the summer, I had ', ' numerous photographs and souvenirs, serving as constant reminders of the amazing adventures I had experienced. Overall, last summer ', ' a time of exploration, discovery, and personal growth that I will cherish forever.']

const answer_list = [{'q1': 'spent'}, {'q2': 'visited'}, {'q3': 'dreamed'}, {'q4': 'traveled'}, {'q5': 'marveled'}, {'q6': 'strolled'}, {'q7': 'explored'}, {'q8': 'felt'}, {'q9': 'stood'}, {'q10': 'ventured'}, {'q11': 'experienced'}, {'q12': 'admired'}, {'q13': 'met'}, {'q14': 'collected'}, {'q15': 'was'}]

console.log('Type of text_list:', typeof  text_list);

console.log('Type of answer_list:', typeof  answer_list);




function App() {
  return (
    <Router>
      <div className="App-wrapper">
        <nav className="App-nav">
          <ul>
            <li>
              <Link to="/lesson1">Lesson 1</Link>
            </li>
            <li>
              <Link to="/lesson2">Lesson 2</Link>
            </li>
            <li>
              <Link to="/lesson3">Lesson 3</Link>
            </li>
            <li>
              <Link to="/lesson4">Lesson 4</Link>
            </li>
            <li>
              <Link to="/lesson5">Lesson 5</Link>
            </li>
            <li>
              <Link to="/push your lesson">Push your lesson</Link>
            </li>
          </ul>
        </nav>

        <div className="App-content">
          <Routes>
            <Route path="/lesson1" element={<Lesson1 new_list={text_list} wordList={answer_list} />} />

            <Route path="/lesson2" element={<Lesson2 />} />
            <Route path="/lesson3" element={<Lesson3 />} />
            <Route path="/lesson4" element={<Lesson4 />} />
            <Route path="/lesson5" element={<Lesson5 />} />
            <Route path='/push your lesson' element={<Infopusher />} />
          </Routes>
        </div>
       
      </div>
    </Router>
  );
}

export default App;
