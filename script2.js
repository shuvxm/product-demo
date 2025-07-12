async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("455");
    }, 3500);
  });
}

console.log("object");
async function main() {
  console.log("start");

  let data = await getData();
  console.log(data);
  console.log("end");
}
main();

// setInterval(() => {
//   console.log("Hello every second!");
// }, 2000);

// let count = 0;

// Start the interval
// const intervalId = setInterval(() => {
//   console.log("Hello every second!");
//   count++;

//   // Stop after 5 times
//   if (count === 5) {
//     clearInterval(intervalId);
//     console.log(i);
//     console.log("Interval stopped.");
//   }
// }, 2000);
