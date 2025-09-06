import { useState} from "react";


function Form(){

    function cadastrarUsuario(event){
        event.preventDefault()
        console.log(name)
        console.log(password)
        console.log(`Usuário: ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName]= useState()
    const [password, setPassword]= useState()

    return(
            <>
                <h1 className="titulo2">Cadastrar Usuário</h1>

                <form onSubmit={cadastrarUsuario}>
                        <div className="divInput">
                            <label htmlFor="name">Nome: </label>
                            <input className="input" type="text" id="name" name="name" placeholder="Digite o seu nome" onChange={(event) => setName(event.target.value)}/>
                        </div>

                        <div className="divInput">
                            <label htmlFor="password">Senha: </label>
                            <input className="input" type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(event) => setPassword(event.target.value)}/>
                        </div>

                        <div >
                            <input className="btn" type="submit" value="Cadastrar" />
                        </div>
                </form>
            </>
    )
}
export default Form;