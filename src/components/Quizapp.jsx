import React, { useState } from 'react'

function Quizapp() {

    const [curquestions, setcurQuestion] = useState(0)
const [score , setScore] = useState(0)
const [showscore, setShowscore ] = useState(true)


    const Question = [{
        question: "Who is the Prime Minister Of India ?",
        options: ['Narendra Modi', "Rahul Gandhi", "Arvind Kejriwal"],
        answer: "Narendra Modi"
    },

    {
        question:
            "How many months in a year ?",
        options: ['11', '23', '12'],
        answer: "12"

    }
        ,

    {
        question: "The some of 45+45 is ?",
        options: ["45", "90", "120"],
        answer: '90'
    }
    ]

function handleQuestions(showoption){
  if ( showoption === Question[curquestions].answer){
    setScore( score +1)
  }
const next = curquestions +1 
if(next < Question.length){
    
}
else {

}

} 
    return (
        <div><h1>
            The quiz app</h1>
<p>
    options
</p>
<h4>
    
    <button  key={option} onClick={()=> handleQuestions}></button>
</h4>
        </div>
    )
}

export default Quizapp