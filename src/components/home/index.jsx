import { Link } from "react-router-dom"

const Home = () => {
    return(
        <section className="row contain home-contain">
            <article className="col-12">
                <img src="https://reactnative.dev/img/tiny_logo.png" alt="brand"/>
                <h1 className='titleHome'>
                    AguasApp
                </h1>       
                <Link className="btn btn-primary d-block" to='/signin'>
                    Empecemos!
                </Link>
                <Link className="btn btn-information btn-danger mt-2 d-block" to='/signin'>
                    Comunicate!
                </Link>
            </article>
        </section>
    )
}

export default Home