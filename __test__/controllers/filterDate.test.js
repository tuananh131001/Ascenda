const { filterValidDate } = require("../../controllers/offerController");

const dataToTest = [
  {
    id: 1,
    valid_to: "2018-05-01",
  },
];
// filter filterValidDate
it("Should return empty array because offer are expired",  () => {
  const data = filterValidDate(dataToTest, "2021-06-15");
  expect(data).toEqual([]);
});
