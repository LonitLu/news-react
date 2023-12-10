import { formatDate } from "../../helpers/formatDate.js";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ПОСЛЕДНИЕ НОВОСТИ</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
    // добавить обновление даты
  );
};

export default Header;
