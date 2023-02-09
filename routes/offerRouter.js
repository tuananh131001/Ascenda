import express from "express";
import { checkSchema } from "express-validator";
import { getNearByOffers } from "../controllers/offerController.js";
import requestDataValidate from "../validations/offer.validation.js";
const router = express.Router();
router.route("/offer").post(checkSchema(requestDataValidate), getNearByOffers);

export default router;
