const requestDataValidate = {
  api: {
    exists: {
      errorMessage: "API is required",
      options: { checkFalsy: true },
    },
    isString: { errorMessage: "API Url should be string" },
  },
  checkInDate: {
    exists: {
      errorMessage: "Check in date is required",
      options: { checkFalsy: true },
    },
    isDate: { errorMessage: "CheckIn should be date" },
  },
};

module.exports = requestDataValidate;