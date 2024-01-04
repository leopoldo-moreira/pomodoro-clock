import styles from './MainContainer.module.css'
import Loading from './Loading'

function MainContainer({type, quote, author}){
    return(
        <div className={styles.mainContainer}>
            {type === "quote" && (
                <div className={styles.quotes}>
                    <h1>{quote}</h1>
                    <span>- {author}</span>
                </div>
            )}

            {type === "loading" && <Loading/>}


        </div>
    )
}

export default MainContainer