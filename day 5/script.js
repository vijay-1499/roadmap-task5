var jsonObject = {
    "name": "vijay",
    "age": 28,
    "city": "india"
  }
1.for loop
var keysArray = Object.keys(jsonObject);
for (var i = 0; i < keysArray.length; i++) {
  var key = keysArray[i];
  var value = jsonObject[key];
  console.log(key,":" ,value);
}

2.for in 
for (var key in jsonObject) {
    console.log(key, jsonObject[key]);
  }

3.for of 
var valuesArray = Object.values(jsonObject);
for (var value of valuesArray) {
  console.log(value);
}

4.for each
Object.values(jsonObject).forEach(function(value) {
    console.log(value);
  });
  