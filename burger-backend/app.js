const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/products.route');
const orderRouter = require('./routes/order.route');
const comboRouter = require('./routes/combo.route')

const app = express();
app.use(express.json());
app.use(cors());
app.use(productRouter);
app.use("/order",orderRouter);
app.use("/combo",comboRouter)
app.listen(3000, () =>

    console.log("Listening at 3000")
);