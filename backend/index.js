require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");

const {HoldingsModel} = require("./model/HoldingsModel");

const {PositionsModel} = require("./model/PositionsModel");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL || 3002;

const {OrdersModel} = require("./model/OrdersModel")

const app = express();

//app.use(cors());
const corsOptions = {
    origin: ['http://localhost:3002', 'https://stock-exchange-ds.vercel.app', 'https://stockexchange-msls.onrender.com'],
    credentials: true, // Allow credentials (if needed)
    optionsSuccessStatus: 200,
};
app.use(bodyParser.json());
app.options('*', cors(corsOptions));

app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://stock-exchange-ds.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});


// app.get('/addHoldings', async(req, res) => {
//     let tempHoldings = [
//         {
//           name: "BHARTIARTL",
//           qty: 2,
//           avg: 538.05,
//           price: 541.15,
//           net: "+0.58%",
//           day: "+2.99%",
//         },
//         {
//           name: "HDFCBANK",
//           qty: 2,
//           avg: 1383.4,
//           price: 1522.35,
//           net: "+10.04%",
//           day: "+0.11%",
//         },
//         {
//           name: "HINDUNILVR",
//           qty: 1,
//           avg: 2335.85,
//           price: 2417.4,
//           net: "+3.49%",
//           day: "+0.21%",
//         },
//         {
//           name: "INFY",
//           qty: 1,
//           avg: 1350.5,
//           price: 1555.45,
//           net: "+15.18%",
//           day: "-1.60%",
//           isLoss: true,
//         },
//         {
//           name: "ITC",
//           qty: 5,
//           avg: 202.0,
//           price: 207.9,
//           net: "+2.92%",
//           day: "+0.80%",
//         },
//         {
//           name: "KPITTECH",
//           qty: 5,
//           avg: 250.3,
//           price: 266.45,
//           net: "+6.45%",
//           day: "+3.54%",
//         },
//         {
//           name: "M&M",
//           qty: 2,
//           avg: 809.9,
//           price: 779.8,
//           net: "-3.72%",
//           day: "-0.01%",
//           isLoss: true,
//         },
//         {
//           name: "RELIANCE",
//           qty: 1,
//           avg: 2193.7,
//           price: 2112.4,
//           net: "-3.71%",
//           day: "+1.44%",
//         },
//         {
//           name: "SBIN",
//           qty: 4,
//           avg: 324.35,
//           price: 430.2,
//           net: "+32.63%",
//           day: "-0.34%",
//           isLoss: true,
//         },
//         {
//           name: "SGBMAY29",
//           qty: 2,
//           avg: 4727.0,
//           price: 4719.0,
//           net: "-0.17%",
//           day: "+0.15%",
//         },
//         {
//           name: "TATAPOWER",
//           qty: 5,
//           avg: 104.2,
//           price: 124.15,
//           net: "+19.15%",
//           day: "-0.24%",
//           isLoss: true,
//         },
//         {
//           name: "TCS",
//           qty: 1,
//           avg: 3041.7,
//           price: 3194.8,
//           net: "+5.03%",
//           day: "-0.25%",
//           isLoss: true,
//         },
//         {
//           name: "WIPRO",
//           qty: 4,
//           avg: 489.3,
//           price: 577.75,
//           net: "+18.08%",
//           day: "+0.32%",
//         },
//       ];

//     tempHoldings.forEach((item)=> {
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.day,
//             day: item.day,
//         });

//         newHolding.save();
//     });
//     res.send("Done !");
// });

// app.get('/addPositions', async(req, res) => {
//     let tempPositions = [
//         {
//           product: "CNC",
//           name: "EVEREADY",
//           qty: 2,
//           avg: 316.27,
//           price: 312.35,
//           net: "+0.58%",
//           day: "-1.24%",
//           isLoss: true,
//         },
//         {
//           product: "CNC",
//           name: "JUBLFOOD",
//           qty: 1,
//           avg: 3124.75,
//           price: 3082.65,
//           net: "+10.04%",
//           day: "-1.35%",
//           isLoss: true,
//         },
//       ];
//       tempPositions.forEach((item)=> {
//         let newPosition = new PositionsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.day,
//             day: item.day,
//         });
        
//         newPosition.save();
//     });
//     res.send("Done !");
// })

app.get('/allHoldings', async(req, res) =>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async(req, res) =>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post('/newOrder', async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body;

        let existingHolding = await HoldingsModel.findOne({ name });

        if (mode === "BUY") {
            if (existingHolding) {
                let newQty = existingHolding.qty + qty;
                let newAvg = ((existingHolding.qty * existingHolding.avg) + (qty * price)) / newQty;

                existingHolding.qty = newQty;
                existingHolding.avg = newAvg;
                
                // Calculate net & day based on last trade
                let netChange = ((price - newAvg) / newAvg) * 100;
                let dayChange = ((price - existingHolding.price) / existingHolding.price) * 100;

                existingHolding.price = price;
                existingHolding.net = `${netChange.toFixed(2)}%`;
                existingHolding.day = `${dayChange.toFixed(2)}%`;

                await existingHolding.save();
            } else {
                let newHolding = new HoldingsModel({
                    name,
                    qty,
                    avg: price,
                    price,
                    net: "0%", // No previous data
                    day: "0%",
                });
                await newHolding.save();
            }
        } else if (mode === "SELL") {
            if (!existingHolding || existingHolding.qty < qty) {
                return res.status(400).send("Not enough holdings to sell");
            }

            existingHolding.qty -= qty;

            if (existingHolding.qty === 0) {
                await HoldingsModel.deleteOne({ name });
            } else {
                // Update net & day changes after selling
                let netChange = ((price - existingHolding.avg) / existingHolding.avg) * 100;
                let dayChange = ((price - existingHolding.price) / existingHolding.price) * 100;

                existingHolding.price = price;
                existingHolding.net = `${netChange.toFixed(2)}%`;
                existingHolding.day = `${dayChange.toFixed(2)}%`;

                await existingHolding.save();
            }
        }

        let newOrder = new OrdersModel({ 
            name: req.body.name, 
            qty: req.body.qty, 
            price: req.body.price, 
            mode: req.body.mode });
        await newOrder.save();

        res.send("Order processed successfully!");
    } catch (error) {
        console.error("Error processing order:", error);
        res.status(500).send("Internal server error");
    }
});


app.get('/allOrders', async(req, res)=> {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
});





app.listen(PORT,()=> {
    console.log("App has started");
    mongoose.connect(uri);
    console.log("DB connected");
    
});