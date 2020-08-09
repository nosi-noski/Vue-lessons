import User from '@models/User'

const login = (request, response) => {}

const register = async (request, response) => {

    const {name, email, password} = request.body
    
    const user = await User.create({
        name,
        email,
        password
    })

    return response.status(201).json({user})
}

export default {
    login,
    register,
}
