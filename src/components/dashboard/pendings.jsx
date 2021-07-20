import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Pending = ({ userSelected, setUserSelected }) => {
    const 
    [initialLetterNameList, setInitialLetterNameList] = useState([]),
    [customersPending, setCustomersPending] = useState(JSON.parse("[{\"idMovimientoCliente\":0,\"reparto\":{\"idReparto\":0,\"repartidor\":{\"idRepartidor\":0,\"codigoInterno\":\"\",\"nombre\":\"\",\"apellido\":\"\"},\"vehiculo\":{\"idVehiculo\":0,\"marca\":\"\",\"modelo\":\"\",\"patente\":\"\"}},\"tiempo\":{\"idTiempo\":0,\"fecha\":\"2021-05-17 17:21:53\",\"dia\":0,\"diaAbr\":\"\",\"diaName\":\"\",\"mes\":0,\"mesAbr\":\"\",\"mesName\":\"\",\"ano\":0,\"semestre\":0,\"trimestre\":0,\"cuatrimestre\":0,\"creacion\":\"17:21:53.315114\",\"ultimaModificacion\":\"17:21:53.315114\"},\"cliente\":{\"idCliente\":0,\"fechaIngreso\":\"2021-05-17 17:21:53\",\"fechaEgreso\":\"2021-05-17 17:21:53\",\"nombre\":\"juan\",\"apellido\":\"\",\"tipoDocumento\":\"\",\"nroDocumento\":0,\"cuil\":0,\"sexo\":\"\",\"fechaNacimiento\":\"2021-05-17 17:21:53\",\"domicilio\":{\"serialVersionUID\":0,\"idDomicilio\":0,\"calle\":\"Inclan\",\"numero\":0,\"ciudad\":\"\",\"provincia\":\"\",\"codigoPostal\":0,\"pais\":\"\"},\"contacto\":{\"serialVersionUID\":0,\"idContacto\":0,\"contactoHabitual\":\"\",\"telefono\":\"\",\"fax\":\"\",\"movil\":\"\",\"correo1\":\"\",\"correo2\":\"\"}},\"movimientosVenta\":{\"idMovimientoVenta\":0,\"producto\":{\"idProducto\":0,\"codigoInterno\":\"\",\"descripcion\":\"\",\"precio\":0,\"precioEnvase\":0,\"isDescartable\":0,\"estado\":{\"idEstado\":0,\"descripcion\":\"\"}},\"posesion\":0,\"retiro\":0,\"cantidad\":0,\"precioUnitario\":0,\"precioTotal\":0,\"isRetornable\":0,\"isCambio\":0,\"isPromocion\":0,\"motivo\":\"\"},\"abonoCliente\":{\"serialVersionUID\":0,\"idAbonoCliente\":0,\"comentario\":\"\",\"deudaAnterior\":0,\"importeVenta\":0,\"total\":0,\"deudaActual\":0,\"pago\":0,\"isTotal\":false,\"isParcial\":false,\"isFiado\":false,\"tiempo\":{\"idTiempo\":0,\"fecha\":\"2021-05-17 17:21:53\",\"dia\":0,\"diaAbr\":\"\",\"diaName\":\"\",\"mes\":0,\"mesAbr\":\"\",\"mesName\":\"\",\"ano\":0,\"semestre\":0,\"trimestre\":0,\"cuatrimestre\":0,\"creacion\":\"17:21:53.315114\",\"ultimaModificacion\":\"17:21:53.315114\"}},\"isFinalizado\":false,\"estado\":{\"idEstado\":0,\"descripcion\":\"\"},\"estadoBox\":{\"idEstado\":0,\"descripcion\":\"\"},\"historialCliente\":{\"idHistorialCliente\":0,\"tiempo\":{\"idTiempo\":0,\"fecha\":\"2021-05-17 17:21:53\",\"dia\":0,\"diaAbr\":\"\",\"diaName\":\"\",\"mes\":0,\"mesAbr\":\"\",\"mesName\":\"\",\"ano\":0,\"semestre\":0,\"trimestre\":0,\"cuatrimestre\":0,\"creacion\":\"17:21:53.315114\",\"ultimaModificacion\":\"17:21:53.315114\"},\"deuda\":0,\"historialProductos\":[{\"idHistorialProducto\":0,\"producto\":{\"idProducto\":0,\"codigoInterno\":\"\",\"descripcion\":\"\",\"precio\":0,\"precioEnvase\":0,\"isDescartable\":0},\"posesion\":0},{\"idHistorialProducto\":0,\"producto\":{\"idProducto\":0,\"codigoInterno\":\"\",\"descripcion\":\"\",\"precio\":0,\"precioEnvase\":0,\"isDescartable\":0},\"posesion\":0}],\"estado\":{\"idEstado\":0,\"descripcion\":\"\"}},\"comentario\":\"\"},{\"idMovimientoCliente\":0,\"reparto\":{\"idReparto\":0,\"repartidor\":{\"idRepartidor\":0,\"codigoInterno\":\"\",\"nombre\":\"\",\"apellido\":\"\"},\"vehiculo\":{\"idVehiculo\":0,\"marca\":\"\",\"modelo\":\"\",\"patente\":\"\"}},\"tiempo\":{\"idTiempo\":0,\"fecha\":\"2021-05-17 17:21:53\",\"dia\":0,\"diaAbr\":\"\",\"diaName\":\"\",\"mes\":0,\"mesAbr\":\"\",\"mesName\":\"\",\"ano\":0,\"semestre\":0,\"trimestre\":0,\"cuatrimestre\":0,\"creacion\":\"17:21:53.315114\",\"ultimaModificacion\":\"17:21:53.315114\"},\"cliente\":{\"idCliente\":0,\"fechaIngreso\":\"2021-05-17 17:21:53\",\"fechaEgreso\":\"2021-05-17 17:21:53\",\"nombre\":\"pedro mujica\",\"apellido\":\"\",\"tipoDocumento\":\"\",\"nroDocumento\":0,\"cuil\":0,\"sexo\":\"\",\"fechaNacimiento\":\"2021-05-17 17:21:53\",\"domicilio\":{\"serialVersionUID\":0,\"idDomicilio\":0,\"calle\":\"Av. Garay\",\"numero\":0,\"piso\":8,\"ciudad\":\"\",\"provincia\":\"\",\"codigoPostal\":0,\"pais\":\"\"},\"contacto\":{\"serialVersionUID\":0,\"idContacto\":0,\"contactoHabitual\":\"\",\"telefono\":\"\",\"fax\":\"\",\"movil\":\"\",\"correo1\":\"\",\"correo2\":\"\"}},\"movimientosVenta\":{\"idMovimientoVenta\":0,\"producto\":{\"idProducto\":0,\"codigoInterno\":\"\",\"descripcion\":\"\",\"precio\":0,\"precioEnvase\":0,\"isDescartable\":0,\"estado\":{\"idEstado\":0,\"descripcion\":\"\"}},\"posesion\":0,\"retiro\":0,\"cantidad\":0,\"precioUnitario\":0,\"precioTotal\":0,\"isRetornable\":0,\"isCambio\":0,\"isPromocion\":0,\"motivo\":\"\"},\"abonoCliente\":{\"serialVersionUID\":0,\"idAbonoCliente\":0,\"comentario\":\"\",\"deudaAnterior\":0,\"importeVenta\":0,\"total\":0,\"deudaActual\":0,\"pago\":0,\"isTotal\":false,\"isParcial\":false,\"isFiado\":false,\"tiempo\":{\"idTiempo\":0,\"fecha\":\"2021-05-17 17:21:53\",\"dia\":0,\"diaAbr\":\"\",\"diaName\":\"\",\"mes\":0,\"mesAbr\":\"\",\"mesName\":\"\",\"ano\":0,\"semestre\":0,\"trimestre\":0,\"cuatrimestre\":0,\"creacion\":\"17:21:53.315114\",\"ultimaModificacion\":\"17:21:53.315114\"}},\"isFinalizado\":false,\"estado\":{\"idEstado\":0,\"descripcion\":\"\"},\"estadoBox\":{\"idEstado\":0,\"descripcion\":\"\"},\"historialCliente\":{\"idHistorialCliente\":0,\"tiempo\":{\"idTiempo\":0,\"fecha\":\"2021-05-17 17:21:53\",\"dia\":0,\"diaAbr\":\"\",\"diaName\":\"\",\"mes\":0,\"mesAbr\":\"\",\"mesName\":\"\",\"ano\":0,\"semestre\":0,\"trimestre\":0,\"cuatrimestre\":0,\"creacion\":\"17:21:53.315114\",\"ultimaModificacion\":\"17:21:53.315114\"},\"deuda\":0,\"historialProductos\":[{\"idHistorialProducto\":0,\"producto\":{\"idProducto\":0,\"codigoInterno\":\"\",\"descripcion\":\"\",\"precio\":0,\"precioEnvase\":0,\"isDescartable\":0},\"posesion\":0},{\"idHistorialProducto\":0,\"producto\":{\"idProducto\":0,\"codigoInterno\":\"\",\"descripcion\":\"\",\"precio\":0,\"precioEnvase\":0,\"isDescartable\":0},\"posesion\":0}],\"estado\":{\"idEstado\":0,\"descripcion\":\"\"}},\"comentario\":\"\"},{\"idMovimientoCliente\":0,\"reparto\":{\"idReparto\":0,\"repartidor\":{\"idRepartidor\":0,\"codigoInterno\":\"\",\"nombre\":\"\",\"apellido\":\"\"},\"vehiculo\":{\"idVehiculo\":0,\"marca\":\"\",\"modelo\":\"\",\"patente\":\"\"}},\"tiempo\":{\"idTiempo\":0,\"fecha\":\"2021-05-17 17:21:53\",\"dia\":0,\"diaAbr\":\"\",\"diaName\":\"\",\"mes\":0,\"mesAbr\":\"\",\"mesName\":\"\",\"ano\":0,\"semestre\":0,\"trimestre\":0,\"cuatrimestre\":0,\"creacion\":\"17:21:53.315114\",\"ultimaModificacion\":\"17:21:53.315114\"},\"cliente\":{\"idCliente\":0,\"fechaIngreso\":\"2021-05-17 17:21:53\",\"fechaEgreso\":\"2021-05-17 17:21:53\",\"nombre\":\"sebastian bas\",\"apellido\":\"\",\"tipoDocumento\":\"\",\"nroDocumento\":0,\"cuil\":0,\"sexo\":\"\",\"fechaNacimiento\":\"2021-05-17 17:21:53\",\"domicilio\":{\"serialVersionUID\":0,\"idDomicilio\":0,\"calle\":\"Av. La Plata\",\"numero\":0,\"piso\":4,\"ciudad\":\"\",\"provincia\":\"\",\"codigoPostal\":0,\"pais\":\"\"},\"contacto\":{\"serialVersionUID\":0,\"idContacto\":0,\"contactoHabitual\":\"\",\"telefono\":\"\",\"fax\":\"\",\"movil\":\"\",\"correo1\":\"\",\"correo2\":\"\"}},\"movimientosVenta\":{\"idMovimientoVenta\":0,\"producto\":{\"idProducto\":0,\"codigoInterno\":\"\",\"descripcion\":\"\",\"precio\":0,\"precioEnvase\":0,\"isDescartable\":0,\"estado\":{\"idEstado\":0,\"descripcion\":\"\"}},\"posesion\":0,\"retiro\":0,\"cantidad\":0,\"precioUnitario\":0,\"precioTotal\":0,\"isRetornable\":0,\"isCambio\":0,\"isPromocion\":0,\"motivo\":\"\"},\"abonoCliente\":{\"serialVersionUID\":0,\"idAbonoCliente\":0,\"comentario\":\"\",\"deudaAnterior\":0,\"importeVenta\":0,\"total\":0,\"deudaActual\":0,\"pago\":0,\"isTotal\":false,\"isParcial\":false,\"isFiado\":false,\"tiempo\":{\"idTiempo\":0,\"fecha\":\"2021-05-17 17:21:53\",\"dia\":0,\"diaAbr\":\"\",\"diaName\":\"\",\"mes\":0,\"mesAbr\":\"\",\"mesName\":\"\",\"ano\":0,\"semestre\":0,\"trimestre\":0,\"cuatrimestre\":0,\"creacion\":\"17:21:53.315114\",\"ultimaModificacion\":\"17:21:53.315114\"}},\"isFinalizado\":false,\"estado\":{\"idEstado\":0,\"descripcion\":\"\"},\"estadoBox\":{\"idEstado\":0,\"descripcion\":\"\"},\"historialCliente\":{\"idHistorialCliente\":0,\"tiempo\":{\"idTiempo\":0,\"fecha\":\"2021-05-17 17:21:53\",\"dia\":0,\"diaAbr\":\"\",\"diaName\":\"\",\"mes\":0,\"mesAbr\":\"\",\"mesName\":\"\",\"ano\":0,\"semestre\":0,\"trimestre\":0,\"cuatrimestre\":0,\"creacion\":\"17:21:53.315114\",\"ultimaModificacion\":\"17:21:53.315114\"},\"deuda\":0,\"historialProductos\":[{\"idHistorialProducto\":0,\"producto\":{\"idProducto\":0,\"codigoInterno\":\"\",\"descripcion\":\"\",\"precio\":0,\"precioEnvase\":0,\"isDescartable\":0},\"posesion\":0},{\"idHistorialProducto\":0,\"producto\":{\"idProducto\":0,\"codigoInterno\":\"\",\"descripcion\":\"\",\"precio\":0,\"precioEnvase\":0,\"isDescartable\":0},\"posesion\":0}],\"estado\":{\"idEstado\":0,\"descripcion\":\"\"}},\"comentario\":\"\"},{\"idMovimientoCliente\":0,\"reparto\":{\"idReparto\":0,\"repartidor\":{\"idRepartidor\":0,\"codigoInterno\":\"\",\"nombre\":\"\",\"apellido\":\"\"},\"vehiculo\":{\"idVehiculo\":0,\"marca\":\"\",\"modelo\":\"\",\"patente\":\"\"}},\"tiempo\":{\"idTiempo\":0,\"fecha\":\"2021-05-17 17:21:53\",\"dia\":0,\"diaAbr\":\"\",\"diaName\":\"\",\"mes\":0,\"mesAbr\":\"\",\"mesName\":\"\",\"ano\":0,\"semestre\":0,\"trimestre\":0,\"cuatrimestre\":0,\"creacion\":\"17:21:53.315114\",\"ultimaModificacion\":\"17:21:53.315114\"},\"cliente\":{\"idCliente\":0,\"fechaIngreso\":\"2021-05-17 17:21:53\",\"fechaEgreso\":\"2021-05-17 17:21:53\",\"nombre\":\"emilia bonini\",\"apellido\":\"\",\"tipoDocumento\":\"\",\"nroDocumento\":0,\"cuil\":0,\"sexo\":\"\",\"fechaNacimiento\":\"2021-05-17 17:21:53\",\"domicilio\":{\"serialVersionUID\":0,\"idDomicilio\":0,\"calle\":\"Dean funes\",\"numero\":0,\"piso\":2,\"ciudad\":\"\",\"provincia\":\"\",\"codigoPostal\":0,\"pais\":\"\"},\"contacto\":{\"serialVersionUID\":0,\"idContacto\":0,\"contactoHabitual\":\"\",\"telefono\":\"\",\"fax\":\"\",\"movil\":\"\",\"correo1\":\"\",\"correo2\":\"\"}},\"movimientosVenta\":{\"idMovimientoVenta\":0,\"producto\":{\"idProducto\":0,\"codigoInterno\":\"\",\"descripcion\":\"\",\"precio\":0,\"precioEnvase\":0,\"isDescartable\":0,\"estado\":{\"idEstado\":0,\"descripcion\":\"\"}},\"posesion\":0,\"retiro\":0,\"cantidad\":0,\"precioUnitario\":0,\"precioTotal\":0,\"isRetornable\":0,\"isCambio\":0,\"isPromocion\":0,\"motivo\":\"\"},\"abonoCliente\":{\"serialVersionUID\":0,\"idAbonoCliente\":0,\"comentario\":\"\",\"deudaAnterior\":0,\"importeVenta\":0,\"total\":0,\"deudaActual\":0,\"pago\":0,\"isTotal\":false,\"isParcial\":false,\"isFiado\":false,\"tiempo\":{\"idTiempo\":0,\"fecha\":\"2021-05-17 17:21:53\",\"dia\":0,\"diaAbr\":\"\",\"diaName\":\"\",\"mes\":0,\"mesAbr\":\"\",\"mesName\":\"\",\"ano\":0,\"semestre\":0,\"trimestre\":0,\"cuatrimestre\":0,\"creacion\":\"17:21:53.315114\",\"ultimaModificacion\":\"17:21:53.315114\"}},\"isFinalizado\":false,\"estado\":{\"idEstado\":0,\"descripcion\":\"\"},\"estadoBox\":{\"idEstado\":0,\"descripcion\":\"\"},\"historialCliente\":{\"idHistorialCliente\":0,\"tiempo\":{\"idTiempo\":0,\"fecha\":\"2021-05-17 17:21:53\",\"dia\":0,\"diaAbr\":\"\",\"diaName\":\"\",\"mes\":0,\"mesAbr\":\"\",\"mesName\":\"\",\"ano\":0,\"semestre\":0,\"trimestre\":0,\"cuatrimestre\":0,\"creacion\":\"17:21:53.315114\",\"ultimaModificacion\":\"17:21:53.315114\"},\"deuda\":0,\"historialProductos\":[{\"idHistorialProducto\":0,\"producto\":{\"idProducto\":0,\"codigoInterno\":\"\",\"descripcion\":\"\",\"precio\":0,\"precioEnvase\":0,\"isDescartable\":0},\"posesion\":0},{\"idHistorialProducto\":0,\"producto\":{\"idProducto\":0,\"codigoInterno\":\"\",\"descripcion\":\"\",\"precio\":0,\"precioEnvase\":0,\"isDescartable\":0},\"posesion\":0}],\"estado\":{\"idEstado\":0,\"descripcion\":\"\"}},\"comentario\":\"\"}]"));

    const [checkedItem, setCheckedItem] = useState(0)

    useEffect(() => setUserSelected(customersPending[0]), [])

    const handlerClickSelectUser = (thisUser, index) => {
        setUserSelected(thisUser)
        setCheckedItem(index)
    }

    return(
        <>
        {
            customersPending?.length > 0 ? (
                <>
                <article className="contain-pending-title col-12">
                    <p>Pendientes</p>
                </article>
                <article className="col-12 containCardsScroller">
                    {
                        customersPending.map((element, i) => (
                            <article 
                                key={i} 
                                className={`card cardPendingCustomers ${checkedItem === i && 'd-none'}`} 
                                onClick={() => handlerClickSelectUser(element, i)}>
                                <article className="card-body">
                                    <article className='icoUserNameCardPending bg-secondary'>
                                        <p>
                                            {
                                                element.cliente.nombre.split(' ')[0].split('')[0]
                                            }
                                            {
                                                element.cliente.nombre.split(' ').length > 1 
                                                && element.cliente.nombre.split(' ')[1].split('')[0]
                                            }
                                        </p>
                                    </article>
                                    <article className='contain-userDataCard col-8'>
                                        <p>
                                            <span className="d-block cardItemName">
                                                {       
                                                    element.cliente.nombre
                                                }
                                            </span>
                                            {
                                                element.cliente.domicilio.calle || 'sin datos'
                                            }
                                            <span className='badge bg-primary d-block col-4'>
                                                {
                                                    element.cliente.domicilio.piso 
                                                    ? `piso ${element.cliente.domicilio.piso}` 
                                                    : 'sin datos'
                                                }
                                            </span>
                                        </p>
                                    </article>
                                </article>
                            </article>
                        ))
                    }    
                </article>
                </>
            )
            : <article className="col-12 textNoCustomers"><p>Aquí aparecerán tus pedidos.</p></article>
        }
        </>
    )
}

export default Pending