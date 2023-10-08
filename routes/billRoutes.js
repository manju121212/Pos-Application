const express = require("express");
const { addBillsController,getBillsController } = require("./../controllers/billsController");

const router = express.Router();

//routes
router.get("/get-bills", getBillsController);
//MEthod - POST
router.post("/add-bills", addBillsController);

module.exports = router;