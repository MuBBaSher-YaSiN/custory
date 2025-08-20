// import serverInstance from ".";

// export const updateDiscountAPI = ({data})=>serverInstance.patch('/discounts', data).then(res=>res.data);
// export const getDiscountsAPI = ()=>serverInstance.get('/discounts').then(res=>res.data);
// export const deleteDiscountAPI = ()=>serverInstance.delete('/discounts').then(res=>res.data);
// export const addItemToDiscountAPI = (data) => {
//     return new Promise((resolve, reject) => {
//       serverInstance.post('/discounts', data)
//         .then(res => resolve(res.data))
//         .catch(err => reject(err));
//     });
//   };

// export const deleteDiscountByIdAPI = (id) => {
//   return new Promise((resolve, reject) => {
//     serverInstance.delete(`/discounts/${id}`)
//       .then(res => resolve(res.data))
//       .catch(err => reject(err));
//   });
// };


import serverInstance from ".";

export const updateDiscountAPI = ({ data }) =>
  serverInstance.patch("/discounts", data).then(res => res.data);

export const getDiscountsAPI = () =>
  serverInstance.get("/discounts").then(res => res.data);

export const deleteDiscountAPI = () =>
  serverInstance.delete("/discounts").then(res => res.data);

export const addItemToDiscountAPI = (data) =>
  serverInstance.post("/discounts", data).then(res => res.data);

export const deleteDiscountByIdAPI = (id) =>
  serverInstance.delete(`/discounts/${id}`).then(res => res.data);
