function VerDorsais(){
let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/dorsais';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
    console.log(json.dorsais);
});
}