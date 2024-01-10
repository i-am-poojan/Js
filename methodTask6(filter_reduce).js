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



const find_productId=carts.reduce((p,c) => {
    const {products}=c;
   products.forEach(({productId,quantity})=>{
    if(!p[productId]){
        p[productId]=0;
    }
    p[productId]+=quantity;
   });
   return p;
},{});
console.log(find_productId);


// const find_Id_Quantity = 1;
// function qunatity(find_Id_Quantity) {
//   const calculate_quantity = carts.reduce((p, c) => {
//     if (c.userId === find_Id_Quantity) {
//       const { products } = c;
//       const total_quantity = products.reduce(
//         (total, c_quantity) => c_quantity.quantity + total,
//         0
//       );
//       return p + total_quantity;
//     }
//     return p;
//   }, 0);
//   return calculate_quantity;
// }
// console.log(qunatity(1));

// console.log(calculate_quantity);

//   perform filter using reduce here calculate qunatity according to userId
// const calculate_quantity=carts.reduce((p,cart) => {
//   const {userId,products}=cart;
//   const total_quantity=products.reduce((total,c)=>c.quantity+total,0)
//   if (!p[userId]){
//     p[userId]=0
//   }
//   p[userId]+=total_quantity;
//   return p;
// },{});
// console.log(calculate_quantity);
