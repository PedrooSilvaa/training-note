function VerAbdomen(){
let url = 'https://api.sheety.co/e062924c5a972dee5d1a08046e74b444/treino/abdomen';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
    console.log(json.abdomen[1].data);
    let mes = document.getElementById("mes").value
    let dt = "2024" + mes + "01";
    let dtFinal = 2024 + mes +31;
    let data_txt;
    let dataSem;
    let contador = 0;

    let paiTtl = document.getElementById("titulos");
    let abdInfra = document.createElement('th');
    let prancha = document.createElement('th');
    let abdSupra = document.createElement('th');
    let abdInfraFlex = document.createElement('th');

    paiTtl.appendChild(abdInfra);
    paiTtl.appendChild(prancha);
    paiTtl.appendChild(abdSupra);
    paiTtl.appendChild(abdInfraFlex);
    
    abdInfra.innerText = "Abd. Infra";
    prancha.innerText = "Prancha";
    abdSupra.innerText = "Abd. Supra";
    abdInfraFlex.innerText = "Abd. Infra Flex";
    
    for(let i = dt; i<= dtFinal; i ++){

      if(json.abdomen[contador].data != null ){
          data_txt = json.abdomen[contador].data;
          abdInfra_txt = json.abdomen[contador].abdominalInfra;
          prancha_txt = json.abdomen[contador].prancha;
          abdSupra_txt = json.abdomen[contador].abdominalSupra;
          abdInfraFlex_txt = json.abdomen[contador].abdominalInfraFlexionadas;
          contador++
          dataSem = data_txt.replace(/\D/g, '');
        }
        if(dataSem <= i){
          console.log("entrei")
          let tbody = document.getElementById("conteudo");
          let paiCon = document.createElement('tr');
          let txtData = document.createElement('td');
          let txtAbdInfra = document.createElement('td');
          let txtPrancha = document.createElement('td');
          let txtAbdSupra = document.createElement('td');
          let txtAbdInfraFlex = document.createElement('td');

          tbody.appendChild(paiCon);
          paiCon.appendChild(txtData);
          paiCon.appendChild(txtAbdInfra);
          paiCon.appendChild(txtPrancha);
          paiCon.appendChild(txtAbdSupra);
          paiCon.appendChild(txtAbdInfraFlex);
          
          txtData.innerText = data_txt;
          txtAbdInfra.innerText = abdInfra_txt;
          txtPrancha.innerText = prancha_txt;
          txtAbdSupra.innerText = abdSupra_txt;
          txtAbdInfraFlex.innerText = abdInfraFlex_txt;
        }
    }

});
}