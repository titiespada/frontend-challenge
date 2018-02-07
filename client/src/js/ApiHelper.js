const API_URL = (process.env.REACT_APP_STAGE === 'dev') 
    ? 'http://localhost:8080/api/'
    : 'https://computer-systems-api.herokuapp.com/api/';

export function fetchAllComputerSystems(successCallback, errorCallback) {
	return fetch(API_URL)
		.then( (response) => response.json() )
		.then( successCallback )
		.catch( errorCallback );
}

export function fetchComputerSystemDetails(id, successCallback, errorCallback) {
	return fetch(API_URL+id)
		.then( (response) => response.json() )
		.then( successCallback )
		.catch( errorCallback );
}