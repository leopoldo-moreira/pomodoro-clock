import styles from './SetTimeSection.module.css'
import InputNumber from '../InputNumber'
import Button from '../Button'


function SetTimeSection({ data }){

    function handleInput(e){        
        const index = e.target.name
        const newValue = e.target.value
        data.functions.changePomodoro(index, newValue)
    }

    const inputName = [
        'Pomodoro',
        'Pausa',
        'Pausa Longa'
    ]    

    return(
        <>
            <h1>Personalize seu período de {data.currentActivity}</h1>
            <div className={styles.inputsContainer}>                

                {inputName.map((item, index) => (
                    <InputNumber 
                    name={index}
                    funcOnChange={handleInput} 
                    text={item} 
                    key={index} 
                    setValue={data.pomodoroTimer[index]}                        
                    />
                ))}

            </div> 
            <span className={styles.noPause}>Não definir periodo de pausa</span>
            <div className={styles.continueBtn}>
                <Button clickFunc={data.functions.nextPage} text="Continuar"/> 
            </div>          
        </>
    )
}

export default SetTimeSection