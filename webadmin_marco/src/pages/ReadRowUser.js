import { width } from 'dom-helpers';
import React  from 'react';

import './readRow.css';


export const ReadRowUser = ({usuario, handleEditClick, handleDeleteClick, which, sUser}) => {

    if (((which == 1) || (which == 2 && (usuario.usertype == "usuario" || usuario.usertype == "user")) || (which == 3 && usuario.usertype == "admin")) && sUser.toLowerCase() == usuario.username.substr(0, sUser.length).toLowerCase()){
    return (
        <tr>
            <td>{usuario.username}</td>
            <td>{usuario.usertype}</td>
            <td>
                <input type="button" value="Edit" width="100%" onClick={(event) => handleEditClick(event, usuario)} className="edit"/>
                <input type="button" value="Delete" width="100%" onClick={() => handleDeleteClick(usuario)}/>
            </td>
        </tr>
    )
}

    else{
        return(null)
    }
}

export default ReadRowUser