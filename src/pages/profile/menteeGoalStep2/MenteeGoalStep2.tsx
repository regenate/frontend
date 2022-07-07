import styles from "./MenteeGoalStep2.module.scss";

export default function MenteeGoalStep2() {
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h4>Dig deeper into your goals with a mentor</h4>
        <p>
          Be part of a community of mentees globally that supports each other{" "}
          <br />
          to make magical conversations that happen; supported 24/7.
        </p>
      </div>
      <div className={styles.butt}>
        <div className={styles.heading}>
          <p>STEP 1 of 5</p>
          <h5>What's your top goal right now?</h5>
        </div>
        <div className={styles.lab}>
          <div className={styles.field}>
            Find a job
            <input type="checkbox" className={styles.check} />
          </div>
          <div className={styles.field}>
            Upskill and learn
            <input type="checkbox" className={styles.check} />
          </div>
          <div className={styles.field}>
            Grow personally
            <input type="checkbox" className={styles.check} />
          </div>
          <div className={styles.field}>
            Transition careers
            <input type="checkbox" className={styles.check} />
          </div>
          <div className={styles.field}>Not sure</div>
        </div>

        <div className={styles.button}>
          <button>Continue</button>
        </div>
      </div>
      <div className={styles.dashboard}>Skip to dashboard</div>
    </div>
  );
}
