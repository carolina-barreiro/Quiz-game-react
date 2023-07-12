import './App.css';
import React from 'react';
import { useState } from 'react';
import { questionList } from './data.js';

export default function Question() {
    const [atQuestion, setAtQuestion] = useState(0);
    const [selectedOption, setSelectedOpt] = useState('');
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    function handleNext() {
        let correctAnwser = questionList.filter(q => q.id === atQuestion)[0].correct;
        if (selectedOption === '') {
            alert('Choose an option before submitting!');
        } else {
            setAtQuestion(atQuestion + 1);
            if (selectedOption === correctAnwser) {
                setScore(n => n + 1);
            }
            setSelectedOpt(''); // Reset selected option to unselect it
            if (atQuestion + 1 === questionList.length) {
                setShowScore(true);
            }
        }
    }

    function onValueChange(event) {
        setSelectedOpt(event.target.value);
    }

    return (<>
        {showScore ? (
            <div >
                <h2> You scored {score} out of {questionList.length}!</h2>
            </div>
        ) : (
            <>
                <h2 id="question">{questionList.filter(q => q.id === atQuestion)[0].q}</h2>
                <ul>
                    <li>
                        <input type="radio" name="answer" id="a" className="answer" value='a' onChange={onValueChange} checked={selectedOption === 'a'} />
                        <label htmlFor="a" id="a_text">{questionList.filter(q => q.id === atQuestion)[0].options[0].a}</label>
                    </li>

                    <li>
                        <input type="radio" name="answer" id="b" className="answer" value='b' onChange={onValueChange} checked={selectedOption === 'b'} />
                        <label htmlFor="b" id="b_text"> {questionList.filter(q => q.id === atQuestion)[0].options[1].a}</label>
                    </li>

                    <li>
                        <input type="radio" name="answer" id="c" className="answer" value='c' onChange={onValueChange} checked={selectedOption === 'c'} />
                        <label htmlFor="c" id="c_text">{questionList.filter(q => q.id === atQuestion)[0].options[2].a}</label>
                    </li>
                </ul>
                <br></br>
                <button id="submit" onClick={handleNext}>{((atQuestion + 1) == questionList.length) ? 'Submit' : 'Next'}</button>
                <br></br>
            </>
        )}

    </>
    );
}
