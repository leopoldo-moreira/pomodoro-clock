import styles from './PomodoroSection.module.css'
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { GoGear } from "react-icons/go";
import { RxTrackNext } from "react-icons/rx";
import { MdDone } from "react-icons/md";
import ProgressBar from '@ramonak/react-progress-bar';
import Countdown from 'react-countdown';
import { useRef, useState } from 'react';




function PomodoroSection({ data }) {

    const [section, setSection] = useState(parseInt(data.pomodoroTimer[3] - 1))
    const [newProgress, setNewProgress] = useState(0)
    const [turnControler, setTurnControler] = useState(true)
    const [workTime, setWorkTime] = useState(true)

    newProgress === 100 && data.functions.nextPage()

    const progressBar = () => {

        if (newProgress === 100) {
            setSection(parseInt(data.pomodoroTimer[3] - 1))
            setNewProgress(0)

        } else {
            setSection(section - 1)
            setNewProgress(Math.abs(((section / data.pomodoroTimer[3]) - 1) * 100))
        }
    }

    const timer = useRef(null)

    const startTimer = () => {
        timer.current && timer.current.api.start();
        setTurnControler(true)
    }

    const pauseTimer = () => {
        timer.current && timer.current.api.pause();
    }

    const resetTimer = () => {
        data.functions.changeData('page', 7)
        setNewProgress(0)
        setWorkTime(true)
        setSection(parseInt(data.pomodoroTimer[3] - 1))
        pauseTimer()

    }

    const editTimer = () => {
        data.functions.editMode()
    }
   

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {  
            if (!turnControler){return false}
            if(workTime){
                progressBar()
                setWorkTime(!workTime)
                setTurnControler(false)
            }else{
                setWorkTime(!workTime)
                setTurnControler(false)
            }         
                        
        } else {
            // Render a countdown
            return <h1>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</h1>;
        }
    };

    const timeToWork = 5000 //data.pomodoroTimer[0] * 60 * 1000;      
    const timeToPause = 2000

    return (
        <div className={styles.counterContainer}>
            <GoGear id="editBtn" onClick={editTimer} className={styles.gearEdit} />
            <h1>{workTime ? ('Hora de Estudar') : ('Hora da Pausa')}</h1>
            <Countdown
                date={Date.now() + (workTime ? timeToWork : timeToPause)}
                renderer={renderer}
                autoStart={false}
                ref={timer}
            />
            <div className={styles.controlPanel}>
                <CiPlay1 onClick={startTimer} />
                <CiPause1 onClick={pauseTimer} />
                <GrPowerReset onClick={resetTimer} />
                <RxTrackNext />
                <MdDone onClick={data.functions.nextPage} />

            </div>
            <button onClick={progressBar}> teste progress</button>
            <ProgressBar
                completed={newProgress}
                className={styles.progressBar}
                bgColor='#397097'
            />


        </div>
    )
}

export default PomodoroSection