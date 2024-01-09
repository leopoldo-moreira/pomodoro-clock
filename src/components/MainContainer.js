import styles from './MainContainer.module.css'
import Loading from './Loading'
import Greeting from './pages/Greeting'
import QuoteSection from './pages/QuoteSection'
import ChooseActivity from './pages/ChooseActivity'
import { FaArrowLeft } from "react-icons/fa";
import TimeSection from './pages/TimeSection'
import ChoosePeriods from './pages/ChoosePeriods'
import WannaMusic from './pages/WannaMusic'


function MainContainer({ data }) {


   


    return (
        <div className={styles.mainContainer}>
            { data.type !== "greeting" &&  data.type !=="quote" &&
                <FaArrowLeft/>
            }

            {
                data.type === "quote" && (
                    <QuoteSection data={data} />
                )
            }

            {data.type === "loading" && <Loading />}


            {
                data.type === "greeting" && (
                    <Greeting data={data} />
                )
            }

            {
                data.type === "activity" && (                                        
                    <ChooseActivity data={data}/>                    
                )
            }

            {
                data.type === "timeSection" && (                                        
                    <TimeSection data={data}/>
                )
            }

            {
                data.type === "periods" && (                                        
                    <ChoosePeriods data={data}/>
                )
            }

            {
                data.type === "music" && (                                        
                    <WannaMusic data={data}/>
                )
            }


        </div>
    )
}

export default MainContainer