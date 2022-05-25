import styles from "./Balance.module.css";
import logo from "../assets/logo.svg";

const Balance = () =>{
    return(
        <header className={styles.balance}>
            <div>
                <p>My balance</p>
                <p>$921.48</p>
            </div>
            <img src={logo} alt="logo"/>
        </header>
    )
}

export default Balance;