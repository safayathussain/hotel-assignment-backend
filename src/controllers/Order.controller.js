import fs from "fs";
import { asyncHandler } from "../utils/AsyncHandler.js";

export const getPastOrders = asyncHandler(async (req, res) => {
    fs.readFile('./JSON/orders.json', 'utf8', (err, data) => {
        const jsonData = JSON.parse(data);
        const filteredData = jsonData.filter(obj => obj.user.email === req.params.email)
        res.status(200).json({
            data: filteredData
        })
    })

});
export const placeOrder = asyncHandler(async (req, res) => {
    const body = req.body;
    body.orderId = (Math.random() * 100000).toFixed(0)
    fs.readFile('./JSON/orders.json', 'utf8', (err, data) => {
        const jsonData = JSON.parse(data);
        const newArr = [...jsonData, body]
        fs.writeFile('./JSON/orders.json', JSON.stringify(newArr), 'utf8', (err) => { });
        res.status(200).json({
            success: true,
            message: 'Order placed successfully',
            data: body
        })
    })

});


export const removePastOrder = asyncHandler(async (req, res) => {
    const param = req.params.orderId;
    fs.readFile('./JSON/orders.json', 'utf8', (err, data) => {
        const jsonData = JSON.parse(data);
        const newArr = jsonData.filter(obj => obj.orderId !== param)
        fs.writeFile('./JSON/orders.json', JSON.stringify(newArr), 'utf8', (err) => { });
        res.status(200).json({
            success: true,
            message: 'Order removed successfully',
            
        })
    })
})
