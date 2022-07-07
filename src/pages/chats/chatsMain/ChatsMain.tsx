import styles from "./ChatsMain.module.scss";
import message from "./message.svg";

export default function ChatsMain() {
  return (
    <div className={styles.input}>
      <div className={styles.left}>
        <h1>Achieved Messages </h1>
        <hr />
        <p>No Messages</p>
      </div>
      <div className={styles.right}>
        <img className={styles.message} src={message} alt="" />
        <h6>Start New Messages</h6>
        <p>
          Messages sent after connecting with a mentee/mentor will appear here
        </p>
        <button>Write a message</button>
      </div>
    </div>
  );
}
