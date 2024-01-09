import styles from './InputNumber.module.css'

function InputNumber({text}){
    return(
        <div className={styles.inputContainer}>
            <span>{text}</span>
            <input 
                
                type="number"                    
                />
        </div>
    )
}

export default InputNumber