//generate height, weight, BMI data
const DATA_SIZE = 5000
const data = []

//generate the data
for (var i = 0; i < DATA_SIZE; i++) {
  let bitter = rand(1, 100);
  let bittersweet = rand(1, 100);
  let mild = rand(1, 100);
  let smoky = rand(1, 100);
  let rich = rand(1, 100);
  let sweet = rand(1, 100);
  let sour = rand(1, 100);
  let salty = rand(1, 100);
  let spicy = rand(1, 100);
  let juicy = rand(1, 100);
  let fruity = rand(1, 100);
  let oily = rand(1, 100);
  let crunchy = rand(1, 100);
  let dry = rand(1, 100);
  let wet = rand(1, 100);
  let creamy = rand(1, 100);
  let plain = rand(1, 100);
  let soft = rand(1, 100);
  let hard = rand(1, 100);
  let taste = rand(0, 1)
  let f = {
    'bitter': bitter,
    'bittersweet': bittersweet,
    'mild': mild,
    'smoky': smoky,
    'rich': rich,
    'sweet': sweet, 
    'sour': sour,
    'salty': salty, 
    'spicy': spicy, 
    'juicy': juicy,
    'fruity': fruity,
    'oily': oily,
    'crunchy': crunchy,
    'dry': dry,
    'wet': wet,
    'creamy': creamy,
    'plain': plain,
    'soft': soft,
    'hard': hard,
    'taste': taste
   };
  data.push(f);
}

//store the data into the file
data_json = JSON.stringify(data);
const fs = require('fs');
fs.writeFileSync("user_data.json", data_json);
console.log("Success!! JSON dummy data created");


//generate arbitrary scope of random number
function rand(n, m) {
  let range = m - n + 1;
  return Math.floor(Math.random() * range + n)
}

