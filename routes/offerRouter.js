import express from "express";
import { getNearByOffers } from "../controllers/offerController.js";
const router = express.Router();
router.route("/offer").post(getNearByOffers)

export default router;
