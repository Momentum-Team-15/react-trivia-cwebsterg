import {useState, useEffect} from 'react';
import { requestQuestions } from './requests';
import { FinalScore } from './finalScore';

export const Questions = ({selectedCategoryID, setSelectedCategoryId}) => {
    const [quiz, setQuiz] = useState([])
    const [question, setQuestion] = useState ('')
    const [ccorrect, setCorrect] = useState ([])
    const [incorrect, setIncorrect] = useState ([])
    let [index, setIndex] = useState(0)
    let [right, setRight] = useState(0)
    let [wrong, setWrong] = useState(0)

    useEffect(() => {
        requestQuestions(selectedCategoryID)
            .then(response => {
                setQuestion(response.data.results[index].question
                    .replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'"))
                setCorrect(response.data.results[index].correct_answer)
            })
    })