/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  categoryTotal = [];

  for(i =0; i<transactions.length; i++){
    // creating an obj
    const obj = {
      category : transactions[i].category,
      totalSpent: transactions[i].price
    };

    // getting an object from the array whose obj.category == transaction's category
    elementIndex = categoryTotal.find((obj) => obj.category == transactions[i].category);
    
    // if elementIndex is undefined push the obj to array
    if(elementIndex == undefined){
      categoryTotal.push(obj);
    }
    // else add the price of the present category
    else{
      elementIndex.totalSpent+=transactions[i].price;
    }
  }

  return categoryTotal;
}

module.exports = calculateTotalSpentByCategory;
calculateTotalSpentByCategory([{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
},
{
  id: 1,
  timestamp: 1656076800000,
  price: 100,
  category: 'd',
  itemName: 'Pizza',
},
{
  id: 1,
  timestamp: 1656076800000,
  price: 100,
  category: 'd',
  itemName: 'Pizza',
},
{
  id: 1,
  timestamp: 1656076800000,
  price: 100,
  category: 'd',
  itemName: 'Pizza',
}]);
