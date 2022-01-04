;
'use strict'
// configuración de las rutas del servidor 
const express = require('express')
const api = express.Router(),
control = require('../control/control')
api.get('/test', control.test)

module.exports = api