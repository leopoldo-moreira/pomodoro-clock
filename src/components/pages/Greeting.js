import styles from './Greeting.module.css'
import Button from '../Button'

function Greeting({data}) {
    return (
        <>
            <div className={styles.dateAndTime}>
                <div><span>{data.time}</span></div>
                <div><span>{data.city}</span></div>
                <div><span>{data.temp} °C</span></div>
            </div>
            <h1>{data.greetingMsg}</h1>
            <Button text="Começar agora"/>
        </>
    )
}

export default Greeting