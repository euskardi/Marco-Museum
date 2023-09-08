


import React, { useState, useEffect, Fragment } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as Boot from 'react-bootstrap';

import data from '../assets/JsonData/mock_data.json'

import api_citas from "./api_citas";
import ReadRowUser from "./ReadRowUser";
import EditRowUser from "./EditRowUser";
// import EditRow from "./EditRow";

import "./usuarios.css"
import { render } from "@testing-library/react";



// function AddUsuario(data){
//     const [addUsuarioData, setAddUsuarioData] = useState(data);
//     useEffect(() => {
//         (async function addUser() {
//             try {
//                 let res = await fetch('http://100.24.228.237:10023/users/addUser', {
//                     method: 'post',
//                     headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json',
//                         'Access-Control-Allow-Origin': '*'
//                     },
//                     body: JSON.stringify({
//                         username: addUsuarioData.username,
//                         password: addUsuarioData.password,
//                         usertype: addUsuarioData.usertype
//                     })
//                 });
//                 let result = await res.json();
//                 if (result.message == "User Added") {
//                     alert("User Added")
//                 }
//                 else {
//                     alert("Problem with adding User")
//                 }
//             }
//             catch (e) {
//                 console.log(e);
//             }
//         })();
//     }, []);
// }


const Usuarios = () => {

    const [usuarios, setUsuarios] = useState(data);
    const [editUsuario, setEditUsuario] = useState(null);

    const [editUsuarioData, setEditUsuarioData] = useState({
        username: "",
        usertype: ""
    });


    useEffect(() => {
        (async function getUsuarios() {
            try {
                let usuariosj = await fetch('http://100.24.228.237:10023/users', {
                    method: 'get',
                });
                let usuarios = await usuariosj.json();
                console.log(usuarios.users);
                setUsuarios(usuarios.users)

            }
            catch (e) {
                console.log(e);
            }
        })();
    }, []);

    const handleEditFormChange = (event) => {
        event.preventDefault();


        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...editUsuarioData };
        newFormData[fieldName] = fieldValue;

        setEditUsuarioData(newFormData);
    }

    const handleEditClick = (event, usuario) => {
        event.preventDefault();
        setEditUsuario(usuario._id);

        const formValues = {
            username: usuario.username,
            usertype: usuario.usertype,
        }
        setEditUsuarioData(formValues);
    }
    const handleCancelClick = (event) => {
        event.preventDefault();
        setEditUsuario(null);
    }
    const handleSaveClick = (event) => {
        event.preventDefault();
        const edited = {
            _id: editUsuario,
            username: editUsuarioData.username,
            usertype: editUsuarioData.usertype,
        }
        const newUsuarios = [...usuarios];

        const index = usuarios.findIndex((usuario) => usuario._id === editUsuario);
        newUsuarios[index] = edited;
        setUsuarios(newUsuarios);
        setEditUsuario(null);
    }

    const handleDeleteClick = (usuario) => {
        const newUsuarios = [...usuarios];
        const index = usuarios.findIndex((user) => user._id === usuario._id);
        newUsuarios.splice(index, 1);
        setUsuarios(newUsuarios);
        deleteUsuario(usuario);
    }
    const[which, setWhich] = useState(1);

    const usersClick = () => {
        setWhich(2);
    }

    const adminClick = () => {
        setWhich(3);
    }

    const allClick = () => {
        setWhich(1);
    }

    const[sUser, setSUser] = useState("");

    const searchUser = (event) => {
        event.preventDefault();
        const fieldValue = event.target.value;
        setSUser(fieldValue);
        console.log(sUser);
    }

    const[add, setAdd] = useState(false);

    const actAdd = () =>{
        setAdd(!add);
    }
    const [addUsuarioData, setAddUsuarioData] = useState({
        username: "",
        usertype: "",
        password: ""
    });
    const handleAddFormChange = (event) => {
        event.preventDefault();


        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...addUsuarioData };
        newFormData[fieldName] = fieldValue;

        setAddUsuarioData(newFormData);
    }

    const addUsuario =
        () => {
            try {
                let res =  fetch('http://100.24.228.237:10023/users/addUser', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        username: addUsuarioData.username,
                        password: addUsuarioData.password,
                        usertype: addUsuarioData.usertype
                    })
                });
                let result = res.json();
                
                
                
            }
            catch (e) {
                console.log(e);
            }
            alert("User Added");
            setAdd(false);
        }

    const deleteUsuario =
        (usuario) => {
            try {
                let res = fetch('http://100.24.228.237:10023/users/delete/' + usuario.username, {
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
            alert("User Deleted");
        }
    const editUsuarioD =
        (usuario) => {
            try {
                let res = fetch('http://100.24.228.237:10023/users/update/' + usuario.username, {
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
            alert("User Updated");
        }
    
        

    
    
    return (
        <div>
            <div>
                <input type="text" placeholder="Search by Username" className="searchuser" onChange={searchUser}/>
                <input type="button" value="Add User" className="add" onClick={actAdd}/>
                <br/>
                <input type="radio" id="users" name="searchType" value="Users" onClick={usersClick}/>
                <label for="users">Users&emsp;</label>
                <input type="radio" id="admins" name="searchType" value="Admins" onClick={adminClick}/>
                <label for="admins">Admins&emsp;</label>
                <input type="radio" id="all" name="searchType" value="All" onClick={allClick}/>
                <label for="all">All</label>
            </div>
            <br/>
            {add == true &&
            <div>
                <tr>
            <td>
                <input type="text" required="required" placeholder="Enter username" name="username" onChange={handleAddFormChange}/>
            </td>
            <td>
                        <input type="text" required="required" placeholder="Enter usertype" name="usertype" onChange={handleAddFormChange}/>
            </td>
            <td>
                        <input type="text" required="required" placeholder="Enter password" name="password" onChange={handleAddFormChange}/>
            </td>
            <td>
                <input type="button" value="Add" onClick={addUsuario} />
            </td>
            <td>
                <input type="button" value="Cancel" onClick={actAdd}/>
            </td>

            </tr>
            </div>
            }
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Tipo de Usuario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) =>
                            <Fragment>
                                {editUsuario == usuario._id ?
                                    <EditRowUser
                                        usuario={usuario}
                                        handleCancelClick={handleCancelClick}
                                        handleSaveClick={handleSaveClick}
                                        editUsuarioData={editUsuarioData}
                                        handleEditFormChange={handleEditFormChange}
                                        
                                    /> :
                                    <ReadRowUser
                                        usuario={usuario}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                        which={which}
                                        sUser={sUser}
                                    />}
                            </Fragment>
                        )}

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Usuarios
