const apiUrl = 'https://reqres.in/api';

function load() {
    const url = `${apiUrl}/users`;

    return fetch(url)
    .then(res =>{
        // Not a 200 response
        if(!res.ok){
            throw new Error(`API returned status code ${res.status}`);
        }

        // 200 response
        return res.json();
    })
    // when return the parsed json
    .then(results => results.data)
    // result to data type (??)
    //catch for throw
    .catch(err => {
        console.warn(err);
        
        return null;

    })

}

module.exports.load = load;

