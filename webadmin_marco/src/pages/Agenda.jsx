
import React, { useState, useEffect, Fragment } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as Boot from 'react-bootstrap';

import data from '../assets/JsonData/mock_data.json'

import api_citas from "./api_citas";
import  ReadRow  from "./ReadRow";
import EditRow from "./EditRow";

import "./costumers.css"
import { render } from "@testing-library/react";
// import { useState, useEffect } from "react";
// import { response } from "express";






const Costumers = () => {
    // const [citas, setCitas] = useState(data);
    // const [data, setData] = useState()
    // const [q, setQ] = useState("")

    // const [sita, setSita] = useState(null); //paraa agarrar las citas del api

    // useEffect(() =>{
    //     fetch("http://100.24.228.237:10023/citas")
    //     .then(response => response.json())
    //     .then(json => setData(json ))
    // }, [])
    
    const [bFecha, setBFecha] = useState(new Date());

    const Example = () => {
        return (
            <DatePicker selected={bFecha} onChange={(date) => setBFecha(date)}  />
        );
    };
    // console.log(bFecha);
    


    // const renderCita = (cita, index) => {
    //     return(
    //         <tr key={index}>
    //             <td>{cita.usuario}</td>
    //             <td>{cita.fecha}</td>
    //             <td>{cita.hora}</td>
    //             <td>{cita.turno}</td>
    //             <td>{cita.n_personas}</td>
    //             <td>PLACEHOLDER</td>
    //         </tr>
    //     )
    // }
    
    
    const [citas, setCitas] =useState(data);
    const [editCita, setEditCita]= useState(null);

    const [addCitaData, setAddCitaData] =useState({
        usuario : "",
        fecha: "",
        hora : "",
        turno: "",
        n_personas: ""
    });

    const [editCitaData, setEditCitaData] = useState({
        usuario: "",
        fecha: "",
        hora: "",
        turno: 0,
        n_personas: ""
    });
    
    
    useEffect(() => {
        (async function getCitas() {
            try {
                let citasj = await fetch('http://100.24.228.237:10023/citas', {
                    method: 'get',
                });
                let citas = await citasj.json();
                setCitas(citas.citas)
                
                // return citas.citas[0];
                
            }
            catch (e) {
                console.log(e);
            }
        })();
    },[]);
    // console.log(citas);
    // var date = new Date(parseInt(citas[0].fecha.substr(0)));
    // if (parseInt(citas[0].fecha.substr(8)) + "/" + parseInt(citas[0].fecha.substr(5)) + "/" + parseInt(citas[0].fecha.substr(0)) == bFecha.getDate() + "/" + parseInt(bFecha.getMonth() + 1) + "/" + bFecha.getFullYear()){
    //     console.log("yes");
        
    // }
    // console.log(parseInt(citas[0].fecha.substr(8)) + "/" + parseInt(citas[0].fecha.substr(5)) + "/" + parseInt(citas[0].fecha.substr(0)));
    // console.log(bFecha.getDate() + "/" + parseInt(bFecha.getMonth() + 1) + "/" + bFecha.getFullYear());
    

    // let citas = null;
    // fetch('http://100.24.228.237:10023/citas').then(result => {
    //     citas = result.json()
    //     console.log(citas);
    // }).catch(e =>{
    //     console.log(e)
    // })
    // console.log(citas[0].fecha);

    const handleEditFormChange = (event) => {
        event.preventDefault();
        

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...editCitaData };
        newFormData[fieldName] = fieldValue;

        setEditCitaData(newFormData);
    }

    const handleEditClick = (event, cita) => {
        event.preventDefault();
        setEditCita(cita._id);

        const formValues  = {
            usuario: cita.usuario,
            fecha: cita.fecha,
            hora: cita.hora,
            turno: cita.turno,
            n_personas: cita.n_personas
        }
        setEditCitaData(formValues);
    }
    const handleCancelClick = (event) => {
        event.preventDefault();
        setEditCita(null);
    }
    const handleSaveClick = (event) => {
        event.preventDefault();
        const edited = {
            _id: editCita,
            usuario: editCitaData.usuario,
            fecha: editCitaData.fecha,
            hora: editCitaData.hora,
            turno: editCitaData.turno,
            n_personas: editCitaData.n_personas
        }
        const newCitas =[ ...citas ];

        const index = citas.findIndex((cita) => cita._id === editCita);
        newCitas[index] = edited;
        // console.log(index);
        setCitas(newCitas);
        setEditCita(null);
    }

    const handleDeleteClick = (citaid) => {
        const newCitas = [...citas];
        const index = citas.findIndex((cita) => cita._id === citaid._id);
        // console.log(index);2
        newCitas.splice(index,1);
        setCitas(newCitas);
    }
    // const show = () =>{
    //     for(cita in citas){

    //     }
    // }
    const deleteCita =
        (cita) => {
            try {
                let res = fetch('http://100.24.228.237:10023/users/delete/' + cita._id, {
                    method: 'delete',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                });
                // let result = res.json();



            }
            catch (e) {
                console.log(e);
            }
            alert("Cita Deleted");
        }

    return (
        // <form>
        <div>
        <div className="date-picker">
            <Example/>
        </div>
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Fecha</th>
                        <th>Hora de Visita</th>
                        <th>Turno</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {citas.map((cita) =>
                    <Fragment>
                        {editCita === cita._id ? 
                            <EditRow 
                                cita={cita} 
                                handleCancelClick={handleCancelClick} 
                                handleSaveClick={handleSaveClick}
                                editCitaData ={ editCitaData}
                                handleEditFormChange={handleEditFormChange}
                            /> : 
                            <ReadRow 
                                cita={cita} 
                                handleEditClick={handleEditClick} 
                                handleDeleteClick={handleDeleteClick}
                                bFecha={bFecha}
                            />}
                    </Fragment>
                    )}
                    
                </tbody>
            </table>
        </div>
        </div>
        // </form>

    )
}

export default Costumers
