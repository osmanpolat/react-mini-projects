import { useState } from "react";
import questionsData from "./data.js";
import React from "react";
import Question from "./Questions.jsx";

 
function App() {

const [questions,setQuestions]=useState(questionsData)

  return  <main>
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
       {
        questionsData.map((question)=>{
          return <Question key={question.id}{...question} />
})
       } 
      </section>
    </div>
  </main>
   
}
export default App;
