import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//importamos el metodo borrarCitaAction de la accion citasActions
import { borrarCitaAction } from '../actions/citasActions';

const ListadoCitas = () => {

    //obtener las citas del state
    const cita = useSelector(( state ) => state.cita );

    //mensaje condicional
    const mensaje = Object.keys( cita.cita ).length === 0 ? 'No hay Citas': 'Administra las citas aqui';

    //usamos dispatch para mandar llamar la accion citasActions
    const dispatch = useDispatch();



    return(
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">{ mensaje }</h2>

                <div className="lista-citas">
                    { cita.cita.map( cita => (
                        <div key={cita.id} className="media mt-3">
                            <div className="media-body">
                                <h3 className="mt-0">{ cita.mascota }</h3>
                                <p className="card-text"><span>Nombre Dueño:</span> { cita.propietario }</p>
                                <p className="card-text"><span>Fecha:</span> { cita.fecha }</p>
                                <p className="card-text"><span>Hora:</span> { cita.hora }  </p>
                                <p className="card-text"><span>Sintomas:</span><br />{ cita.sintomas }</p>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => dispatch(borrarCitaAction(cita.id))}
                                    >Borrar &times;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default ListadoCitas;