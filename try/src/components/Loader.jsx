import { Spinner } from "react-bootstrap";
import styles from "../assets/styles/loader.module.css"

const Loader = () => {
    return (
        <div className={styles.loader}>
            <Spinner animation="border" variant="light" />
        </div>
    )
}

export default Loader;