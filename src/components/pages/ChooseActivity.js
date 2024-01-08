import Button from '../Button'
import styles from './ChooseActivity.module.css'


function ChooseActivity({ data }) {
    return (
        <>
            <h1>O que vou fazer hoje?</h1>

            <div className={styles.activityButtons}>
                <Button text='Jogar'  />  
                <Button text='Trabalhar'  />                  
                <Button text='Estudar'  />    
            </div>
            
        </>

    )
}

export default ChooseActivity