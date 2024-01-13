import styles from './ChoosePeriodsSection.module.css'
import Button from '../Button'
import InputNumber from '../InputNumber'

function ChoosePeriodsSection({data}){
    return(
        <div className={styles.periodContainer}>
            <h1>Quantos periodos de estudo?</h1>
            <InputNumber setValue='4'/>
            <Button clickFunc={data.functions.nextPage} text="Continuar"/>
        </div>
    )
}

export default ChoosePeriodsSection
