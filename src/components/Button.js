import styles from './Button.module.css'

function Button({text,clickFunc}){
    return (
        <button onClick={clickFunc} className={styles.button}>{text}</button>
    )
}

export default Button