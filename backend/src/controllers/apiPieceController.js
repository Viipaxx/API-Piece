const apiPieceModel = require('../models/apiPieceModel')

const getAll = async (req, res) => {
    const tributes = await apiPieceModel.getAll()

    res.status(200).json(tributes)
}

module.exports = {
    getAll,
}