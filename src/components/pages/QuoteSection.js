import styles from './QuoteSection.module.css'

function QuoteSection({ data }) {
    return (
        <div className={styles.quotes}>
            <h1>{data.quote}</h1>
            <span>- {data.author}</span>
        </div>
    )
}

export default QuoteSection