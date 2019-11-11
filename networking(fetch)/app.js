// npm i node-fetch --save
const fetch = require("../node_modules/node-fetch");

 /*
   CHAINING PROMISES WITH FETCH
  */

//  Function that holds response error
const status = (response) => {
    if(response.status >= 200 && response.status < 300) {
       return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}
//  Function that parses json response
const json = response => { return response.json() };
/*
 *
 *
    Using fetch with Headers
 * 
 * 
 */
export function fetchWithHeader() {
    fetch('https://api.github.com/users?since=135').then(function(response) {
    console.log(response.headers.get('Content-Type'));
    console.log(response.headers.get('Date'));

    console.log(response.status);
    console.log(response.statusText);
    console.log(response.type);
    console.log(response.url);
    });
}

/* Using fetch with responses types
* 
 */
 
 export function fetchWithResponseType() {
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
 }
 

/** Combining the fetch function with the function declared above
 * 
 * 
 */
export function normalFetch() {
    fetch('https://api.github.com/users/joshtom')
    .then(status)
    .then(json)
    .then((data) => {
        console.log('Request succeeded with json response', data);
    })
    .catch((err) => {
        console.log('Request failed', err);
    })
}
 

/**
 * POST request with a Fetch Request
 * 
 *  */
export function postFetch() {
    fetch("https://api.github.com/users/joshtom", {
    method: 'POST',
    headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: 'foo=bar&lorem=ipsum',
})
.then(json)
.then(function(data) {
    console.log("Request succeeded with JSON response", data);
}).then((err) => {
    console.log("Error fetching", err);
})

}

 /**
  * FUNCTION THAT RETURN GITHUB USERS GISTS
  */

  export function fetchAsync() {
    async function getUsers(names) {
        let jobs = [];
    
        for (let name of names) {
            let job = fetch(`https://api.github.com/users/${name}`)
            .then(status)
            .then(json)
            .catch((err) => {console.log("Error", err) })
            jobs.push(job);
        }
        let results = await Promise.all(jobs);
    
        return results;
    
      }
  }

/**
 * FETCHING USING ASYNC AND AWAIT TO FETCH DATA ASYNCHRONOUSLY
 * */
export function asyncAwait() {
    async function getUser (names) {
        let jobs = [];
        for(name of names) {
            // let job = fetch(`https://api.github.com/users/${name}`)
            let job = fetch(`https://thesimpsonsquoteapi.glitch.me/${name}`)
            .then(status)
            .then(json)
            .then(data => {
                console.log("Data retrieved", data);
            }).catch(err => {
                console.log(err);
            })
            let push = jobs.push(job)
            // console.log(push); Print the number of arrays passed into the function
        }
        let results = await Promise.all(jobs);
        return results;
        
        
    }
}
// let name = ["quotes"];
// getUser(name);

 

 /**
  * Sending Credentials with a Fetch Request
  * Credentials such as Cookies
  */
export function fetchCredentials() {
    fetch(url, {
        credentials: `include`
    })
}

function postData() {
    const url = '.post.json';
    const data = {username: 'Olajide joshua'};;

    try{
        const response = await fetch(url, {
            method: "POST", // PUT
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await response.json();
        console.log('Success', JSON.stringify(json));
    } catch(error) {
        console.log('Error', error);
    }
};

  


