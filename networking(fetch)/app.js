/*
 *
 *
    Using fetch with Headers
 * 
 * 
 */
// fetch('https://api.github.com/users?since=135').then(function(response) {
//   console.log(response.headers.get('Content-Type'));
//   console.log(response.headers.get('Date'));

//   console.log(response.status);
//   console.log(response.statusText);
//   console.log(response.type);
//   console.log(response.url);
// });

/* Using fetch with responses types
 
fetch('https://api.github.com/users', {mode: 'cors'})
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    console.log('Request successful', text);
  })
  .catch(function(error) {
    console.log('Request failed', error)
  });
 * 
 */

 /*
   CHAINING PROMISES WITH FETCH
  */
//  Function that holds response error
 function status(response) {
     if(response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
     } else {
         return Promise.reject(new Error(response.statusText));
     }
 }
