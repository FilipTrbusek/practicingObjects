school = {
  type: "university",
  street: "Garthdee",
  city: "Aberdeen",
  capacity: 16787,
  open: function () {
    console.log(`School is open`);
  },
  closed: function () {
    return `School is closed`;
  },
};

// console.log(school.type);
// console.log(school.city);

school.open();
let schoolClosed = school.closed();
console.log(school.closed());
