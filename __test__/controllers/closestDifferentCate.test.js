const {
  filterLast2OffersDifferentCategory,
} = require("../../controllers/offerController");

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
    id: 1,
    title: "Offer 1",
    category: 1,
    merchants: [
      { id: 1, distance: 2 },
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

// Filtered closest but different category
it("Should return filtered closest but different category", () => {
  const filtered = filterLast2OffersDifferentCategory(dataT);
  expect(filtered).toEqual([
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
  ]);
});
