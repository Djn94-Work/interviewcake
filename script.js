let maxProfit = 0;
let checkedNum = 0;
let minindx = 0;
let maxindx = 1;
let currentmin = 0;
let maxProf = 0;
const stockPrices = [
  1321.28,
  1329,
  1331.01,
  1329.22,
  1327.87,
  1328.96,
  1326.77,
  1327.48,
  1327.85,
  1328.9,
  1329.5,
  1333.54,
  1317.06
];

function findNumbers() {
  for (i = 0; i < stockPrices.length; i++) {
    //iterates through the array
    checkedNum = stockPrices[i]; //for every item runs the loop,
    //  should loop through the next item in array to end of array
    for (j = i; j < stockPrices.length - i; j++) {
      //iterate through the rest of the array
      let placehold = stockPrices[j] - checkedNum; //subtract what's being iterated from
      //every price posted after
      if (placehold > maxProfit) {
        //if the maxProfit var is less than placeholder
        maxProfit = placehold; // set maxprofit to placeholder
      }
    }
    return maxProfit;
  }
}
// something that goes through array, checking for greatest difference between maxindx and currentindx
function simpleFix() {
  for (i = 0; i < stockPrices.length; i++) {
    if (stockPrices[i] <= stockPrices[currentmin]) {
      currentmin = i; //set the currentmin to targeted item
    }
    if (
      stockPrices[maxindx] - stockPrices[minindx] < //if current max profit is less than
      stockPrices[i] - stockPrices[currentmin] // the current index minus the current minimum
    ) {
      maxindx = i; //becomes new max index
      minindx = currentmin; //new current min
    }
  }
  maxProf = stockPrices[maxindx] - stockPrices[minindx];
  console.log("this is the resultant maxprof " + maxProf);
  return maxProf;
}

// findNumbers();
simpleFix();

module.exports = { stockPrices, simpleFix };
