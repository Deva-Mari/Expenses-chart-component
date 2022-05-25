import styles from "./Spending.module.css";
import Chart from "./Spending/Chart";
import MonthTotal from "./Spending/MonthTotal";

const Spending = () =>{
    return(<main className={styles.spending}>
        <h1>Spending - Last 7 days</h1>
        <Chart/>
        <hr/>
        <MonthTotal/>
    </main>)
}
export default Spending;