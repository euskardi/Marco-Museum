

import React from 'react';


class api_citas extends React.Component{
    async getCitas() {
        try{
            let citasj = await fetch('http://100.24.228.237:10023/citas', {
                method: 'get',
            });
            let citas = await citasj.json();
            console.log(citas.usuario);
        }
        catch(e){
            console.log(e);
        }
    }
}

export default api_citas