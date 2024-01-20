import styles from './QuoteSection.module.css'


function QuoteSection({ data }) {

    setTimeout(() => {
        data.functions.changeData('page', 7)        
    },3000)
    
    

    return (
        <div className={styles.quotesContainer}>
            <h1>{data.quote}</h1>
            <span>- {data.author}</span>
        </div>
    )
}

export default QuoteSection