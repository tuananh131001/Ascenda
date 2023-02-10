const express = require("express");

const { checkSchema } = require("express-validator");

const { getNearByOffers } = require("../controllers/offerController.js");
const requestDataValidate = require("../validations/offer.validation.js");
const router = express.Router();
router.route("/offer").post(checkSchema(requestDataValidate), getNearByOffers);

module.exports = router;
