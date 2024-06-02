
import fs from 'fs';
import { asyncHandler } from '../utils/AsyncHandler.js'

const registerUser = asyncHandler(async (req, res) => {
    const userData = req.body;
    if (!userData.name || !userData.email || !userData.password) {
        res.status(500).json({
            success: false,
            message: 'All field are required'
        })
    }
    fs.readFile('./JSON/users.json', 'utf8', (err, data) => {
        const jsonData = JSON.parse(data);
        const existedUser = jsonData.find(obj => obj.email === userData.email)
        if (existedUser) {
            res.status(403).json({
                success: false,
                message: 'User already exists'
            })
        } else {
            const newArr = [...jsonData, userData]
            fs.writeFile('./JSON/users.json', JSON.stringify(newArr), 'utf8', (err) => { });
            res.status(200).json({
                success: true,
                message: 'User created',
                data: userData
            })
        }
    })

})
const loginUser = asyncHandler(async (req, res) => {
    const userData = req.body;
    if (!userData.email || !userData.password) {
        res.status(500).json({
            success: false,
            message: 'All field are required'
        })
    }
    fs.readFile('./JSON/users.json', 'utf8', (err, data) => {
        const jsonData = JSON.parse(data);
        const existedUser = jsonData.find(obj => obj.email === userData.email && obj.password === userData.password)
        if (!existedUser) {
            res.status(403).json({
                success: false,
                message: 'Email or password is incorrect'
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Login successfull',
                data: existedUser
            })
        }
    })

})

export { registerUser, loginUser }