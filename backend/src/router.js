const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    return res.status(200).send('GET')
})

router.post('/', (req, res) => {
    return res.status(200).send('POST')
})

router.put('/', (req, res) => {
    return res.status(200).send('PUT')
})

router.delete('/', (req, res) => {
    return res.status(200).send('DELETE')
})

module.exports = router