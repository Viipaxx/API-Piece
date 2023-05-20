const connection = require('./connection')


const getAllTributes = async () => {
    const [tributes] = await connection.execute('SELECT * FROM tributes')
    return tributes
}

const createHomage = async (homage) => {
    
    const { name, obito, pers_fav, homenagem } = homage

    const query = 'INSERT INTO tributes(name, obito, pers_fav, homenagem) VALUES (?, ?, ?, ?)'

    const [createdHomage] = await connection.execute(query, [ name, obito, pers_fav, homenagem ])
    
    return {insertId: createdHomage.insertId}
}   

module.exports = {
    getAllTributes,
    createHomage,
}