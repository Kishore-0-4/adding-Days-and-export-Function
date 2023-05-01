const addDays = require("date-fns/addDays");

function date(d) {
  let date = addDays(new Date(2020, 7, 22), d);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}
console.log(date(2));

module.exports = date;
