const { filterCategory } = require("../../controllers/offerController");

const dataToTest = [
  {
    id: 1,
    title: "Offer 1",
    category: 1,
  },
  {
    id: 2,
    title: "Offer 2",
    category: 2,
  },
  {
    id: 3,
    title: "Offer 3",
    category: 3,
  },
  {
    id: 4,
    title: "Offer 4",
    category: 4,
  },
  {
    id: 5,
    title: "Offer 5",
    category: 1,
  },
];
const successResponse = [
  {
    id: 1,
    title: "Offer 1",
    category: 1,
  },
  {
    id: 2,
    title: "Offer 2",
    category: 2,
  },
  {
    id: 4,
    title: "Offer 4",
    category: 4,
  },
  {
    id: 5,
    title: "Offer 5",
    category: 1,
  },
];
// return filter category
it("Should return filter  category", async () => {
  const data = filterCategory(dataToTest);
  expect(data).toEqual(successResponse);
});
