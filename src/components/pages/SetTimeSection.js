import styles from './SetTimeSection.module.css'
import InputNumber from '../InputNumber'
import Button from '../Button'


function SetTimeSection({data}){
    return(
        <>
            <h1>Personalize seu período de estudo</h1>
            <div className={styles.inputsContainer}>
                <InputNumber  text="Pomodoro" setValue='25'/>
                <InputNumber  text="Pausa" setValue='5'/>
                <InputNumber  text="Pausa Longa" setValue='15'/>                
            </div> 
            <span className={styles.noPause}>Não definir periodo de pausa</span>
            <div className={styles.continueBtn}>
                <Button clickFunc={data.functions.nextPage} text="Continuar"/> 
            </div>          
        </>
    )
}

export default SetTimeSection