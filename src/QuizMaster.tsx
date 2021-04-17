import React, {useState} from 'react';
import {Dispatch} from 'redux';
import './QuizMaster.css';
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "./redux/store";
import {Answer} from "./redux/reducers/questionReducer";

function QuizMaster() {
    const dispatch: Dispatch<any> = useDispatch()
    const question = useSelector((state: ApplicationState) => state.questions.currentQuestion);
    const [answer, setAnswer] = useState('');

    const updateAnswer = (target: React.FormEvent<HTMLInputElement>) => {
        setAnswer(target.currentTarget.value);
    }

    const submitAnswer = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch({
            type: 'SUBMIT_ANSWER',
            payload: {
                questionId: question.id,
                answer
            } as Answer,
        });
    }

    return (
        <section className="QuizMaster">
            <h3>{question.label}</h3>
            <figure className="QuizMaster-figure">
                <img src={"/minerals/calcite.jpeg"}
                     alt={"Color is white or none, though shades of gray, red, orange, yellow, green, blue, violet, brown, or even black can occur when the mineral is charged with impurities"}/>
            </figure>
            <form onSubmit={submitAnswer}>
                <input type="text" value={answer} onChange={updateAnswer}/>
                <input type="submit" value="Submit"/>
            </form>
        </section>
    );
}

export default QuizMaster;
