import styles from "./Chart.module.css";
import data from "../../data/data.json";

const Chart = () => {
  const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const d = new Date();
  let today = weekdays[d.getDay()];

  return (
    <div className={styles.chart}>
      {data.map((item) => {
        const barFillHeight = item.amount * 3 + "px";
        return (
          <div className={styles["bar-group"]} key={item.day}>
            <div className={styles["bar-number"]}>${item.amount}</div>
            <div
              className={
                item.day === today
                  ? `${styles.selected} ${styles.bar}`
                  : `${styles.bar}`
              }
              style={{ height: barFillHeight }}
            ></div>
            <div className={styles["bar-label"]}>{item.day}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Chart;
