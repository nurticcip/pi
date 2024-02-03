import React from 'react';
import '../Question/Question.css'
import mainLogo from "../../images/main-logo.png";


const Question = () => {
    return (
        <div id='question'>
            <div className="container">
                <div className="question">
                    <div className="question-header"></div>
                    
                    <div className="question-hero">
                        <div className="question-info">
                            <h1>Вопрос на 500 балл</h1>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nam, dolorem aspernatur voluptatum fugiat delectus. Doloremque saepe voluptatibus aspernatur nobis alias, harum aliquid provident fugit odio numquam quis, quod non?
                            </p>
                        </div>
                        <div className="question-btns">
                            <button className='uncorrect'>Неправильно</button>
                            <button className='correct'>Правильно</button>
                        </div>
                    </div>
                    <div  className="main-team">
                            <h1>КОМАНДЫ:</h1>
                            <div className="team">
                                <h2>КОМАНДА 1</h2>
                                <span>очко 1</span>
                            </div>
                            <div className="team">
                                <h2>КОМАНДА 2</h2>
                                <span>очко 2</span>
                            </div>
                            <div className="team">
                                <h2>КОМАНДА 3</h2>
                                <span>очко 3</span>
                            </div>
                            <div className="team">
                                <h2>КОМАНДА 4</h2>
                                <span>очко 4</span>
                            </div>
                            <div className="team">
                                <h2>КОМАНДА 5</h2>
                                <span>очко 5</span>
                            </div>
                            <div className="team">
                                <h2>КОМАНДА 6</h2>
                                <span>очко 6</span>
                            </div>
                            <button>ДОМОЙ</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;