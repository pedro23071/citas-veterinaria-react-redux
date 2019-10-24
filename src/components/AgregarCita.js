import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'uuid/v4';

//importamos la accion
import { agregarCitaAction } from '../actions/citasActions';
import { validarFormurarioAction } from '../actions/validarActions';

const AgregarCita = () => {

    //state del componente 
    const [mascota, guardarMascota] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [sintomas, guardarSintomas] = useState('');

    //dispatch para ejecutar nuestras acciones
    const dispatch = useDispatch();
    //le pasamos al dispatch la accion agregarCitaAction (2 y 3)..........
    const agregarNuevaCita = (cita) => dispatch( agregarCitaAction(cita) );

    //le pasamos al dispatch la ccion de validar formulario (2 y 3)...........
    const validarFormulario = (estado) => dispatch( validarFormurarioAction(estado) );

    //acceder al state con useSelector() para mandar un mensaje si existe un error
    const error = useSelector( (state) => state.error );

    // cuando el formulario es enviado capturamos los 
    // datos utilizando agregarNuevaCita (1)...............
    const submitNuevaCita = e => {
        e.preventDefault();

        //validar el formulario
        if ( mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || sintomas.trim() === ''){
            validarFormulario(true);
            return;
        }

        validarFormulario(false);


        //crear la nueva cita
        agregarNuevaCita({
            id: uuid(),
            mascota: mascota,
            propietario: propietario,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas
        })


        //reiniciar el formulario
        guardarMascota('');
        guardarPropietario('');
        guardarFecha('');
        guardarHora('');
        guardarSintomas('');
        

    }
    return(
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Agrega las citas</h2>
                <form onSubmit={submitNuevaCita}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nombre Mascota"
                                value={mascota}
                                onChange={ e => guardarMascota(e.target.value) } 
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control"  
                                placeholder="Nombre Dueño de la Mascota"
                                value={propietario}
                                onChange={e => guardarPropietario(e.target.value) } 
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input 
                                type="date" 
                                className="form-control"
                                value={fecha}
                                onChange={e => guardarFecha(e.target.value) }
                            />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time" 
                                className="form-control"
                                value={hora}
                                onChange={e => guardarHora(e.target.value) } 
                            />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea 
                                className="form-control"
                                value={sintomas}
                                onChange={e => guardarSintomas(e.target.value) }
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-5">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>
               {error.error ? <div className="alert alert-danger text-center p2">
                   Todos los campos son obligatorios
               </div>:null}
            </div>
    </div>
    );
}

export default AgregarCita;