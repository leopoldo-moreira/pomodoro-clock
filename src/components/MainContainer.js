import styles from './MainContainer.module.css'
import Loading from './Loading'

function MainContainer({type, quote, author, greetingMsg, btnTxt, time, temp, city}){
    return(
        <div className={styles.mainContainer}>
            {
            type === "quote" && (
                <div className={styles.quotes}>
                    <h1>{quote}</h1>
                    <span>- {author}</span>
                </div>
            )
            }

            {type === "loading" && <Loading/>}

            {
                type === "greeting" && (
                    <>
                        <div className={styles.dateAndTime}>                       
                            <div><span>It's now {time}</span></div>
                            <div><span>{city}</span></div>
                            <div><span>{temp} °C</span></div>
                        </div>
                        <h1>{greetingMsg}</h1>
                        <button></button>
                    </>                    
                )
            }


        </div>
    )
}

export default MainContainer