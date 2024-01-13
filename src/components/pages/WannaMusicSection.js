import Button from '../Button'

function WannaMusicSection({data}){
    return(
        <>
            <h1>Deseja música para ajudar a focar?</h1>
            <div>
                <Button clickFunc={data.functions.nextPage} text="Sim, por favor."/>
                <Button clickFunc={data.functions.nextPage} text="Não, obrigado."/>
            </div>
        </>
    )
}

export default WannaMusicSection