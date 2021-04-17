import React from 'react';
import './Quiz.css';
import QuizMaster from "./QuizMaster";

function Quiz() {
    return (
        <div className="Quiz">
            <header className="Quiz-header">
                <h1>Mineral Quiz</h1>
            </header>

            <QuizMaster/>
        </div>
    );
}

export default Quiz;
