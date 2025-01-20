fetch("../js/fetchPractice.json")

.then(response => {
	return response.json();
})

.then(data => {
	console.log(data);
})

.catch(error => {
    return response.json();
})