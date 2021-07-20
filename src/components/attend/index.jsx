import { useEffect } from "react"

const Attend = ({ userAttended, setUserAttend }) => {

    useEffect(() => console.log(userAttended))

    return (
        <section className="row contain contain-attend">
            <article className="col-12">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </article>
            <input type='button' value='Abonar' className="btn btn-primary col-5 m-auto mt-4"/>
            <input type="button" value="Cancelar" className="btn btn-danger col-5 m-auto mt-4"/>
        </section>
    )
}

export default Attend