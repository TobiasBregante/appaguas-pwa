import { useEffect, useState } from "react"
import Pending from "./pendings"

const Dashboard = ({ userAttended, setUserAttended }) => {
    const [userSelected, setUserSelected] = useState({})

    //useEffect(() => console.log(userAttended), [userAttended])
    useEffect(() => console.log(userAttended), [userAttended])

    const handlerUserAttend = () => {
        setUserAttended(userSelected && userSelected)
    }

    return(
        <section className="row contain contain-dashboard">
            <article className="card col-11">
                <input type="button" className='icoProfileCardClient bg-secondary text-light' value="J"/>
                <p className="card-title">{userSelected?.cliente?.nombre}</p>
                <small className='card-street'>{userSelected?.cliente?.domicilio?.calle}</small>
                <article className="btnListActions">
                    <ul>
                        <li>
                            <button className="btn-wait btn-action">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="currentColor" 
                                    className="bi bi-stopwatch" 
                                    viewBox="0 0 16 16">
                                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
                                    <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className="btn-wait btn-action">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" 
                                    className="bi bi-x" 
                                    viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className="btn-wait btn-action" onClick={handlerUserAttend}>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="currentColor" 
                                    className="bi bi-arrow-right" 
                                    viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </article>
            </article>
            <Pending 
                userSelected={userSelected} 
                setUserSelected={setUserSelected}
            />
        </section>
    )
}
export default Dashboard