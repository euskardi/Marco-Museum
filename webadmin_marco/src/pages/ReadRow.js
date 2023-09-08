import { width } from 'dom-helpers';
import React  from 'react';

import './readRow.css';


export const ReadRow = ({cita, handleEditClick, handleDeleteClick, bFecha}) => {
    let hora;
    switch(parseInt(cita.turno)){
        case 1: hora = "10:00 AM"; break;
        case 2: hora = "10:30 AM"; break;
        case 3: hora = "11:00 AM"; break;
        case 4: hora = "11:30 AM"; break;
        case 5: hora = "12:00 PM"; break;
        case 6: hora = "12:30 PM"; break;
        case 7: hora = "1:00 PM"; break;
        case 8: hora = "1:30 PM"; break;
        case 9: hora = "2:00 PM"; break;
        case 10: hora = "2:30 PM"; break;
        case 11: hora = "3:00 PM"; break;
        case 12: hora = "3:30 PM"; break;
        case 13: hora = "4:00 PM"; break;
        case 14: hora = "4:30 PM"; break;
        case 15: hora = "5:00 PM"; break;
        case 16: hora = "5:30 PM"; break;
        default: hora = "NaN"
    }
    if (parseInt(cita.fecha.substr(8)) + "/" + parseInt(cita.fecha.substr(5)) + "/" + parseInt(cita.fecha.substr(0)) == bFecha.getDate() + "/" + parseInt(bFecha.getMonth() + 1) + "/" + bFecha.getFullYear()){
    return (
        <tr>
            <td>{cita.usuario}</td>
            <td>{parseInt(cita.fecha.substr(5)) + "/" +parseInt(cita.fecha.substr(8))+"/"+parseInt(cita.fecha.substr(0))}</td>
            <td>{hora}</td>
            <td>{cita.turno}</td>
            <td>
                <input type="button" value="Edit" width="100%" onClick={(event) => handleEditClick(event, cita)} className="edit"/>
                <input type="button" value="Delete" width="100%" onClick={() => handleDeleteClick(cita)}/>
            </td>
        </tr>
    )}
    else{
        return(null)
    }
}

export default ReadRow