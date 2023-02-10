const successResponse = [
  {
    id: 1,
    title: "Offer 1",
    description: "Offer 1 description",
    category: 1,
    merchants: [
      {
        id: 1,
        name: "Offer1 Merchant1",
        distance: 0.5,
      },
    ],
    valid_to: "2020-02-01",
  },
  {
    id: 3,
    title: "Offer 3",
    description: "Offer 3 description",
    category: 2,
    merchants: [
      {
        id: 3,
        name: "Offer3 Merchant1",
        distance: 0.8,
      },
    ],
    valid_to: "2020-01-01",
  },
];

module.exports = successResponse;