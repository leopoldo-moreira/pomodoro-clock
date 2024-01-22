import Button from "../Button"

function WorkDoneSection({data}){

    const goToChooseActivity = () => {
        data.functions.changeData('page',2)
    }

    return (
        <div>
            <h1>Parabéns! Você conseguiu.</h1>
            <h2>O que você gostaria de fazer agora?</h2>
            <Button text="Finalizar" clickFunc={data.functions.nextPage} />
            <Button text="Continuar" clickFunc={goToChooseActivity} />
        </div>
    )
}

export default WorkDoneSection