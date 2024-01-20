import styles from './MainContainer.module.css'
import { FaArrowLeft } from "react-icons/fa";

import GreetingSection from './pages/GreetingSection'
import ChooseActivitySection from './pages/ChooseActivitySection'
import SetTimeSection from './pages/SetTimeSection'
import ChoosePeriodsSection from './pages/ChoosePeriodsSection'
import WannaMusicSection from './pages/WannaMusicSection'
import QuoteSection from './pages/QuoteSection'
import PomodoroSection from './pages/PomodoroSection'
import GoodByeSection from './pages/GoodByeSection'
import WorkDoneSection from './pages/WorkDoneSection';

function MainContainer({ data }) {

    const notBackArrow = [
        1, // 1# GreetingSection
        6, // 6# QuoteSection
        7, // 7# PomodoroSection
        8, // 8# WorkDoneSection
        9 // 9# GoodByeSection
    ]

    
    
    return (
        <div className={styles.mainContainer}>

            { // Display backArrow
                !notBackArrow.includes(data.page) &&
                    <FaArrowLeft
                    onClick={data.functions.previouslyPage}
                    className={styles.backArrow}
                    />
            }

            { // 1# GreetingSection
                data.page === 1 && (
                    <GreetingSection data={data} />
                )
            }

            { // 2# ChooseActivitySection
                data.page === 2 && (
                    <ChooseActivitySection data={data} />
                )
            }

            { // 3# SetTimeSection
                data.page === 3 && (
                    <SetTimeSection data={data} />
                )
            }

            { // 4# ChoosePeriodsSection
                data.page === 4 && (
                    <ChoosePeriodsSection data={data} />
                )
            }

            { // 5# WannaMusicSection
                data.page === 5 && (
                    <WannaMusicSection data={data} />
                )
            }
            
            { // 6# QuoteSection
                data.page === 6 && (
                    <QuoteSection data={data} />
                )
            }
            
            { // 7# PomodoroSection
                data.page === 7 && (
                    <PomodoroSection data={data} />
                )
            }

            { // 8# WorkDoneSection
                data.page === 8 && (
                    <WorkDoneSection data={data} />
                )
            }

            { // 9# GoodByeSection
                data.page === 9 && (
                    <GoodByeSection data={data} />
                )
            }


        </div>
    )
}

export default MainContainer