import styles from './PomodoroSection.module.css'
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";

function PomodoroSection(){
    return(
        <div>
            <h1>Hora de estudar</h1>
            <div className={styles.counterContainer}>
                <h1>25:00</h1>
                <div className={styles.controlPanel}>
                    <CiPlay1 />
                    <CiPause1 />
                    <GrPowerReset />
                </div>
            </div>
        </div>
    )
}

export default PomodoroSection