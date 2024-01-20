
function GoodByeSection({data}){

    setTimeout(() => {
        data.functions.goodByeSection()        
    },3000)

    
    return(
        <h1>Boa Noite!</h1>
    )
}

export default GoodByeSection