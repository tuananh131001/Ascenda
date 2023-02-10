const { getNearByOffers } = require("../../controllers/offerController.js");
const successResponse = require("./mockReponseCase.js");
const Offer = require("../../models/Offer.js");
const request = {
  body: {
    api: "https://61c3deadf1af4a0017d990e7.mockapi.io/offers/near_by?lat=1.313492&lon=103.860359&rad=20",
    checkInDate: "2019-12-25",
  },
};

//fake reponse status with jest
const reponse = {
  status: jest.fn((x) => x),
  json: jest.fn((x) => x),
};
it("Should return 200 when get nearby offers", async () => {
  await getNearByOffers(request, reponse);
  expect(reponse.status).toHaveBeenCalledWith(200);
});
it("Should return the data have been filtered when get nearby offers", async () => {
  const data = await getNearByOffers(request, reponse);
  expect(data).toEqual(successResponse);
});
