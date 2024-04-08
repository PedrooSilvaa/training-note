function VerAbdomen(){
let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/abdomen';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
    console.log(json.abdomen[1].data);
    let dt = 20240401;
    let dtFinal = 20240431;
    let data_execicio;
    let dataSem;
    let contador = 0;
    
    for(let i = dt; i<= dtFinal; i ++){

      if(json.abdomen[contador].data != null ){
          data_execicio = json.abdomen[contador].data;
          contador++
          dataSem = data_execicio.replace(/\D/g, '');
        }

        if(dataSem <= i){
          let pai = document.querySelector("body");
          let texto = document.createElement('h1');

          pai.appendChild(texto);

          texto.innerText = dataSem;
        }
      // console.log(dataSem)
    }

});
}