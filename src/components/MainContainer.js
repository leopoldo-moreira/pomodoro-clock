import styles from './MainContainer.module.css'
import Loading from './Loading'
import Greeting from './pages/Greeting'
import QuoteSection from './pages/QuoteSection'
import ChooseActivity from './pages/ChooseActivity'
import { FaArrowLeft } from "react-icons/fa";


function MainContainer({ data }) {


   


    return (
        <div className={styles.mainContainer}>
            { data.type !== "greeting" && 
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


        </div>
    )
}

export default MainContainer