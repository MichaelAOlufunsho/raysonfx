const ENDPOINT = "http://localhost/raysonfx/backend"


function GetParameters(href){
// Get the URL string
const urlString = href;

// Create a URL object
const url = new URL(urlString);

// Get the search parameters from the URL
const searchParams = new URLSearchParams(url.search);
return searchParams

}

export {
    ENDPOINT,
    GetParameters
} 