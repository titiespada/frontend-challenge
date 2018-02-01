const API_URL = 'http://localhost:8080/api/';

export function fetchAllComputerSystems() {
	return fetch(API_URL)
	  	.then( (response) => response.json() )
	  	.then( (json) => json )
	  	.catch( (error) => error );
};

export function fetchComputerSystemDetails(id) {
	return fetch(API_URL+id)
		.then( (response) => response.json() )
		.then( (json) => json )
		.catch( (error) => error );
};