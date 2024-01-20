// TODO os componentes da pasta page precisa seguir um padrao de nome, terminando com section

import Button from '../Button'
import styles from './ChooseActivitySection.module.css'


function ChooseActivitySection({ data }) {

    function setActivity(e){
        const newActivity = e.target.innerText.toLowerCase()
        data.functions.changeData('currentActivity', newActivity)
        data.functions.nextPage()
    }

    

    return (
        <>
            <h1>O que vou fazer hoje?</h1>
            <div className={styles.activityButtons}>
                <Button clickFunc={setActivity} text='Jogar'  />  
                <Button clickFunc={setActivity} text='Trabalhar'  />                  
                <Button clickFunc={setActivity} text='Estudar'  />    
            </div>
            
        </>

    )
}

export default ChooseActivitySection