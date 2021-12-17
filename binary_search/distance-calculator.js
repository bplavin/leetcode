/* You are given a file with records about mileage and cost of the trip. Write a class DistanceCalculator which returns price for the trip.

For example given a file:

origin_state,mileage,сost
AL,50,321
AL,100,404
AL,250,847
AL,500,1314
TX,50,150
TX,100,200
TX,200,300
TX,300,400

Price for trip in Texas state with the distance 200 km will cost 300$.
Price for trip in Texas state with the distance 210 km will cost 400$

*/

// Input: "IL", 100; if State is not present or Milage is not in the range return null;
// Output: 200;

// class TravelCost {
//   constructor(state, mileage, cost) {
//     this.state = state;
//     this.milage = mileage;
//     this.cost = cost;
//   }
// }

// class DistanceCalculator {
//   constructor(travelCostList) {
//     this.list = travelCostList;
//   }

//   calculate(state, mileage) {
//     return cost;
//   }
// }

//!!!!!----  Brute force Solution -----!!!!!!

// let travelCostList = [
//   { state: "AL", mileage: 200, cost: 300 },
//   { state: "AL", mileage: 150, cost: 200 },
//   { state: "AL", mileage: 300, cost: 400 },
//   { state: "AZ", mileage: 300, cost: 400 },
// ];

// let sortedList = travelCostList.sort(function (a, b) {
//   if (a.mileage > b.mileage) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// let stateToValue = new Map();
// for (let i = 0; i < sortedList.length; i++) {
//   if (!stateToValue.has(sortedList[i].state)) {
//     stateToValue.set(sortedList[i].state, []);
//   }
//   stateToValue.get(sortedList[i].state).push(sortedList[i]);
// }

// let cost = 0;

// function calculateCost(state, mileage) {
//   let temp = stateToValue.get(state);

//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i].mileage >= mileage) {
//       cost = temp[i].cost;
//       return cost;
//     }
//   }
// }

//!!!!!----  Binary search Solution -----!!!!!!

let travelCostList = [
  { state: "AL", mileage: 150, cost: 200 },
  { state: "AL", mileage: 200, cost: 300 },
  { state: "AL", mileage: 300, cost: 400 },
  { state: "AZ", mileage: 300, cost: 400 },
];

let sortedList = travelCostList.sort(function (a, b) {
  if (a.mileage > b.mileage) {
    return 1;
  } else {
    return -1;
  }
});

let stateToValue = new Map();
for (let i = 0; i < sortedList.length; i++) {
  if (!stateToValue.has(sortedList[i].state)) {
    stateToValue.set(sortedList[i].state, []);
  }
  stateToValue.get(sortedList[i].state).push(sortedList[i]);
}

function calculateCost(state, mileage) {
  let arrList = stateToValue.get(state);
  let start = 0,
    end = arrList.length - 1;

  while (start <= end) {
    if (mileage < 0 || mileage > arrList[end].mileage) return null;
    let mid = Math.floor((start + end) / 2);

    if (0 <= mileage && mileage <= arrList[0].mileage) {
      return arrList[0].cost;
    }

    if (arrList[mid - 1].mileage < mileage && mileage <= arrList[mid].mileage) {
      return arrList[mid].cost;
    } else if (arrList[mid].mileage < mileage) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

console.log(calculateCost("AL", 201));
