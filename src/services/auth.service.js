import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const loginService = (email) => User.findOne({
    email: email
}).select('+password');


const generatorToken = (id) => {
    return jwt.sign({id: id}, process.env.SECRET_JWT, {expiresIn: 86400})
}

export {
    loginService,
    generatorToken
}