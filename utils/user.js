const users = [
  {
    matricNo: 152385,
    password: "awesome1",
    name: { first: "Hassan", last: "Ibrahim" },
    role: "ADMIN",
  },
  {
    matricNo: 152000,
    password: "awesome1",
    name: { first: "kunle", last: "ayotomide" },
  },
  {
    matricNo: 152001,
    password: "awesome1",
    name: { first: "oriyomide", last: "ayodele" },
  },
  {
    matricNo: 152002,
    password: "awesome1",
    name: { first: "define", last: "justice" },
  },
  {
    matricNo: 152003,
    password: "awesome1",
    name: { first: "lu", last: "zahou" },
  },
];

users.forEach((el) => {
  el["passwordConfirm"] = "awesome1";
});
// console.log(users);

module.exports = {
  users,
};
