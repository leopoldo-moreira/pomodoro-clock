import styles from './GreetingSection.module.css'
import Button from '../Button'

function GreetingSection({data}) {
    return (
        <>
            <div className={styles.dateAndTime}>
                <div><span>{data.time}</span></div>
                <div><span>{data.city}</span></div>
                <div><span>{data.temp} °C</span></div>
            </div>
            <h1 className={styles.title}>{data.greetingMsg}</h1>
            <Button clickFunc={data.functions.nextPage} text="Começar agora"/>
        </>
    )
}

export default GreetingSection