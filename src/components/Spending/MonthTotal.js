import styles from "./MonthTotal.module.css";

const MonthTotal = () =>{
    return(<div className={styles['month-total']}>
        <div className={styles.left}>
            <p>Total this month</p>
            <p>$478.33</p>
        </div>
        <div className={styles.right}>
            <p>+2.4%</p>
            <p>from last month</p>
        </div>
    </div>)
}

export default MonthTotal;