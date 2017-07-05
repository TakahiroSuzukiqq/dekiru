//generate height, weight, BMI data
const DATA_SIZE = 10
const data = []

//generate the data
for (var i = 0; i < DATA_SIZE; i++) {
  let age = rand(10, 40);
  let itemA = rand(1, 10);
  let itemB = rand(1, 5);
  let itemC = rand(10, 20);
  let pageA = rand(10, 20);
  let pageB = rand(5, 10);
  let pageC = rand(1, 10);
  let totalPp = rand(1000, 3000);
  let f = {
    'age': age,
    'itemA': itemA, 
    'itemB': itemB,
    'itemC': itemC, 
    'pageA': pageA, 
    'pageB': pageB, 
    'pageC': pageC
   };
  data.push(f);
}

//store the data into the file
data_json = JSON.stringify(data);
const fs = require('fs');
fs.writeFileSync("koubai.json", data_json);
console.log("ok, saved");


//generate arbitrary scope of random number
function rand(n, m) {
  let range = m - n + 1;
  return Math.floor(Math.random() * range + n)
}

