const express = require('express')

const router = express.Router()

const apiPieceController = require('./controllers/apiPieceController')
const pieceMiddlewares = require('./middlewares/pieceMiddlewares')

// Get
router.get('/', apiPieceController.getAllTributes)

// Post
router.post('/', 
    pieceMiddlewares.validateName,
    apiPieceController.createHomage)

module.exports = router