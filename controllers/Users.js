import Users from "../models/UserModel.js"
import argon2 from 'argon2'

export const getUser = async (req, res) => {
    try {
        const response = await Users.findAll({
            attributes: { exclude: ["password"] }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const response = await Users.findOne({
            where: {
                uuid: req.params.uuid
            },
            attributes: { exclude: ["password"] }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createUser = async (req, res) => {
    const { nama, email, password, confirmPassword, role } = req.body

    if (password !== confirmPassword) return res.status(500).json({ msg: "Password does not match" })
    const hashPassword = await argon2.hash(password)

    try {
        await Users.create({
            nama: nama,
            email: email,
            password: hashPassword,
            role: role
        })
        res.status(200).json({ msg: "Registration Successful" })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const updateUser = (req, res) => {

}


export const deleteUser = (req, res) => {

}