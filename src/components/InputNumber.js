import styles from './InputNumber.module.css'

function InputNumber({text, setValue}){
    return(
        <div className={styles.inputContainer}>
            { text && <span>{text}</span>}
            <input type="number" value={setValue} />
        </div>
    )
}

export default InputNumber