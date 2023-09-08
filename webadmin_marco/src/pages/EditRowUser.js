import React from 'react'

import './editRow.css'


const EditRowUser = ({usuario, handleCancelClick, handleSaveClick, editUsuarioData, handleEditFormChange}) => {
    return (
        <tr>
            <td>
            <input type="text" required="required" placeholder="Enter username" name="username" value={editUsuarioData.username}  disabled="true"/>
            </td>
            <td>
                <input type="text" required="required" placeholder="Enter UserType" name="usertype" onChange={handleEditFormChange} value={editUsuarioData.usertype}/>
            </td>
            <td className="acciones">
                <input type="button" value="Save" className="edit" onClick={(event) => handleSaveClick(event)}/>
                
                <input type="button" value="Cancel" onClick={(event) => handleCancelClick(event)}/>
            </td>
        </tr>
    )
}

export default EditRowUser
