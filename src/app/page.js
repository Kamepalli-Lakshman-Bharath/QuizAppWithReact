"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";
import Question from "./Components/Question/Question";
import Score from './Components/score/ScoreCard'

export default function Home() {
  const [userAns, setUserAns] = useState([]);
  const [qData, setQData] = useState([]);
  const [score, setScore] = useState(0);
  const formRef = useRef(null)
  useEffect(() => {
    axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz")
      .then((res) => {
        setQData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handlescore = (data) => {
    setUserAns(Object.assign({ ...userAns }, data));
  };
  console.log(userAns);
  const showMarks = (e) => {
    e.preventDefault();
    let marks = Object.values(userAns).reduce((acc, val) => acc + val, 0);
    setScore(marks);
    formRef.current.reset()
  };

  return (
    <main>
      <h1 className={styles.heading}>Quizz App</h1>
      <div className={styles.flexContainer}>
        <form ref={formRef} className={styles.form}>
        {qData.length != 0 &&
          qData.map((data) => (
            <Question
              sendScore={handlescore}
              key={data.id}
              id={data.id}
              question={data.question}
              options={data.options}
              answer={data.answer}
            />
          ))}
        <button onClick={showMarks} className={styles.btn}>
          submit
        </button>
      </form>
      <Score  marks={score}/>
      </div>
      
    </main>
  );
}
