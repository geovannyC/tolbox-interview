var modules = require('./modules')

;
'use strict'
// control de los middelware para las solicitudes de la api
const test = (req, res)=>{
    res.json('hi api')
    res.status(200)
}
module.exports={
    test,
}