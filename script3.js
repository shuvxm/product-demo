// // console.log("object")

// // let list = []
// // console.log(list)

// // function addItem(){
// //     // console.log("clicked")
// //     let input = document.querySelector(".todo-input")
// //     let value = input.value
// //     // console.log(value)

// //     if(value === "") {
// //         alert("Please enter a task")
// //         return;
// //     }

// //     list.push(value)
// //     input.value = ""
// //     // console.log(list)

// //     let listStr = ""
// //     for(let i=0; i < list.length;i++){
// //         listStr += `<li>${list[i]}</li>`
// //     }

// //     const taskList = document.getElementById("task-list")

// //     // taskList.innerHTML = taskList.innerHTML + `<li>${value}</li>`
// //     taskList.innerHTML = listStr;
// // }

// // promise
// // let a = new Promise((resolve, reject) => {
// //   resolve("ths is resolved");
// //   reject("this is rejected");
// // })
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((data) => {
// //     console.log(data);
// //   });
// //  OR
// // let b = new Promise((resolve, reject) => {
// //     resolve("this is resolved b")
// //     reject("this is rejected b")
// // })
// // b.then((data)=>{
// //     console.log(data)
// // }).catch((err)=>{
// //     console.log(err)
// // })

// // let a1 = fetch("https://fakestoreapi.com/products/").then((response)=>{
// //     return response.json();
// // }).then((data)=>{
// //     return data[0].title;
// // })
// // console.log(a1);

// // json to obj -> parse
// // obj to json  -> stringgify

// async function fetching() {
//   let data = await fetch("https://fakestoreapi.com/products/");
//   console.log(data);

//   let res = await data.json();
//   console.log(res);

//   const container = document.getElementById("product-container");

//   res.forEach((product) => {
//     const productElement = document.createElement("div");
//     productElement.innerHTML = `
//           <h3>${product.title}</h3>
//           <img src="${product.image}" width="100" />
//           <p><strong>Price:</strong> $${product.price}</p>
//         `;
//     productElement.style.border = "1px solid #ccc";
//     productElement.style.margin = "10px";
//     productElement.style.padding = "10px";
//     productElement.style;
//     container.appendChild(productElement);
//   });
// }

// fetching();
