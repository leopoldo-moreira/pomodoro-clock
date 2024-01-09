import styles from './ChoosePeriods.module.css'
import Button from '../Button'
import InputNumber from '../InputNumber'

function ChoosePeriods(){
    return(
        <div className={styles.periodContainer}>
            <h1>Quantos periodos de estudo?</h1>
            <InputNumber setValue='4'/>
            <Button text="Continuar"/>
        </div>
    )
}

export default ChoosePeriods
