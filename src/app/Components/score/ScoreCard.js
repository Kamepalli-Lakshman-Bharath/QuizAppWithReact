import styles from "./ScoreCard.module.css";

const ScoreCard = (props) => {
  const { marks } = props;
  return (
    <>
      <div className={styles.ScoreCard}>
        <i>score :</i>
        <h1 style={{ marginTop: "5px" }}>{marks} / 5</h1>
      </div>
    </>
  );
};
export default ScoreCard;
