import styles from './ChoosePeriodsSection.module.css'
import Button from '../Button'
import InputNumber from '../InputNumber'


function ChoosePeriodsSection({data}){



    function handleInput(e){        
        const index = e.target.name
        const newValue = e.target.value
        data.functions.changePomodoro(index, newValue)
    }

    function changePage(){
        if(data.editMode){
            data.functions.editMode(true)            
        }else{
            data.functions.nextPage()            
        }
    }


    return(
        <div className={styles.periodContainer}>
            <h1>Quantos periodos de estudo?</h1>
            <InputNumber funcOnChange={handleInput} setValue={data.pomodoroTimer[3]} name='3'/>
            <Button clickFunc={changePage} text="Continuar"/>
        </div>
    )
}

export default ChoosePeriodsSection
