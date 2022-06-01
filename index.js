// Add your code here


fetch('http://localhost:3000/dogs')
.then(response => response.json())
.then((data) =>{
console.log(data)



})