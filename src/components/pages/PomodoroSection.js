import styles from './PomodoroSection.module.css'
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { GoGear } from "react-icons/go";
import { RxTrackNext } from "react-icons/rx";
import { MdDone } from "react-icons/md";
import ProgressBar from '@ramonak/react-progress-bar';



function PomodoroSection() {
    return (
        <div className={styles.counterContainer}>
            <GoGear className={styles.gearEdit} />
            <h1>Hora de Estudar</h1>
            <h1>25:00</h1>
            <div className={styles.controlPanel}>
                <CiPlay1 />
                <CiPause1 />
                <GrPowerReset />
                <RxTrackNext />
                <MdDone />
                
            </div>
            <ProgressBar
             completed={10}
             className={styles.progressBar}
             bgColor='#397097'
              />
        </div>
    )
}

export default PomodoroSection