const express = require('express')

const router = express.Router()

const apiPieceController = require('./controllers/apiPieceController')

// Get
router.get('/', apiPieceController.getAll)

// Post
router.post('/', (req, res) => {
    return res.status(200).send('POST')
})

// Put
router.put('/', (req, res) => {
    return res.status(200).send('PUT')
})

// Delete
router.delete('/', (req, res) => {
    return res.status(200).send('DELETE')
})

module.exports = router