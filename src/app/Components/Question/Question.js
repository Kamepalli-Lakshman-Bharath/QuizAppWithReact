"use client";
import { useEffect, useState } from "react";
import styles from "./Question.module.css";

const Question = (props) => {
  const { question, id, options, answer, sendScore } = props;
  const [score, setScore] = useState({[id]:0});
  const Evaluation = (e) => {
   e.target.value == answer ? setScore({[id]:1}): setScore({[id]:0})// question no : score
   
  };
  useEffect(()=>{
    sendScore(score)
  },[score])

  return (
    <>
      <h3 className={styles.question}>
        {id}Q. {question}
      </h3>
      {options.map((option, idx) => (
        <label key={idx} className={styles.option}>
          <input
            type="radio"
            name={"Q" + id}
            onClick={Evaluation}
            value={idx + 1}
            
          />
          {option} <br />
        </label>
      ))}
      <hr />
    </>
  );
};
export default Question;
