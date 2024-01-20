import styles from './Button.module.css'

function Button({text,clickFunc,id}){
    return (
        <button 
        id={id}
        onClick={clickFunc} 
        className={styles.button}>
        {text}
        </button>
    )
}

export default Button