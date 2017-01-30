// function getTempCallback (location, callback) {
//   callback(undefined, 21);
//   callback('City not found');
// }
//
// getTempCallback('Philidelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve(24);
//     reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philidelphia').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error',err);
// });

//Challenge Area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('This is not a number');
    }
  });
}

addPromise (12, 8).then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err);
});
