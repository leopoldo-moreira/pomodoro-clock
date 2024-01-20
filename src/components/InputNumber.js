import styles from './InputNumber.module.css'

function InputNumber({text, setValue, funcOnChange, name}){
    return(
        <div className={styles.inputContainer}>
            { text && <span>{text}</span>}
            <input name={name} type="number" value={setValue} onChange={funcOnChange} />
        </div>
    )
}

export default InputNumber