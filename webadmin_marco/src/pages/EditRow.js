import React from 'react'

import './editRow.css'


const EditRow = ({cita, handleCancelClick, handleSaveClick, editCitaData, handleEditFormChange}) => {
    let hora;
    switch (parseInt(cita.turno)) {
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
    return (
        <tr>
            <td>
                <input type="text" required="required" placeholder="Enter username" name="usuario" value={editCitaData.usuario} onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter Date" name="fecha" onChange={handleEditFormChange} value={editCitaData.fecha}/>
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter Hour" name="hora" value={hora}/>
            </td>
            <td>
                <input type="number" required="required" placeholder="Enter Turn" name="turno" onChange={handleEditFormChange} value={editCitaData.turno}/>
            </td>
            <td className="acciones">
                <input type="button" value="Save" className="edit" onClick={(event) => handleSaveClick(event)}/>
                
                <input type="button" value="Cancel" onClick={(event) => handleCancelClick(event)}/>
            </td>
        </tr>
    )
}

export default EditRow
