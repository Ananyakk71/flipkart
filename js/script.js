import { loadHead } from './head.js';
import { loadContent  } from './content.js';
fetch("data.json")
.then(function (response) {
    return response.json();
})
.then(function (data) {
    loadHead(data);
    loadContent(data);
})
.catch(error => console.error("Error loading data:", error));