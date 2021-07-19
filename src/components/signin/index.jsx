import { useEffect, useState } from "react"
import axios from 'axios'

const Signin = () => {
    const 
    [username, setUsername] = useState(''),
    [business, setBusiness] = useState(''),
    [password, setPassword] = useState(''),
    [disabledBtn, setDisabledBtn] = useState(false);

    const handlerVerifyExistContentInput = () => {
        username.length > 0 
        && business.length > 0 
        && password.length > 0 
        ? setDisabledBtn(true)
        : setDisabledBtn(false)
    }

    useEffect(() => handlerVerifyExistContentInput(), [username])
    useEffect(() => handlerVerifyExistContentInput(), [business])
    useEffect(() => handlerVerifyExistContentInput(), [password])

    const handlerSubmit = async e => {
        e.preventDefault()
        const userDataForm = {
            username: `${username}`,
            password: `${password}`
        }
        /*,
        headers = {
            'Access-Control-Allow-Origin': '*'
        },
        post = await ( await axios.post('http://wemake.ddns.net:8090/apiauth/login', userDataForm, headers) )*/
        //console.log(post)
        console.log(userDataForm)
    },
    handlerChangeUsername = e => setUsername(e.target.value),
    handlerChangeBusiness = e => setBusiness(e.target.value),
    handlerChangePassword = e => setPassword(e.target.value);

    return(
        <section className="row contain signin-contain">
            <article className="col-12">
                <img src="https://reactnative.dev/img/tiny_logo.png" alt="brand"/>
                <h1 className='titleSignin'>Bienvenido, ingresá a tu cuenta.</h1>
                <form className='col-12' onSubmit={handlerSubmit}>
                    <article className="form-floating mb-2">
                        <input 
                            type="text" 
                            className="form-control is-invalid" 
                            placeholder='Usuario'
                            onChange={ handlerChangeUsername }/>
                        <label for="floatingInputInvalid">Usuario</label>
                    </article>
                    <article className="form-floating mb-2">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder='Empresa'
                            onChange={ handlerChangeBusiness }/>
                        <label for="floatingInputInvalid">Empresa</label>
                    </article>
                    <article className="form-floating">
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder='Contraseña'
                            onChange={ handlerChangePassword }/>
                        <label for="floatingInputInvalid">Contraseña</label>
                    </article>
                    <input type="submit" disabled={!disabledBtn} className='btn btn-primary d-block col-12 mt-4' value='Ingresar'/>    
                </form>
            </article>
        </section>
    )
}

export default Signin