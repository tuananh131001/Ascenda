const { filterClosestMerchant } = require("../../controllers/offerController");

const dataT = [
  {
    id: 1,
    title: "Offer 1",
    category: 1,
    merchants: [
      { id: 1, distance: 10 },
      { id: 2, distance: 20 },
      { id: 3, distance: 30 },
    ],
  },
  {
    id: 2,
    title: "Offer 2",
    category: 2,
    merchants: [
      { id: 4, distance: 15 },
      { id: 5, distance: 5 },
      { id: 6, distance: 35 },
    ],
  },
];

// return filter the closest merchant from the checkin location
it("Should return filter the closest merchant from the checkin location",  () => {
  const data = filterClosestMerchant(dataT);
  expect(data).toEqual([
    {
      id: 1,
      title: "Offer 1",
      category: 1,
      merchants: [{ id: 1, distance: 10 }],
    },
    {
      id: 2,
      title: "Offer 2",
      category: 2,
      merchants: [{ id: 5, distance: 5 }],
    },
  ]);
});
