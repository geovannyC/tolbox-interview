;
'use strict'
// lógica de los middelware para las solicitudes de la api
const test = (req, res)=>{
    res.status(200).send('Hola api')
}
module.exports={
    test,
}