const connection = require('./connection')


const getAll = async () => {
    const [tributes] = await connection.execute('SELECT * FROM tributes')
    return tributes
}

module.exports = {
    getAll,
}