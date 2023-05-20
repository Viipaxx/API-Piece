

const validateName = (req, res, next) => {
    const { body } = req

    if (body.name === undefined) {
        return res.status(400).json({ message: 'The field "name" is required' });
    }

    if (body.name === '') {
        return res.status(400).json({ message: 'name cannot be empty' });
    }

    next()
}

const validateObito =  (req, res, next) => {

    const { body } = req

    if (body.obito === undefined) {
        return res.status(400).json({ message: 'The field "obito" is required' });
    }

    if (body.obito === '') {
        return res.status(400).json({ message: 'obito cannot be empty' });
    }

}


module.exports = {
    validateName,
}

