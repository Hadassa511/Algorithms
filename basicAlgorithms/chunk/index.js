function chunk(array, size) {
  const chuncked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chuncked;
}

// function chunk(array, size) {
//   const chuncked = [];

//   for (let element of array) {
//     const last = chuncked[chuncked.length - 1];

//     if (!last || last.length === size) {
//       chuncked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chuncked;
// }

module.exports = chunk;
