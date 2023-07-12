import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';
import { questionList } from './data.js';
import Question from './Question.js'

function App() {

  return (
    <div className="App">
      <div className="quiz-container" id="quiz">
        <div className="quiz-header">
          <Question />
        </div>
        
    </div>
    </div >
  );
}

export default App;
