import styles from './MainContainer.module.css'

function MainContainer({type, quote, author}){
    return(
        <div className={styles.mainContainer}>
            {type === "quote" && (
                <div className={styles.quotes}>
                    <h1>{quote}</h1>
                    <span>- {author}</span>
                </div>
            )}
        </div>
    )
}

export default MainContainer