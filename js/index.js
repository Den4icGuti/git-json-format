const user = {
  name: 'Mango',
  age:10
}


localStorage.setItem('my-data', JSON.stringify({ "name": "Mango", "age": "10" }));

const saveData = localStorage.getItem('my-data');

const parce = JSON.parse(saveData);

console.log(parce)



