const router = require('express').Router();
const orderController = require('../controllers/order.controller');

router.get("/",orderController.getOrders);
router.post("/",orderController.checkout);


module.exports = router;