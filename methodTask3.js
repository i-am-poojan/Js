const carts = [
  {
    id: 1,
    userId: 1,
    date: "2020-03-02T00:00:00.000Z",
    products: [
      { productId: 1, quantity: 4 },
      { productId: 2, quantity: 1 },
      { productId: 3, quantity: 6 },
    ],
    __v: 0,
  },
  {
    id: 2,
    userId: 1,
    date: "2020-01-02T00:00:00.000Z",
    products: [
      { productId: 2, quantity: 4 },
      { productId: 1, quantity: 10 },
      { productId: 5, quantity: 2 },
    ],
    __v: 0,
  },
  {
    id: 3,
    userId: 2,
    date: "2020-03-01T00:00:00.000Z",
    products: [
      { productId: 1, quantity: 2 },
      { productId: 9, quantity: 1 },
    ],
    __v: 0,
  },
  {
    id: 4,
    userId: 3,
    date: "2020-01-01T00:00:00.000Z",
    products: [{ productId: 1, quantity: 4 }],
    __v: 0,
  },
  {
    id: 5,
    userId: 3,
    date: "2020-03-01T00:00:00.000Z",
    products: [
      { productId: 7, quantity: 1 },
      { productId: 8, quantity: 1 },
    ],
    __v: 0,
  },
  {
    id: 6,
    userId: 4,
    date: "2020-03-01T00:00:00.000Z",
    products: [
      { productId: 10, quantity: 2 },
      { productId: 12, quantity: 3 },
    ],
    __v: 0,
  },
  {
    id: 7,
    userId: 8,
    date: "2020-03-01T00:00:00.000Z",
    products: [{ productId: 18, quantity: 1 }],
    __v: 0,
  },
];

//   Calculate according to userId howmany quantity products buy
function getuserId(userId) {
  console.log(userId);
  const find_userId = carts.filter((element) => {
    return element.userId === userId;
  });
  console.log(find_userId);
  let quantity=0;
  for (let i = 0; i < find_userId.length; i++) {
    const find_userId_products=find_userId[i].products;
    console.log(find_userId_products);
   
    for (let j = 0; j < find_userId_products.length; j++) {
        console.log(find_userId_products[j].quantity);
        quantity+=find_userId_products[j].quantity;
    }
    
    
  }
  console.log(quantity);
  return quantity;
}

// getuserId(1);
console.log(`according to userId number of total quantity is :- ${getuserId(4)}}`);