
let url = 'https://api.sheety.co/2090c096908a634fb383513960b9d3e6/treino/quadriceps';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log(json.quadriceps);
});