import styles from './MainContainer.module.css'
import Loading from './Loading'
import Greeting from './pages/Greeting'
import QuoteSection from './pages/QuoteSection'


function MainContainer({ data }) {


   


    return (
        <div className={styles.mainContainer}>
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


        </div>
    )
}

export default MainContainer