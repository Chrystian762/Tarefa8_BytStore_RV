function Evento({numero}){
    function meuEvento(){
                console.log(`ATIVADO!!! ${numero}`)
    }
        return(

            <>
                <p>Clique para disparar um evento</p>
                <button onClick={meuEvento}>ATIVAR</button>
            </>

        )

}
export default Evento;