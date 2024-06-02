import fs from 'fs'
import { asyncHandler } from '../utils/AsyncHandler.js';


export const getItems = asyncHandler(async (req, res) => {
    fs.readFile('./JSON/items.json', 'utf8', (err, data) => {
        const jsonData = JSON.parse(data);
        res.status(200).json({
            data: jsonData
        })
    })

})