const apiPieceModel = require('../models/apiPieceModel')

const getAllTributes = async (req, res) => {
    const tributes = await apiPieceModel.getAllTributes()

    res.status(200).json(tributes)
}

const createHomage = async (req, res) => {

    const homage = await apiPieceModel.createHomage(req.body)
    res.status(201).json(homage)
} 

module.exports = {
    getAllTributes,
    createHomage,
}