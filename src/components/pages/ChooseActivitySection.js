// TODO os componentes da pasta page precisa seguir um padrao de nome, terminando com section

import Button from '../Button'
import styles from './ChooseActivitySection.module.css'


function ChooseActivitySection({ data }) {
    return (
        <>
            <h1>O que vou fazer hoje?</h1>

            <div className={styles.activityButtons}>
                <Button clickFunc={data.functions.nextPage} text='Jogar'  />  
                <Button clickFunc={data.functions.nextPage} text='Trabalhar'  />                  
                <Button clickFunc={data.functions.nextPage} text='Estudar'  />    
            </div>
            
        </>

    )
}

export default ChooseActivitySection