import {useState, useEffect} from 'react';
import { getQuestions } from './requests';
// import { FinalScore } from './finalScore';

export const Questions = ({selectedCategoryID, setSelectedCategoryId}) => {
    const [quiz, setQuiz] = useState([])
    const [question, setQuestion] = useState ('')
    const [correct, setCorrect] = useState ([])
    const [incorrect, setIncorrect] = useState ([])
    let [index, setIndex] = useState(0)
    let [right, setRight] = useState(0)
    let [wrong, setWrong] = useState(0)

    useEffect(() => {
        getQuestions(selectedCategoryID)
            .then(response => {
                setQuestion(response.data.results[index].question
                    .replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'"))
                setCorrect(response.data.results[index].correct_answer
                    .replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'"))
                setIncorrect(response.data.results[index].incorrect_answers)
                setQuiz(response.data.results)
            })
    }, [selectedCategoryID, index])

    const handleClick = (e) => 
        e.target.innerText === correct ? (setIndex(index += 1), setRight(right += 1))
        : (setIndex(index += 1), setWrong(wrong += 1))

    const answers = (incorrect.concat(correct)).sort(() => Math.random() - 0.5);

    return (
        <div className="qa-container">
            {index < 10 ? (
            <div>

                <button className="button is-link"
                    onClick={() => setSelectedCategoryId(null)}>All Categories</button>
                <div className="questions box has-text-centered">
                    <h3 className="question">{question}</h3>
                    <h6 className="qofq">Question {index+1} of 10</h6>
                    <div className="answers box has-text-centered">
                        {answers.map((answer) => (
                            <button className="answers button is-info" 
                                onClick={(e) => handleClick(e)}>{answer
                                .replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}
                            </button>
                        ) )}
                    </div>    
                    <progress className="progress is-success" value={right} max="10"></progress>
                    <progress className="progress is-danger" value={wrong} max="10"></progress>

                </div>
            </div>

            ) : (
            <div><h4>Done!</h4></div>
            // <FinalScore 
            // setSelectedCategoryId={setSelectedCategoryId}
            // right={right}
            // wrong={wrong}
            // quiz={quiz} />
            )}
        </div>
    )
}