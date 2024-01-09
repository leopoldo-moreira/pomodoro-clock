import styles from './TimeSection.module.css'
import InputNumber from '../InputNumber'
import Button from '../Button'


function TimeSection(){
    return(
        <>
            <h1>Personalize seu período de estudo</h1>
            <div className={styles.inputsContainer}>
                <InputNumber text="Pomodoro" setValue='25'/>
                <InputNumber text="Pausa" setValue='5'/>
                <InputNumber text="Pausa Longa" setValue='15'/>                
            </div> 
            <span className={styles.noPause}>Não definir periodo de pausa</span>
            <div className={styles.continueBtn}>
                <Button text="Continuar"/> 
            </div>          
        </>
    )
}

export default TimeSection