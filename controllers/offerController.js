const Offer = require("../models/Offer");
const { validationResult } = require("express-validator");
const moment = require("moment");

const getNearByOffers = async (req, res) => {
  try {
    // check validate post request
    const errors = validationResult(req);
    // if there is error then return Error
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    let data = await getDataAPI(req, res);
    let processedData = processOffers(data, req.body.checkInDate);
    res.status(200);
    return res.json(processedData);
  } catch (err) {
    res.status(500)
    return res.json({ message: err.message });
  }
};

// Get Data from API
const getDataAPI = async (req, res) => {
  const response = await fetch(req.body.api);
  const data = await response.json();
  if (!data) {
    throw new Error("No data found");
  }
  try {
    await Offer.validateAsync(data);
  } catch (err) {
    throw new Error(err);
  }
  return data;
};

//Only select category Resturant , Retail & Activity offers.
const processOffers = (data, checkInDate) => {
  const offers = data?.offers;
  let processedData = filterCategory(offers);
  processedData = filterValidDate(processedData, checkInDate);
  processedData = filterClosestMerchant(processedData);
  processedData = sortClosestOfferMerchant(processedData);
  processedData = filterLast2OffersDifferentCategory(processedData);
  return processedData;
};

//Filter Only select category Resturant , Retail & Activity offers.
const filterCategory = (data) => {
  const filteredData = data?.filter((offer) => {
    if (offer.category === 1 || offer.category === 2 || offer.category === 4) {
      return offer;
    }
  });
  return filteredData;
};

// Filter Offer need to be valid till checkin date + 5 days. (valid_to is in YYYY-MM-DD)
const filterValidDate = (data, checkInDate) => {
  const filteredData = data?.filter((offer) =>
    moment(checkInDate).isBefore(moment(offer.valid_to).add(5, "days"))
  );
  return filteredData;
};

// Filter the closest merchant from the checkin location
const filterClosestMerchant = (data) => {
  data?.forEach((offer) => {
    offer.merchants.sort((a, b) => a.distance - b.distance);
    offer.merchants = offer.merchants.slice(0, 1);
  });
  return data;
};

// Select the 2 closest merchant offers from different categories
const sortClosestOfferMerchant = (data) => {
  data.sort((a, b) => a.merchants[0].distance - b.merchants[0].distance);
  return data;
};

// Select the 2 closest merchant offers from different categories
const filterLast2OffersDifferentCategory = (data) => {
  const selectedOffers = [];
  const selectedCategories = [];
  for (let i = 0; i < data.length; i++) {
    const offer = data[i];
    if (!selectedCategories.includes(offer.category)) {
      selectedOffers.push(offer);
      selectedCategories.push(offer.category);
      if (selectedOffers.length === 2) {
        break;
      }
    }
  }
  return selectedOffers;
};

module.exports = {
  getNearByOffers,
  getDataAPI,
};